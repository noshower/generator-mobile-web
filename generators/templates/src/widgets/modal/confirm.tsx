import { Modal } from 'antd-mobile';
import React from 'react';

type Config = {
  title: React.ReactNode;
  message: React.ReactNode;
  okText?: string;
  cancelText?: string;
};

export default ({ title, message, okText = '确认', cancelText = '取消' }: Config): Promise<boolean> => {
  return new Promise(resolve => {
    Modal.alert(title, message, [
      { text: cancelText, onPress: () => resolve(false) },
      { text: okText, onPress: () => resolve(true) },
    ]);
  });
};
