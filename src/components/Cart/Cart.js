import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ name: "sushi" }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.623</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}> close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
