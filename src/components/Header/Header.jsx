import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../../assets/images/shopping-cart.svg";

const Header = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.headerContent}>
          <Link to="/">
            <h1 className={classes.title}>Barato Coletivo</h1>
          </Link>
          <Link to="/payment">
            <img className={classes.cart} src={Cart} alt="Shopping Cart" />
            {cartItems.length > 0 ? <p>{cartItems.length}</p> : null}
          </Link>
        </div>
      </div>
    </header>
  );
};

const useStyles = createUseStyles((theme, props) => ({
  header: {
    backgroundColor: theme.color1,
    borderBottom: `3px solid ${theme.color5}`
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 1rem"
  },
  title: {
    color: theme.color6,
    fontSize: "2.5rem",
    fontWeight: "normal"
  },
  cart: {
    height: "3rem"
  }
}));

export default Header;
