import React from "react";
import styles from "./Counter.module.css";

const Counter = ({ productQuantity, updateQuantity }) => {
  const increment = () => {
    updateQuantity(productQuantity + 1);
  };

  const decrement = () => {
    if (productQuantity > 1) {
      updateQuantity(productQuantity - 1);
    }
  };

  const feed = (e) => {
    updateQuantity(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.stepperInput}>
      <button className={styles.decrement} onClick={decrement} type="button">
        –
      </button>
      <input
        type="number"
        className={styles.quantity}
        value={productQuantity}
        onChange={feed}
      />
      <button className={styles.increment} onClick={increment} type="button">
        +
      </button>
    </div>
  );
};

export default Counter;
