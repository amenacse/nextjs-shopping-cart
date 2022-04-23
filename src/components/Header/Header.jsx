import React, { useContext } from "react";
import Link from 'next/link';
import styles from './Header.module.css';
import { CartContext } from "../../context/ShoppingCart";

const Header = () => {

    const {
      totalItems
    } = useContext(CartContext);

    return (
      <nav className={styles.navbar}>
        <h6 className={styles.logo}>ViCafe</h6>
        <ul className={styles.links}>
          <li className={styles.navlink}>
            <Link href="/login">Login</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/cart">
              { `Cart ${totalItems ? totalItems : ""}` }
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

export default Header;