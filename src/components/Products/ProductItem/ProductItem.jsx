import React, { useState, useEffect } from "react";
import Counter from "../../Counter/Counter";
import styles from "./ProductItem.module.css";

const ProductItem = ({
  addToCart,
  id,
  price,
  image,
  name,
  unit,
}) => {
  const [quantity, updateQuantity] = useState(1);
  const [isAdded, setAddState] = useState(false);

  useEffect(() => {
    if (!isAdded) {
      return;
    }
    const timer1 = setTimeout(() => setAddState(false), 3500);
    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(timer1);
    };
  }, [isAdded]);

  const addButtonClicked = (
    imageLocal,
    nameLocal,
    priceLocal,
    idLocal,
    quantityLocal
  ) => {
    const selectedProduct = {
      image: imageLocal,
      name: nameLocal,
      price: priceLocal,
      id: idLocal,
      quantity: quantityLocal,
    };
    addToCart(selectedProduct);
    setAddState(true);
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles.product}>
        <div className={styles.outline}>
          <div
            className={styles.productImage}
            role="button"
          >
            <img width={'100%'} src={image} alt={name} />
          </div>
          <h4 className={styles.productName}>{`${name} - ${unit}`}</h4>
          <p className={styles.productPrice}>{price}</p>
          <Counter productQuantity={quantity} updateQuantity={updateQuantity} />
          <div className={styles.productAction}>
            <button
              className={[!isAdded ? "" : styles.added, styles.button]}
              type="button"
              onClick={() =>
                addButtonClicked(image, name, price, id, quantity)
              }
            >
              {!isAdded ? "ADD TO CART" : "✔ ADDED"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
