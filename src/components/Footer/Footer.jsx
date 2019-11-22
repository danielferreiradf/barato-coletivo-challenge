import React from "react";
import { createUseStyles } from "react-jss";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footerContent}>
          <h1 className={classes.title}>Footer</h1>
        </div>
      </div>
    </footer>
  );
};

const useStyles = createUseStyles((theme, props) => ({
  footer: {
    backgroundColor: theme.color3,
    color: "red",
    borderTop: `3px solid ${theme.color4}`
  },
  footerContent: {
    padding: "2rem 1rem"
  },
  title: {
    fontSize: "3rem"
  }
}));

export default Footer;
