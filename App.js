import { Provider } from 'react-redux';
import store from './store';
import MainComponent from './MainComponent';

export default function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
}
