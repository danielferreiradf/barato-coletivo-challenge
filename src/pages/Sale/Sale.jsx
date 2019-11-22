import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { createUseStyles } from "react-jss";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

const Sale = ({ match }) => {
  const id = match.params.id;

  const [saleItem, setSaleItem] = useState(null);
  let imagesArray = [];

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSaleItem = async () => {
      const res = await axios.get(
        `https://playground.barato.com.br/desafio-front/api/offer/${id}`
      );

      setSaleItem(res.data);
    };

    fetchSaleItem();
  }, [id]);

  const createImagesArray = () => {
    saleItem.images.forEach(image => {
      imagesArray.push({
        original: image.url,
        thumbnail: image.url,
        originalClass: "bosta",
        thumbnailClass: "bosta"
      });
    });
  };

  const addItemToCart = () => {
    const item = {
      id: saleItem.id,
      title: saleItem.title,
      price: parseInt(saleItem.price)
    };
    dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
  };

  // Render
  if (!saleItem) {
    return <h1>Loading</h1>;
  } else {
    createImagesArray();
    return (
      <section className={classes.sale}>
        <div className="container">
          <div className={classes.saleContent}>
            <div className={classes.carousel}>
              <h1>Image Gallery</h1>
              {/* <ImageGallery items={imagesArray} /> */}
            </div>
            <div className={classes.info}>
              <p className={classes.category}>{saleItem.category}</p>
              <h1 className={classes.title}>{saleItem.title}</h1>
              <p className={classes.price}>{`R$ ${saleItem.price}`}</p>
              <Link
                onClick={addItemToCart}
                to="/payment"
                className={classes.button}
              >
                Comprar
              </Link>
            </div>
          </div>

          <div className={classes.description}>{saleItem.description}</div>
        </div>
      </section>
    );
  }
};

const useStyles = createUseStyles((theme, props) => ({
  sale: {
    padding: "5rem 0"
  },
  saleContent: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  category: {
    fontSize: "1.5rem",
    marginBottom: "1rem"
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem"
  },
  price: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: theme.color4
  },
  description: {
    padding: "2rem",
    fontSize: "1.5rem"
  },
  carouselThumbnail: {
    width: "5rem",
    height: "5rem"
  },
  button: {
    padding: ".5rem 2rem",
    backgroundColor: theme.color3,
    color: theme.color5,
    fontSize: "2rem",
    marginBottom: "3rem"
  }
}));

export default Sale;
