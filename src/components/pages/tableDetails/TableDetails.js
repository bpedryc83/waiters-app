import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { getTableById } from "../../../redux/store";
import styles from "./TableDetails.module.scss";
import { editTables } from "../../../redux/tablesRedux";
import InputBill from "../../features/inputBill/InputBill";
import InputPeopleAndMaxPeopleAmount from "../../features/inputPeopleAndMaxPeopleAmount/InputPeopleAndMaxPeopleAmount";
import SelectStatus from "../../features/selectStatus/SelectStatus";

const TableDetails = () => {

  const tableParams = useParams();
  const id = tableParams.id;
  const tableData = useSelector(state => getTableById(state, parseInt(id)));

  const [peopleAmount, setPeopleAmount] = useState((tableData) ? (tableData.peopleAmount) : '');
  const [maxPeopleAmount,setMaxPeopleAmount] = useState((tableData) ? (tableData.maxPeopleAmount) : '');
  const [bill, setBill] = useState((tableData) ? (tableData.bill) : '');
  const [status, setStatus] = useState((tableData) ? (tableData.status) : '');

  const dispatch = useDispatch();

  const setPeopleAmountRef = setPeopleAmount;
  const setMaxPeopleAmountRef = setMaxPeopleAmount;
  const setBillRef = setBill;
  const setStatusRef = setStatus;

  if(!tableData) {
    return <Navigate to="/" />
  }

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(editTables( { id, status, peopleAmount, maxPeopleAmount, bill } ))
  }

  return (
    <div>
      <h2>Table {id}</h2>
      <form className="mt-2" onSubmit={e => handleSubmit(e)}>

        <SelectStatus 
          status={status}
          setStatusRef={setStatusRef}
          setBillRef={setBillRef}
          setPeopleAmountRef={setPeopleAmountRef}
        />

        <InputPeopleAndMaxPeopleAmount 
          peopleAmount={peopleAmount}
          maxPeopleAmount={maxPeopleAmount}
          setMaxPeopleAmountRef={setMaxPeopleAmountRef}
          setPeopleAmountRef={setPeopleAmountRef}
        />

        <InputBill status={status} bill={bill} setBillRef={setBillRef} />

        <Button type="submit" className="col-2 mt-3 mb-2">
          <div className={`${styles.buttonLink}`}>Update</div>
        </Button>    
      </form>
    </div>  
  )
}

export default TableDetails;