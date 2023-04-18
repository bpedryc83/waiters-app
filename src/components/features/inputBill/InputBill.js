import clsx from "clsx";
import styles from "./InputBill.module.scss";

const InputBill = (props) => {
  
  const handleBillChange = (e) => {
    const intValue = parseInt(e.target.value);
    if (isNaN(intValue)) {
      props.setBillRef(0);
    }
    else {
      props.setBillRef(intValue);
    }
  }
  
  return (
    <div> 
    <div className={ clsx(props.status === 'Busy' && styles.displayYes, props.status !== 'Busy' && styles.displayNo)}> 
      <div className={`mt-2 ${styles.label}`}>Bill: </div>
      <span className="ms-3">$</span>
      <input type="text" value={props.bill} className={`form-control ms-1 mb-1 ${styles.inputStyles}`} onChange={e => handleBillChange(e)}></input>
    </div>
  </div>
  )
}

export default InputBill;