import React, { useEffect , useContext } from "react";
import { useRouter } from 'next/router';
import { CartContext } from "../../../context/ShoppingCart";
import styles from "./Home.module.css";
import EmptyCart from "../../EmptyCart/EmptyCart";
import {Container, Button} from 'reactstrap';

const Profile = () => {
  
  const router = useRouter();
  const {
    authUser,
    loading
  } = useContext(CartContext);

   // Listen for changes on loading and authUser, redirect if needed
   useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])



  return (
    <Container>
      <h1>You are logged in !</h1>
      <Button onClick={signOut}>Sign out</Button>
    </Container>
  );
};

export default Profile;