import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const SaleItem = ({ data }) => {
  const { id, title, price, image } = data;
  const classes = useStyles();
  return (
    <Link to={`/sales/${id}`} className={classes.card}>
      <div className={classes.cardContent}>
        <img className={classes.image} src={image.url} alt="Sale" />
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.price}>{`R$ ${parseInt(price).toFixed(2)}`}</p>
        <button className={classes.button}>Comprar</button>
      </div>
    </Link>
  );
};

const useStyles = createUseStyles((theme, props) => ({
  card: {
    margin: "1rem",
    backgroundColor: theme.color2,
    padding: "1rem"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  },
  image: {
    height: "14rem",
    width: "100%"
  },
  title: {
    color: theme.color6,
    marginBottom: "1rem"
    //   height: "15rem"
  },
  price: {
    color: theme.color4,
    fontSize: "2rem",
    marginBottom: "1rem"
  },
  button: {
    padding: "0.5rem 1.5rem",
    border: "none",
    backgroundColor: theme.color3,
    color: theme.color1,
    fontWeight: "bolder",
    fontSize: "1.5rem",
    width: "auto"
  }
}));

export default SaleItem;
