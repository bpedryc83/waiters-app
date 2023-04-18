import { useSelector } from "react-redux";
import styles from "./SelectStatus.module.scss";
import { getAllStatuses } from "../../../redux/store";

const SelectStatus = (props) => {
  
  const allStatuses = useSelector(getAllStatuses);

  const handleStatusChange = (e) => {
    props.setStatusRef(e.target.value);
    if (e.target.value === 'Cleaning' || e.target.value === 'Free') {
      props.setPeopleAmountRef(0);
    }
    else if (e.target.value === 'Busy') {
      props.setBillRef(0);
    } 
  }
  
  return (
    <div>
      <div className={`mt-2 ${styles.label}`}>Status: </div>
      <select id="statuses" value={props.status} className={`form-control ms-3 mb-1 ${styles.selectStyles}`} onChange={e => handleStatusChange(e)}>
        {allStatuses.map(status => <option key={status.id}>{status.status}</option>)}
      </select>
    </div>
  )
}

export default SelectStatus;