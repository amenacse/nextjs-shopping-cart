import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/Header/Header'
import Products from '../src/components/Products/Products'
import Footer from '../src/components/Footer/Footer'
import styles from '../styles/Home.module.css'
import products from '../product-list.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Products
        productsList={products}
      />
      <Footer />
    </div>
  )
}




