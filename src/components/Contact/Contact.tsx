import React from "react";
import classes from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5 className={classes.subtitle}>Where to find me</h5>
          <h2 className={classes.title}>Contacts</h2>
        </div>
        <div className={classes.sides}>
          <div className={classes.cards}>
            <div className={classes.card}>
              <span>Email</span>
              <span>moshnyakov.alexei@yandex.ru</span>
            </div>
            <div className={classes.card}>
              <span>Telegram</span>
              <span>@palmaaaa10</span>
            </div>
            <div className={classes.card}>
              <span>GitHub</span>
              <span>https://github.com/scoomp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
