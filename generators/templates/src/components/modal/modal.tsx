import React from 'react';
import { Modal } from 'antd-mobile';
import { ModalProps } from 'antd-mobile/lib/modal/Modal';
import ReactDOM from 'react-dom';

const destroyFns: Array<() => void> = [];

type Config = ModalProps & { afterClose?: () => void };

type Return = {
  destroy: () => void;
  update: (newConfig: Config) => void;
};

export const destroyAll = (): void => {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};

const defaultProps: Partial<Config> = {
  visible: true,
  transparent: true,
};

/* eslint @typescript-eslint/no-use-before-define: 0 */

export default function modal(config: Omit<Config, 'visible'>, component: React.ReactNode): Promise<Return> {
  return new Promise(resolve => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    let currentConfig: Config = { ...defaultProps, ...config, onClose: close, visible: true };

    function destroy() {
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }

      resolve();

      for (let i = 0; i < destroyFns.length; i += 1) {
        const fn = destroyFns[i];
        if (fn === close) {
          destroyFns.splice(i, 1);
          break;
        }
      }
    }

    function render({ ...props }: Config) {
      ReactDOM.render(<Modal {...props}>{component}</Modal>, div);
    }

    function close() {
      currentConfig = {
        ...currentConfig,
        visible: false,
        afterClose: destroy,
      };
      render(currentConfig);
    }

    function update(newConfig: ModalProps) {
      currentConfig = {
        ...currentConfig,
        ...newConfig,
      };
      render(currentConfig);
    }

    render(currentConfig);

    destroyFns.push(close);

    return {
      destroy: close,
      update,
    };
  });
}
