import React, { useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { CartContext } from "../../context/ShoppingCart";
import styles from "./Cart.module.css";
import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = () => {

  const {
    cart,
    totalItems,
    totalAmount,
    removeProduct,
  } = useContext(CartContext);

  const cartItems = cart.map((product) => {
    return (
      <CSSTransition
        key={product.id}
        classNames="fadeIn"
        timeout={{
          enter: 500,
          exit: 300,
        }}
      >
        <div className={styles.cartItem} key={product.name}>
          <img
            className={styles.productImage}
            src={product.image}
            alt="product"
          />
          <div className={styles.productInfo}>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.productPrice}>{product.price}</p>
          </div>
          <div className={styles.productTotal}>
            <p className={styles.quantity}>
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
            <p className={styles.amount}>{product.quantity * product.price}</p>
          </div>
          <button
            className={styles.productRemove}
            onClick={() => removeProduct(product.id)}
            type="button"
          >
            ×
          </button>
        </div>
      </CSSTransition>
    );
  });

  const getCartView = () => {
    if (cartItems.length <= 0) {
        return <EmptyCart />;
      } else {
        return (
          <>
            <TransitionGroup component="ul" className={styles.cartItems}>
                {cartItems}
            </TransitionGroup>
            <div className={styles.actionBlock}>
                <button
                    type="button"
                    className={cart.length > 0 ? " " : styles.disabled}
                >
                    PROCEED TO CHECKOUT
                </button>
            </div>
          </>
        );
      }
  }

  const getCartBox = () => {
    return <div
        className={`${styles.cartPreview} ${styles.active}`}
    >
        {getCartView()}
    </div>
  }

  return (
      <div className={styles.container}>
        <div className={styles.cart}>
          <div className={styles.cartInfo}>
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{totalItems}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{totalAmount}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {getCartBox()}
        </div>
      </div>
  );
};

export default Cart;