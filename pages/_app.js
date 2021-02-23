import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/scss/now-ui-kit.scss'

// styles for this kit
import "../assets/css/bootstrap.min.css";
import "../assets/scss/now-ui-kit.scss?v=1.4.0";
import "../assets/demo/demo.css?v=1.4.0";
import "../assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
