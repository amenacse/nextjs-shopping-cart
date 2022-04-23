import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>Selise</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;