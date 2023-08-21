import ReactDOM from 'react-dom/client';
import { App } from './App';
import './fonts/Roboto-Regular.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<App />);
