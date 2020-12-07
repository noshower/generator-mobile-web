import { render } from 'react-dom';
import fastclick from 'fastclick';
import { Toast } from 'antd-mobile';
import App from './app';

document.addEventListener('DOMContentLoaded', () => {
  fastclick.attach(document.body);
});

Toast.config({ duration: 1.5 });

render(<App />, document.getElementById('root'));
