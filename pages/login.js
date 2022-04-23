import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Login from "../src/components/Auth/Login/Login";
import styles from '../styles/Home.module.css'

const LoginPage = () => {
    return (
        <div className={styles.container}>
          <Header/>
          <Login />
          <Footer />
        </div>
      )
}

export default LoginPage;

