import "../assets/css/bootstrap.min.css";
import "../assets/scss/main.scss?v=1.4.0";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import configureStore from '../redux/store/store'
import { Provider } from "react-redux";
const { store } = configureStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}

export default MyApp
