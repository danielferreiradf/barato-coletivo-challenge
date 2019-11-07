import React from "react";
import { createUseStyles } from "react-jss";

import Cart from "../../assets/images/shopping-cart.svg";

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.headerEl}>
      <div className="container">
        <div className={classes.header}>
          <h1 className={classes.title}>Barato Coletivo</h1>
          <img className={classes.cart} src={Cart} alt="Shopping Cart" />
        </div>
      </div>
    </header>
  );
};

const useStyles = createUseStyles(theme => ({
  headerEl: {
    backgroundColor: "blue"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 1rem"
  },
  title: {
    color: theme.color2
  },
  cart: {
    height: "3rem"
  }
}));

export default Header;
