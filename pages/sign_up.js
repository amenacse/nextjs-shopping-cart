import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import SignUp from "../src/components/Auth/SignUp/SignUp";
import styles from '../styles/Home.module.css'

const SignUpPage = () => {
    return (
        <div className={styles.container}>
          <Header/>
          <SignUp />
          <Footer />
        </div>
      )
}

export default SignUpPage;

