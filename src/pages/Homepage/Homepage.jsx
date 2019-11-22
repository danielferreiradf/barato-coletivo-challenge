import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import axios from "axios";

import SaleItem from "../../components/SaleItem/SaleItem";

const Homepage = () => {
  const classes = useStyles();
  const [sales, setSales] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      const res = await axios.get(
        "https://playground.barato.com.br/desafio-front/api/offers"
      );
      setSales(res.data);
    };
    fetchSales();
  }, []);

  const renderSales = () => {
    return sales.map(sale => <SaleItem key={sale.id} data={sale} />);
  };

  // Render
  return !sales ? (
    <h1>Loading...</h1>
  ) : (
    <section className={classes.homepage}>
      <div className="container">
        <div className={classes.homepageContent}>{renderSales()}</div>
      </div>
    </section>
  );
};

const useStyles = createUseStyles((theme, props) => ({
  homepage: {
    padding: "5rem 1rem"
  },
  homepageContent: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  }
}));

export default Homepage;
