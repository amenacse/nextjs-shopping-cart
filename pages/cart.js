import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Cart from "../src/components/Cart/Cart";
import styles from '../styles/Home.module.css'

const CartPage = () => {
    return (
        <div className={styles.container}>
          <Header/>
          <Cart />
          <Footer />
        </div>
      )
}

export default CartPage;

