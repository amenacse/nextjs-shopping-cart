import React, { createContext, useReducer } from "react";
// import useFirebaseAuth from '../../util/useFirebaseAuth';
import CartReducer from "./CartReducer";






const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  bounce: false,
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  signOut: async () => {}
};

export const CartContext = createContext(initialState);
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // const {
  //   authUser,
  //   loading,
  //   signInWithEmailAndPassword,
  //   createUserWithEmailAndPassword,
  //   signOut
  // } = useFirebaseAuth();

  const removeProduct = (id) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  };

  const addProduct = (selectedProducts) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: selectedProducts,
    });
  };

  const bouceEnd = () => {
    dispatch({
      type: "BOUNCE_END",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        bounce: state.bounce,
        removeProduct,
        addProduct,
        bouceEnd,
        // authUser,
        // loading,
        // signInWithEmailAndPassword,
        // createUserWithEmailAndPassword,
        // signOut
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
