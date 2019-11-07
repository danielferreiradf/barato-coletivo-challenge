import React from "react";
import { createUseStyles } from "react-jss";

import Cart from "../../assets/images/shopping-cart.svg";

const Header = ({ cartColor }) => {
  const classes = useStyles({ cartColor });

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.headerContent}>
          <h1 className={classes.title}>Barato Coletivo</h1>
          <img className={classes.cart} src={Cart} alt="Shopping Cart" />
        </div>
      </div>
    </header>
  );
};

const useStyles = createUseStyles((theme, props) => ({
  header: {
    backgroundColor: theme.color5,
    borderBottom: `3px solid ${theme.color4}`
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5rem 1rem"
  },
  title: {
    color: theme.color6,
    fontSize: "2.5rem"
  },
  cart: {
    background: props => props.cartColor,
    height: "3rem"
  }
}));

export default Header;
