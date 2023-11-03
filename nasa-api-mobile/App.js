import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Routes from './src/Routes/Routes';

export default function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};