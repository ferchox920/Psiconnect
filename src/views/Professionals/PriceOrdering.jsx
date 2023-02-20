import React from "react";
import { useDispatch } from "react-redux";
import { orderProfessionalsByPrice } from "../../features/professionalSlice";
import style from './index.module.css'

export default function PriceOrdering(props) {
    const dispatch= useDispatch()

    const handleSelectChange=(e)=>{
        e.preventDefault();
        props.setSelect(e.target.value)
        dispatch(orderProfessionalsByPrice(e.target.value))
      }

  return (
   <div className={style.selectContainer}>
      <select
      className={style.select}
        name="order"
        id="order"
        value={props.select}
        onChange={(e) => handleSelectChange(e)}
      >
        <option value="Ordena por precio" selected disabled>
          Ordena por precio
        </option>
        <option value="asc">Menor a Mayor precio</option>
        <option value="desc">Mayor a Menor precio</option>
      </select>
   </div>
  );
}
