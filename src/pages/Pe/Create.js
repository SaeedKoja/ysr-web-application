import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Create.css";
import swal from "sweetalert";

function AllCode(props) {
  // const navigate = useNavigate();
  // const current = new Date();
  // const date = `${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;
  // const [day ,setday] =useState();
  const [Details, setEntered] = useState({
    CoPe: "",
    NaPe: "",
    JoPe: "",
    TelPe: "",
    FaxPe: "",
    PhoPe1: "",
    PhoPe2: "",
    PlPe: "",
    NotPe: "",
    EmPe: "",
    DaNPe: "",
    CoRq: "",
    FaPe: "",
    MaPe: "",
    BirthPe: "",
    NoNuPe: "",
    NoNu1Pe: "",
    CfPe: "",
    TyPe: "",
    GePe: "",
    Creator: "",
    AttPe: "",
    Co: "",
    AttF: "",
    AttL: "",
  });

  const [dataa, setData] = useState([]);
  const [enteredName, setEnteredName] = useState("");
  const [enteredCoco, setEnteredCoco] = useState("");
  const [enteredGePe, setEnteredGePe] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [nameTouch, setNameTouch] = useState(false);
  const [cocoTouch, setCocoTouch] = useState(false);
  const [phoneTouch, setPhoneTouch] = useState(false);
  const [GePeTouch, setGePeTouch] = useState(false);
  const [primaryCo, setPrimaryCo] = useState("");

  const blurHandlerN = (event) => {
    for (let index = 0; index < dataa.length; index++) {
      if (dataa[index].NaPe === event.target.value) {
        event.target.value = "";
        setNameTouch(true);
        swal({
          icon: "warning",
          timer: 1800,
          title: "اسم الزميل موجود ...يرجى ادخال اسم غير مكرر",
        });
      }
    }
  };
  const blurHandlerP = (event) => {
    for (let index = 0; index < dataa.length; index++) {
      if (dataa[index].PhoPe1 === event.target.value) {
        event.target.value = "";
        setPhoneTouch(true);
        swal({
          icon: "warning",
          timer: 1800,
          title: " !! الرقم موجود ...يرجى التأكد منه مرة اخرى ",
        });
      }
    }
  };
  const blurHandlerC = (event) => {
    let x = -10;
    for (let i = 0; i < dataa.length; i++) {
      console.log(event.target.value);
      // console.log(dataa[i].NaPe);
      if (event.target.value === dataa[i].NaPe) {
        x = i;
        setPrimaryCo(dataa[i].CoPe);
        console.log(dataa[i].CoPe);
      }
    }
    if (x === -10) {
      setCocoTouch(true);
      swal({
        icon: "warning",
        timer: 1600,
        title: "الزميل الطالب غير موجود ...يرجى ادخال اسم صالح",
      });
      setEntered((prev) => {
        return {
          ...prev,
          CoRq: "",
        };
      });
      setPrimaryCo("");
      setEnteredCoco("");
    }
  };
  const blurHandlerG = () => {
    setGePeTouch(true);
  };
  const fetchHandler = useCallback(async () => {
    const responsev = await fetch("http://localhost:8000/api/pe");
    const dataPe = await responsev.json();
    const wait = await dataPe.data;
    setData(wait);
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [Details.CoRq]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(Details.AttPe);
    const res = await axios.post("http://localhost:8000/api/pe", {
      NaPe: Details.NaPe,
      JoPe: Details.JoPe,
      TelPe: Details.TelPe,
      FaxPe: Details.FaxPe,
      PhoPe1: Details.PhoPe1,
      PhoPe2: Details.PhoPe2,
      PlPe: Details.PlPe,
      NotPe: Details.NotPe,
      EmPe: Details.EmPe,
      DaNPe: Details.DaNPe,
      CoRq: primaryCo,
      FaPe: Details.FaPe,
      MaPe: Details.MaPe,
      BirthPe: Details.BirthPe,
      NoNuPe: Details.NoNuPe,
      NoNu1Pe: Details.NoNu1Pe,
      CfPe: Details.CfPe,
      TyPe: Details.TyPe,
      GePe: Details.GePe,
      Creator: Details.Creator,
      AttPe: Details.AttPe,
      Co: Details.Co,
      AttF: Details.AttF,
      AttL: Details.AttL,
    });
    setNameTouch(true);
    setCocoTouch(true);
    setPhoneTouch(true);
    setGePeTouch(true);
    if (!res.ok) {
      setGePeTouch(false);
      setEntered({
        CoPe: "",
        NaPe: "",
        JoPe: "",
        TelPe: "",
        FaxPe: "",
        PhoPe1: "",
        PhoPe2: "",
        PlPe: "",
        NotPe: "",
        EmPe: "",
        DaNPe: "",
        CoRq: "",
        FaPe: "",
        MaPe: "",
        BirthPe: "",
        NoNuPe: "",
        NoNu1Pe: "",
        CfPe: "",
        TyPe: "",
        GePe: "",
        Creator: "",
        AttPe: "",
        Co: "",
        AttF: "",
        AttL: "",
      });
    }
  };

  const ChangeValue = (event) => {
    const { name, value } = event.target;

    if (name === "NaPe") {
      setEnteredName(value);
      setNameTouch(true);
    }
    if (name === "CoRq") {
      setEnteredCoco(value);
      setCocoTouch(true);
    }
    if (name === "PhoPe1") {
      setEnteredPhone(value);
      setPhoneTouch(true);
    }
    if (name === "GePe") {
      setEnteredGePe(value);
      setGePeTouch(true);
    }
    setEntered((prev) => {
      return {
        ...prev,
        [name]: value,
        // AttF :event.target.files[0],
        // AttL: event.target.files[1],
        // AttPe : event.target.files[2],
      };
    });
    // if (name === 'AttPe'){
    //   setEntered({
    //   AttF :event.target.files[0]})
    // }
    console.log(event.target);
  };

  const nameIsValid = enteredName.trim() !== "";
  const phoneIsValid = enteredPhone.trim() !== "";
  const cocoIsValid = enteredCoco.trim() !== "";
  const gePeIsValid = enteredGePe.trim() !== "";
  const inputNameIsInvalid = !nameIsValid && nameTouch;
  const className = inputNameIsInvalid ? "error" : "";
  const inputPhoneIsInvalid = !phoneIsValid && phoneTouch;
  const classPhone = inputPhoneIsInvalid ? "error" : "";
  const inputCocoIsInvalid = !cocoIsValid && cocoTouch;
  const classCoco = inputCocoIsInvalid ? "error" : "";
  const inputGePeIsInvalid = !gePeIsValid && GePeTouch;
  const classGePe = inputGePeIsInvalid ? "error" : "";

  const clickHandler = () => {
    if (!nameIsValid || !phoneIsValid || !cocoIsValid || !gePeIsValid) {
      swal({
        icon: "warning",
        timer: 1700,
        title: "الرجاء تعبئة الحقول المطلوبة",
      });
    } else {
      swal({
        title: "تم عملية الإضافة بنجاح",
        timer: 2000,
        icon: "success",
      });
    }
  };
  return {
    ChangeValue,
    blurHandlerN,
    blurHandlerP,
    blurHandlerC,
    blurHandlerG,
    submitHandler,
    clickHandler,
    className,
    classPhone,
    classCoco,
    classGePe,
    Details,
    dataa,
  };
}
const Create = (props) => {
  const {
    ChangeValue,
    blurHandlerN,
    blurHandlerP,
    blurHandlerC,
    // blurHandlerG,
    submitHandler,
    clickHandler,
    className,
    classPhone,
    classCoco,
    classGePe,
    content,
    Details,
    dataa,
  } = AllCode();

  const rlt = "ltr";

  return (
    <div className="creat">
      <div className="row">
        <div className="col">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <div className="child">
                <input
                  className={className}
                  type="text"
                  name="NaPe"
                  value={Details.NaPe}
                  onBlur={blurHandlerN}
                  onChange={ChangeValue}
                  autoFocus
                />
                <label class="top-top">اسم الشخص</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  name="JoPe"
                  onChange={ChangeValue}
                  value={Details.JoPe}
                />
                <label class="top-top">العمل</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  name="CoRq"
                  value={Details.CoRq}
                  onChange={ChangeValue}
                  onBlur={blurHandlerC}
                  className={classCoco}
                  list={dataa}
                />
                <label class="top-top">الزميل الطالب</label>
                <datalist id={dataa}>
                  {dataa.map((array) => (
                    <option>{array.NaPe}</option>
                  ))}
                </datalist>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="child">
                <input
                  className={classPhone}
                  type="text"
                  style={{ direction: rlt }}
                  value={Details.PhoPe1}
                  name="PhoPe1"
                  onBlur={blurHandlerP}
                  onChange={ChangeValue}
                />
                <label class="top-top">محمول 1</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  style={{ direction: rlt }}
                  name="PhoPe2"
                  value={Details.PhoPe2}
                  onChange={ChangeValue}
                />
                <label class="top-top">محمول 2</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  style={{ direction: rlt }}
                  name="TelPe"
                  value={Details.TelPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">الهاتف</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  style={{ direction: rlt }}
                  name="FaxPe"
                  value={Details.FaxPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">الفاكس</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="child">
                <select name="TyPe" value={Details.TyPe} onChange={ChangeValue}>
                  <option selected="selected" disabled="disabled"></option>
                  <option>شخص</option>
                  <option>جهة</option>
                </select>
                <label class="GePe">النوع</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <select
                  name="GePe"
                  value={Details.GePe}
                  onChange={ChangeValue}
                  // onBlur={blurHandlerG}
                  className={classGePe}
                >
                  {/* <option selected disabled> -- اختر الجنس -- </option> */}
                  <option label=""></option>
                  <option>ذكر</option>
                  <option>انثى</option>
                </select>
                <label class="GePe">الجنس</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  value={Details.Creator}
                  name="Creator"
                  onChange={ChangeValue}
                />
                <label class="top-top">المنشأ</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="child">
                <input
                  type="text"
                  name="FaPe"
                  value={Details.FaPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">الأب</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  name="MaPe"
                  value={Details.MaPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">الأم</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  name="PlPe"
                  value={Details.PlPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">المكان</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  name="EmPe"
                  value={Details.EmPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">الإيميل</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="child">
                <input
                  type="text"
                  name="BirthPe"
                  value={Details.BirthPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">محل وتاريخ الولادة</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  name="NoNu1Pe"
                  value={Details.NoNu1Pe}
                  onChange={ChangeValue}
                />
                <label class="top-top">رقم الهوية</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  name="NoNuPe"
                  value={Details.NoNuPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">الرقم الوطني</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="text"
                  name="CfPe"
                  value={Details.CfPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">الأمانة و القيد</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="child">
                <input
                  type="text"
                  name="NotPe"
                  value={Details.NotPe}
                  onChange={ChangeValue}
                />
                <label class="top-top">الملاحظات</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="child">
                <input
                  type="file"
                  name="AttPe"
                  value={Details.AttPe}
                  onChange={ChangeValue}
                />
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="file"
                  name="AttF"
                  value={Details.AttF}
                  onChange={ChangeValue}
                />
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="file"
                  name="AttL"
                  value={Details.AttL}
                  onChange={ChangeValue}
                />
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
            </div>
            <div className="btnSubmit">
              {content}
              <button type="submit" onClick={clickHandler}>
                ارسال
              </button>
              <NavLink to="/Persen/LastPerson">الغاء</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
