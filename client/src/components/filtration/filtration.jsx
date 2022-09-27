import React from "react";
import style from './filtration.module.css';

const Filtration = ({ columnHandler, methodHandler, queryHandler, query, selectedColumn, selectedMethod }) => {
    return (<>
        <h4>Table Filtration</h4>
        {/* сама форма фильтраций с переданными коллбэками */}
        <div className={style.filtration_form}>
            <div className={style.select_form}>
                <select onChange={(e) => columnHandler(e.target.value)} class="form-select" aria-label="Default select example">
                    {/* дизейблим Name при методах больше или меньше */}
                    <option value="name" disabled={selectedMethod === "more" || selectedMethod === "less" ? true : false}>Name</option>
                    <option value="amount">Amount</option>
                    <option value="distance">Distance</option>
                </select>
            </div>
            <div className={style.select_form}>
                <select onChange={(e) => methodHandler(e.target.value)} className="form-select" aria-label="Default select example">
                    <option value="includes">includes</option>
                    <option value="equals" >equals</option>
                    {/* дизейблим More, Less когда выбрана колонка Name */}
                    <option value="more" disabled={selectedColumn === "name" ? true : false}>more than</option>
                    <option value="less" disabled={selectedColumn === "name" ? true : false}>less than</option>
                </select>
            </div>
            {/* инпут для ввода значения фильтраций */}
            <div className={style.input_form}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => { queryHandler(e.target.value) }}
                        class="form-control"
                        placeholder="Filtration value"
                        aria-label="Filtration value"
                    />
                </div>
            </div>
        </div>
    </>)
}

export default Filtration;