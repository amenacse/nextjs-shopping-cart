import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Profile from "../src/components/Profile/Profile";
import styles from '../styles/Home.module.css'

const ProfilePage = () => {
    return (
        <div className={styles.container}>
          <Header/>
          <Home />
          <Footer />
        </div>
      )
}

export default ProfilePage;

