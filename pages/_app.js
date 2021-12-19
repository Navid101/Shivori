import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import store from "./../redux/store"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <Footer></Footer>
    </Provider>
    )
}

export default MyApp
