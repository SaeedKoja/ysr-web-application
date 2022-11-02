import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import "./Detials.css";
import swal from "sweetalert";

function AllCode() {
  const navigate = useNavigate();
  // const current = new Date();
  // const date = `${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;
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
  const arrayData = [Details];

  const [enteredName, setEnteredName] = useState("");
  const [enteredCoco, setEnteredCoco] = useState("");
  const [enteredGePe, setEnteredGePe] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [nameTouch, setNameTouch] = useState(false);
  const [cocoTouch, setCocoTouch] = useState(false);
  const [phoneTouch, setPhoneTouch] = useState(false);
  const [GePeTouch, setGePeTouch] = useState(false);

  const blurHandlerN = (event) => {
    setNameTouch(true);
  };
  const blurHandlerP = (event) => {
    setPhoneTouch(true);
  };
  const blurHandlerC = (event) => {
    setCocoTouch(true);
    // for (let i in arrayData) {
    //   console.log(event.target.value);
    //   if (event.target.value !== arrayData[i].NaPe) {
    //     swal({
    //       icon: "warning",
    //       timer: 1500,
    //       title: "الزميل الطالب غير موجود ...يرجى ادخال اسم صالح",
    //     });
    //     setEntered((prev) => {
    //       return {
    //         ...prev,
    //         CoRq: "",
    //       };
    //     });
    //     setEnteredCoco("");
    //   }
    // }
  };
  const blurHandlerG = (event) => {
    setGePeTouch(true);
  };
  const [allData, setAllData] = useState();
  const param = useParams();
  async function comp() {
    const res = await axios.get(`http://localhost:8000/api/pe/${param.id}`);
    // console.log(res)
    // console.log(res.data);
    const res2 = await axios.get(`http://localhost:8000/api/pe`);
    // console.log(res2.data);
    const convert = Object.values(res2.data).flat();
    setAllData(convert);
    let d;
    for (let i in convert) {
      if (res.data[0].CoRq === convert[i].CoPe) d = convert[i].NaPe;
    }
    // console.log(d);
    setEntered({
      CoPe: res.data[0].CoPe,
      NaPe: res.data[0].NaPe,
      JoPe: res.data[0].JoPe,
      TelPe: res.data[0].TelPe,
      FaxPe: res.data[0].FaxPe,
      PhoPe1: res.data[0].PhoPe1,
      PhoPe2: res.data[0].PhoPe2,
      PlPe: res.data[0].PlPe,
      NotPe: res.data[0].NotPe,
      EmPe: res.data[0].EmPe,
      DaNPe: res.data[0].DaNPe,
      CoRq: res.data[0].CoRq,
      FaPe: res.data[0].FaPe,
      MaPe: res.data[0].MaPe,
      BirthPe: res.data[0].BirthPe,
      NoNuPe: res.data[0].NoNuPe,
      NoNu1Pe: res.data[0].NoNu1Pe,
      CfPe: res.data[0].CfPe,
      TyPe: res.data[0].TyPe,
      GePe: res.data[0].GePe,
      Creator: res.data[0].Creator,
      AttPe: res.data[0].AttPe,
      Co: res.data[0].Co,
      AttF: res.data[0].AttF,
      AttL: res.data[0].AttL,
    });
  }

  useEffect(() => {
    comp();
  }, []);
  async function updateHandler(e) {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:8000/api/pe/${param.id}`,
      Details
    );
    console.log(res.data);
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
    setNameTouch(true);
    setCocoTouch(true);
    setPhoneTouch(true);
    setGePeTouch(true);
    navigate("/Persen/LastPerson");
  }

  const ChangeValue = (event) => {
    const { name, value } = event.target;
    console.log("fffff");

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
      };
    });
  };

  const nameIsValid = enteredName.trim() !== "";
  const phoneIsValid = enteredPhone.trim() !== "";
  const cocoIsValid = enteredCoco.trim() !== "";
  const GePeIsValid = enteredGePe.trim() !== "";
  const inputNameIsInvalid = !nameIsValid && nameTouch;
  const className = inputNameIsInvalid ? "error" : "";
  const inputPhoneIsInvalid = !phoneIsValid && phoneTouch;
  const classPhone = inputPhoneIsInvalid ? "error" : "";
  const inputCocoIsInvalid = !cocoIsValid && cocoTouch;
  const classCoco = inputCocoIsInvalid ? "error" : "";
  const inputGePeIsInvalid = !GePeIsValid && GePeTouch;
  const classGePe = inputGePeIsInvalid ? "error" : "";

  const clickHandler = () => {
    if (!nameIsValid || !phoneIsValid || !cocoIsValid || !GePeIsValid) {
      swal({
        icon: "success",
        timer: 500,
        title: "تم عملية الإضافة بنجاح",
      });
    }
  };

  return {
    ChangeValue,
    blurHandlerN,
    blurHandlerP,
    blurHandlerC,
    blurHandlerG,
    updateHandler,
    clickHandler,
    arrayData,
    className,
    classPhone,
    classCoco,
    classGePe,
    Details,
  };
}

const Detials = () => {
  const {
    ChangeValue,
    blurHandlerN,
    blurHandlerP,
    blurHandlerC,
    blurHandlerG,
    updateHandler,
    clickHandler,
    arrayData,
    className,
    classPhone,
    classCoco,
    classGePe,
    content,
    Details,
  } = AllCode();

  const rlt = "ltr";
  return (
    <div className="Detials">
      <div className="row">
        <div className="col">
          <form onSubmit={updateHandler}>
            <div className="form-group">
              <div className="child">
                <input
                  readOnly
                  className={className}
                  type="text"
                  name="NaPe"
                  value={Details.NaPe}
                  onBlur={blurHandlerN}
                  onChange={ChangeValue}
                />
                <label class="top-top">اسم الشخص</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  value={Details.JoPe}
                  type="text"
                  name="JoPe"
                  onChange={ChangeValue}
                />
                <label class="top-top">العمل</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  name="CoRq"
                  value={Details.CoRq}
                  onChange={ChangeValue}
                  onBlur={blurHandlerC}
                  className={classCoco}
                  list={Details}
                />
                <label class="top-top">الزميل الطالب</label>
                <datalist id={arrayData}>
                  {arrayData.map((array) => (
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
                  readOnly
                  className={classPhone}
                  type="text"
                  style={{ direction: rlt }}
                  name="PhoPe1"
                  value={Details.PhoPe1}
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
                  readOnly
                  type="text"
                  style={{ direction: rlt }}
                  name="PhoPe2"
                  onChange={ChangeValue}
                  value={Details.PhoPe2}
                />
                <label class="top-top">محمول 2</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
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
                  readOnly
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
                <select
                  name="TyPe"
                  value={Details.TyPe}
                  onChange={ChangeValue}
                  disabled
                >
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
                  disabled
                  name="GePe"
                  onChange={ChangeValue}
                  value={Details.GePe}
                  onBlur={blurHandlerG}
                  className={classGePe}
                >
                  <option disabled></option>
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
                  readOnly
                  type="text"
                  name="Creator"
                  onChange={ChangeValue}
                  value={Details.Creator}
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
                  readOnly
                  type="text"
                  name="FaPe"
                  onChange={ChangeValue}
                  value={Details.FaPe}
                />
                <label class="top-top">الأب</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  type="text"
                  name="MaPe"
                  onChange={ChangeValue}
                  value={Details.MaPe}
                />
                <label class="top-top">الأم</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  type="text"
                  name="PlPe"
                  onChange={ChangeValue}
                  value={Details.PlPe}
                />
                <label class="top-top">المكان</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  type="text"
                  name="EmPe"
                  onChange={ChangeValue}
                  value={Details.EmPe}
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
                  readOnly
                  type="text"
                  name="BirthPe"
                  onChange={ChangeValue}
                  value={Details.BirthPe}
                />
                <label class="top-top">محل وتاريخ الولادة</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  type="text"
                  name="NoNu1Pe"
                  onChange={ChangeValue}
                  value={Details.NoNu1Pe}
                />
                <label class="top-top">رقم الهوية</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  type="text"
                  name="NoNuPe"
                  onChange={ChangeValue}
                  value={Details.NoNuPe}
                />
                <label class="top-top">الرقم الوطني</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  type="text"
                  name="CfPe"
                  onChange={ChangeValue}
                  value={Details.CfPe}
                />
                <label class="top-top">الأمانة و القيد</label>
                <div className="text-hidden">
                  <span>الرجاء تعبئة الحقل</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="child">
                <input type="text" name="NotPe" value={Details.NotPe} />
                <label class="top-top">الملاحظات</label>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="child">
                <input
                  readOnly
                  type="file"
                  name="AttPe"
                  onChange={ChangeValue}
                  value={Details.AttPe}
                />
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  type="file"
                  name="AttF"
                  onChange={ChangeValue}
                  value={Details.AttF}
                />
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  readOnly
                  type="file"
                  name="AttL"
                  onChange={ChangeValue}
                  value={Details.AttL}
                />
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
            </div>

            <div className="btnSubmit">
              {content}
              <NavLink to="/Persen/LastPerson">الغاء</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detials;
