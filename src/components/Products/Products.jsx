import React, { useContext } from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Products.module.css';
import ProductItem from './ProductItem/ProductItem';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { CartContext } from "../../context/ShoppingCart";

const Products = ({ productsList }) => {

  const { addProduct } = useContext(CartContext);

  const productsData = productsList
    .map((product, index) => {
      return (
        <CSSTransition
          key={product.id}
          classNames="fadeIn"
          timeout={{
            enter: 300,
            exit: 500,
          }}
        >
          <ProductItem
            key={index}
            id={product.product_id}
            name={product.title}
            image={product.image_url}
            description={product.description}
            price={product.price}
            addToCart={addProduct}
          />
        </CSSTransition>
      );
    });
  
  return <div className={styles.productsWrapper}>
      <TransitionGroup component="div" className={styles.products}>
        {productsData}
      </TransitionGroup>
    </div>;

};
export default Products;