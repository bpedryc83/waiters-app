import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/store";
import TableShortInfo from "../../features/tableShortInfo/TableShortInfo";
import Loader from "../../features/loader/Loader.js"

const Home = (props) => {

  const tables = useSelector(getAllTables);

  return (
    <div>
      {tables && <div className="mb-4">
        <h2> All tables</h2>
        {(props.isLoading) && <Loader />}
        {tables.map(table => <TableShortInfo key={table.id} {...table}/>)}
        </div>
      }
    </div>  
  );  
};

export default Home;