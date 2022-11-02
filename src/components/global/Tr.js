import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Tr.module.css";

const Tr = (props) => {

 const deleteHandler = () =>{
  props.onDelete(props.id);
 }

  return (
    <tr key={props.id}>
      <td key="1">{props.CoPe}</td>
      <td key="2">{props.NaPe}</td>
      <td key="3">{props.PhoPe1}</td>
      <td key="4">{props.JoPe}</td>
      <td key="5">{props.TyPe}</td>
      <td key="7" className={classes.childrenn}>
        <NavLink to={`/Persen/Detials/${props.id}`}>
          <i className="bx bxs-user-detail" style={{ color: "#4377f1" }}></i>
        </NavLink>
        |
        <NavLink to={`/Person/Edit/${props.id}`}>
          <i className="bx bx-edit-alt" style={{ color: "#FF9A00" }}></i>
        </NavLink>
        |
        <i
          className="bx bx-trash"
          style={{ color: "#FF2D2D", cursor: "pointer" }}
          onClick={deleteHandler}
        ></i>
      </td>
    </tr>
  );
};

export default Tr;
