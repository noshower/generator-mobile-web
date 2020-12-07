import { Modal } from 'antd-mobile';
import { ReactNode } from 'react';

type Config = {
  title: ReactNode;
  message: ReactNode;
  okText?: string;
  cancelText?: string;
};

export default ({ title, message, okText = '确认', cancelText = '取消' }: Config): Promise<boolean> =>
  new Promise(resolve => {
    Modal.alert(title, message, [
      { text: cancelText, onPress: () => resolve(false) },
      { text: okText, onPress: () => resolve(true) },
    ]);
  });
