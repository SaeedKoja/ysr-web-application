import React from "react";
import classes from "./DeletePerson.module.css";
import { useNavigate } from "react-router-dom";

const DeletePerson = (props) => {


  return (
    <div className={classes.delete}>
      {" "}
      <div className={classes.container}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <div className={classes.foot}>
          <button onClick={props.onConfrim}>
            تأكيد
          </button>
          <button onClick={props.onBack}>إلغاء</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePerson;
