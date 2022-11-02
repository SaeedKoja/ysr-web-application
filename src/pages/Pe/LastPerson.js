import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import classes from "./LastPerson.module.css";
import DeletePerson from "../../components/global/DeletePerson";
import Tr from "../../components/global/Tr";
import swal from "sweetalert";

const LastPerson = (props) => {
  const [dataa, setData] = useState([]);
  const [display, setDisplay] = useState([]);

  const fetchHandler = useCallback(async () => {
    const responsev = await fetch("http://localhost:8000/api/pe");
    const dataPe = await responsev.json();
    const wait = await dataPe.data;
    setData(wait);
    setDisplay(wait);
    // setDisplay(dataa);
  }, []);
  const [deletes, setDeletes] = useState();
  const [idDelete, setIdDelete] = useState();

  const deleteHandler = (idDelete) => {
    setIdDelete(idDelete);
    setDeletes({
      title: `حذف السجل`,
      message: "هل أنت متأكد من حذف هذا السجل؟",
    });
  };

  const changeSearshHandler = (event) => {
    let sershQuery = event.target.value;
    let resultSearsh = dataa.filter((array) => {
      return (
        array.NaPe.includes(sershQuery) ||
        array.CoPe.includes(sershQuery) ||
        array.PhoPe1.includes(sershQuery) ||
        (array.TyPe !== null && array.TyPe.includes(sershQuery)) ||
        (array.JoPe !== null && array.JoPe.includes(sershQuery))
      );
    });
    setDisplay(resultSearsh);
  };

  async function confrimHandler() {
    await axios.delete(`http://localhost:8000/api/pe/${idDelete}`);
    setDeletes(false);
  }
  const deleteButtonHandler = () => {
    setDeletes(false);
  };

  useEffect(() => {
    fetchHandler();
  }, [deletes]);
  return (
    <div>
      {deletes && (
        <DeletePerson
          title={deletes.title}
          message={deletes.message}
          onConfrim={confrimHandler}
          onBack={deleteButtonHandler}
          CoPe={dataa.id}
        />
      )}
      <div className={classes.LastPerson}>
        <div className={classes.LastPeContent}>
          <div className={`${classes.logoText} ${classes.width}`}>
            <h4>المراجع</h4>
            <i className="bx bxs-user"></i>
          </div>
          <div className={`${classes.searshPe} ${classes.width}`}>
            <input
              type="text"
              onChange={changeSearshHandler}
              placeholder="ابحث هنا "
            />
            <i className="bx bx-search-alt"></i>
          </div>
          <div className={`${classes.sortPe} ${classes.width}`}>
            <i className="bx bx-sort"></i>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>الرمز</th>
              <th>المرجع</th>
              <th>محمول1</th>
              <th>العمل</th>
              <th>النوع</th>
              <th colSpan="3">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {display.map((val) => (
              <Tr
                key={Math.random() + 1}
                // idd={Math.random()}
                id={val.id}
                onDelete={deleteHandler}
                NaPe={val.NaPe}
                CoPe={val.CoPe}
                PhoPe1={val.PhoPe1}
                JoPe={val.JoPe}
                TyPe={val.TyPe}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastPerson;
