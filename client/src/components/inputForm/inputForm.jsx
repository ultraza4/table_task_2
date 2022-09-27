import React from "react";
import { useState } from "react";
import style from "./inputForm.module.css";
import axios from 'axios';

const ImportForm = ({ baseURL }) => {
   const [data, setData] = useState({
      date: "",
      name: "",
      amount: 0,
      distance: 0
   })

   function submit(e) {
      e.preventDefault();
      axios.post(baseURL, null, {
         params: {
            date: data.date,
            name: data.name,
            amount: data.amount,
            distance: data.distance
         }
      }).then(res => {
         console.log(res.data)
      })
   }

   const onChangeHandler = (e) => {
      const newData = { ...data }
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(data);
   }

   return (
      <>
         <div className={style.form_container}>
            <h4>Input Form</h4>
            <form className={style.form} onSubmit={(e) => submit(e)}>
               <div className="pr-3">
                  <label for="date" class="form-label">Date</label>
                  <input onChange={(e) => onChangeHandler(e)} value={data.date} type="text" class="form-control" id="date" ></input>
               </div>
               <div className="pr-3">
                  <label for="name" class="form-label">Name</label>
                  <input onChange={(e) => onChangeHandler(e)} value={data.name} type="text" class="form-control" id="name"></input>
               </div>
               <div className="pr-3">
                  <label for="amount" class="form-label">Amount</label>
                  <input onChange={(e) => onChangeHandler(e)} value={data.amount} type="text" class="form-control" id="amount"></input>
               </div>
               <div className="pr-3">
                  <label for="distance" class="form-label">Distance</label>
                  <input onChange={(e) => onChangeHandler(e)} value={data.distance} type="text" class="form-control" id="distance"></input>
               </div>
               <div className={style.form_button}>
                  <button type="submit" className="btn btn-primary btn-sm btn-block">Send</button>
               </div>
            </form>
         </div>
      </>
   );
}

export default ImportForm;