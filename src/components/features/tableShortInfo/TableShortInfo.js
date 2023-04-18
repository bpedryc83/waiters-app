import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./TableShortInfo.module.scss";

const TableShortInfo = props => 
  <div className={`row mb-3 me-1 align-items-center ${styles.rows} `}>
    <div className="col-2 fs-5 fw-bold">Table {props.id}</div>
    <div className={`col-8 ${styles.smallFont}`}>
      <span className="fw-bold me-2">Status:</span>
      {props.status}
    </div>
    <Button className={`col-2 my-2 ${styles.button}`}>
      <Link key={props.id} to={"/details/" + props.id}>
        <div className={`${styles.buttonLink}`}>Show more</div>
      </Link>
    </Button>    
  </div>

export default TableShortInfo;