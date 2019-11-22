import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { createUseStyles } from "react-jss";

const Payment = () => {
  const [orderTotal, setOrderTotal] = useState(0);
  const cartItems = useSelector(state => state.cart.cartItems);
  const classes = useStyles();

  useEffect(() => {
    // Calculate total of items in cart
    const amount = cartItems.reduce((total, item) => {
      return (total += item.price);
    }, 0);
    setOrderTotal(amount);
  }, [cartItems]);

  return (
    <section className={classes.payment}>
      <div className="container">
        <div className={classes.paymentContent}>
          <div className={classes.paymentInfo}>
            <h1>Payment</h1>
          </div>
          <div className={classes.orderDetails}>
            <h1>Order Details</h1>
            {cartItems &&
              cartItems.map(item => {
                return (
                  <div key={item.id} className={classes.cartItem}>
                    <p className={classes.cartItemTitle}>{item.title}</p>
                    <p className={classes.cartItemQuantity}>
                      Quantity: {item.quantity}
                    </p>
                    <p
                      className={classes.cartItemPrice}
                    >{`R$ ${item.price}`}</p>
                  </div>
                );
              })}
            <h1>Total</h1>
            <p className={classes.orderTotal}>
              {!orderTotal ? "Nao ha items no carrinho." : `R$ ${orderTotal}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const useStyles = createUseStyles((theme, props) => ({
  paymentContent: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  cartItem: {
    padding: "1rem",
    backgroundColor: theme.color2
  },
  cartItemTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    fontWeight: "bold"
  },
  cartItemQuantity: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: theme.color4
  },
  cartItemPrice: {
    fontSize: "2rem"
  },
  orderTotal: {
    fontSize: "3rem"
  }
}));

export default Payment;
