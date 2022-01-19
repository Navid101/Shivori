import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import store from "./../redux/store"
import MessengerCustomerChat from 'react-messenger-customer-chat';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <MessengerCustomerChat
    pageId="100398064943718"
    appId="1660785550761634"
    />
    <Footer></Footer>
    </Provider>
    )
}

export default MyApp
