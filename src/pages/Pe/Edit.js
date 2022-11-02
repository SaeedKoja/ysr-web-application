import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams, useNavigate, createPath } from "react-router-dom";
import "./Edit.css";
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

  // const arrayData = [Details];

  const [enteredName, setEnteredName] = useState("");
  const [enteredCoco, setEnteredCoco] = useState("");
  const [enteredGePe, setEnteredGePe] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [nameTouch, setNameTouch] = useState(false);
  const [cocoTouch, setCocoTouch] = useState(false);
  const [phoneTouch, setPhoneTouch] = useState(false);
  const [GePeTouch, setGePeTouch] = useState(false);

  const blurHandlerN = (event) => {
    console.log(primaryCo.AttPe)
    for (let index = 0; index < allData.length; index++) {
      if (
        allData[index].NaPe === event.target.value &&
        allData[index].NaPe !== primaryCo.NaPe
      ) {
        event.target.value = "";
        swal({
          icon: "warning",
          timer: 1800,
          title: "اسم الزميل موجود ...يرجى ادخال اسم غير مكرر",
        });
      }
    }
  };
  const blurHandlerP = (event) => {
    for (let index = 0; index < allData.length - 2; index++) {
      if (
        allData[index].PhoPe1 === event.target.value &&
        allData[index].PhoPe1 !== primaryCo.PhoPe1
      ) {
        event.target.value = "";
        swal({
          icon: "warning",
          timer: 1800,
          title: "الرقم المحمول1 موجود  . . .  يرجى التأكد منه مرة اخرى",
        });
      }
    }
  };
  const blurHandlerNo = (event) => {
    for (let index = 0; index < allData.length - 2; index++) {
      if (
        allData[index].NoNuPe.toString() === event.target.value &&
        allData[index].NoNuPe !== primaryCo.NoNuPe
      ) {
        event.target.value = "";
        swal({
          icon: "warning",
          timer: 1800,
          title: "الرقم الوطني موجود  . . .  يرجى التأكد منه مرة اخرى",
        });
      }
    }
  };
  const blurHandlerC = (event) => {
    let x = -10;
    for (let i = 0; i < allData.length; i++) {
      if (event.target.value === allData[i].NaPe) {
        x = i;
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
      setEnteredCoco("");
    }
  };
  const blurHandlerG = (event) => {
    setGePeTouch(true);
  };
  const [primaryCo, setPrimaryCo] = useState("");
  const [allData, setAllData] = useState([]);
  const param = useParams();
  async function comp() {
    const res = await axios.get(`http://localhost:8000/api/pe/${param.id}`);
    const res2 = await axios.get(`http://localhost:8000/api/pe`);
    const convert = Object.values(res2.data).flat();
    setAllData(convert);
    setPrimaryCo(res.data[0]);
    // AttPe: event.target.files[0]
    // let i = res.data[0].AttPe;
    // i.split("\\").pop();
    // URL.revokeObjectURL(i);
    let xx;

    // console.log(i.split("\\").pop());
    // console.log(res.data[0].AttPe);
    for (let i in convert) {
      if (res.data[0].CoRq === convert[i].CoPe) {
        xx = convert[i].NaPe;
      }
      
    }
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
      CoRq: xx,
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
  // console.log(Details.AttPe)
  // let c =localStorage.setItem('image',JSON.stringify(Details.AttPe))
  useEffect(() => {

  },[Details.AttPe,Details.AttL,Details.AttF])
  
  async function updateHandler(e) {
    e.preventDefault();

    let s;
    for (let x in allData) {
      if (Details.CoRq === allData[x].NaPe) {
        s = allData[x].CoPe;
      }
    }
    await axios.put(
      `http://localhost:8000/api/pe/${param.id}`,
      {
        CoPe: Details.CoPe,
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
        CoRq: s,
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
      }
      // DetailsCoRq
    );
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

  // const [URLIMG ,setURLIMG] =useState();
  // console.log(URLIMG)
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
        
      };
    });
    if (name === "AttPe") {
      
      setEntered((prev) => {
        return {
          ...prev,
          AttPe:URL.createObjectURL(event.target.files[0])
        };
        
      });
     
      // if (event.target.files[0].size <= 20000) {
      //   NameImgAttPe = event.target.files[0].name;
      // } else {
      //   console.log("حجم الصورة اكبر من 20 كيلو بايت");
      // }
    }
  };

  // const [NameImgAttPe ,setNameImgAttPe] =useState();
  // console.log(NameImgAttPe);
  useEffect(() => {
    comp();
  }, []);

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
        title: "تم عملية التعديل بنجاح",
      });
    }
  };

  // const a = Details.AttPe.split("\\").pop();
  // console.log(Details.AttPe)

  return {
    ChangeValue,
    blurHandlerN,
    blurHandlerP,
    blurHandlerC,
    blurHandlerG,
    updateHandler,
    clickHandler,
    blurHandlerNo,
    allData,
    className,
    classPhone,
    classCoco,
    classGePe,
    Details,
  };
}

const Edit = () => {
  const {
    ChangeValue,
    blurHandlerN,
    blurHandlerP,
    blurHandlerC,
    blurHandlerG,
    updateHandler,
    clickHandler,
    blurHandlerNo,
    allData,
    className,
    classPhone,
    classCoco,
    classGePe,
    content,
    Details,
  } = AllCode();

  const rlt = "ltr";
  return (
    <div className="edit">
      <div className="row">
        <div className="col">
          <form onSubmit={updateHandler}>
            <div className="form-group">
              <div className="child">
                <input
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
                  name="CoRq"
                  value={Details.CoRq}
                  onChange={ChangeValue}
                  onBlur={blurHandlerC}
                  className={classCoco}
                  list={allData}
                />
                <label class="top-top">الزميل الطالب</label>
                <datalist id={allData}>
                  {allData.map((array) => (
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
                  type="text"
                  name="NoNuPe"
                  onChange={ChangeValue}
                  onBlur={blurHandlerNo}
                  value={Details.NoNuPe}
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
                <div className="imgcontent">
                  <label className="srcImg">{Details.AttPe}</label>
                  <input
                    className="img"
                    type="file"
                    name="AttPe"
                    onChange={ChangeValue}
                    // value={Details.AttPe}
                  />
                </div>
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="file"
                  name="AttF"
                  onChange={ChangeValue}
                  // value={Details.AttF}
                />
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
              <div className="child">
                <input
                  type="file"
                  name="AttL"
                  onChange={ChangeValue}
                  // value={Details.AttPe}
                />
                <div className="text-hidden">
                  <span>yazan</span>
                </div>
              </div>
            </div>
            <img
              style={{ width: "40%", height: "40%" }}
              src={Details.AttPe}
              alt=""
            ></img>
            <div className="btnSubmit"> 
              {content}
              <button type="submit" onClick={clickHandler}>
                تعديل
              </button>

              <NavLink to="/Persen/LastPerson">الغاء</NavLink>
            </div>
            {/* <button onClick={co}>safsdhasf</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
