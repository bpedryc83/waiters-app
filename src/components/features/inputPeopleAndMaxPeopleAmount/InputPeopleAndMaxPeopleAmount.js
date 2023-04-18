import styles from "./InputPeopleAndMaxPeopleAmount.module.scss";

const InputPeopleAndMaxPeopleAmount = (props) => {
  
  const handlePeopleAmountChange = (e) => {
    const intValue = parseInt(e.target.value);
    if (isNaN(intValue)) {
      props.setPeopleAmountRef(0);
    }
    else if (intValue < 0) {
      props.setPeopleAmountRef(0);
    }
    else if (intValue > props.maxPeopleAmount || intValue > 10) {
      props.setPeopleAmountRef(props.maxPeopleAmount);
    }
    else {
      props.setPeopleAmountRef(intValue);
    } 
  }

  const handleMaxPeopleAmountChange = (e) => {
    const intValue = parseInt(e.target.value);
    let newValue = 0;

    if (!isNaN(intValue)) {
      if (intValue > 10) {
        newValue = 10;
      }
      else {
        newValue = intValue;
      }
    }

    props.setMaxPeopleAmountRef(newValue);
    if (props.peopleAmount > newValue) {
      props.setPeopleAmountRef(newValue);
    }
  }
  
  return (
    <div> 
      <div className={`mt-2 ${styles.label}`}>People: </div>
      <input type="text" value={props.peopleAmount} className={`form-control ms-3 me-1 mb-1 ${styles.inputStyles}`} onChange={e => handlePeopleAmountChange(e)}></input>
      <span> / </span>
      <input type="text" value={props.maxPeopleAmount} className={`form-control ms-1 mb-1 ${styles.inputStyles}`} onChange={e=> props.setMaxPeopleAmountRef(e.target.value)} onBlur={e => handleMaxPeopleAmountChange(e)}></input>          
    </div>
  )
}

export default InputPeopleAndMaxPeopleAmount;