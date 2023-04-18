import { Container } from "react-bootstrap";
import NavBar from "./components/views/navbar/NavBar";
import Footer from "./components/views/footer/Footer";
import styles from "./App.module.scss"
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home/Home";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";
import { fetchStatuses } from "./redux/statusesRedux";
import TableDetails from "./components/pages/tableDetails/TableDetails";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";


const App = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables())
    setIsLoading(false);
  }, [dispatch]);
  useEffect(() => dispatch(fetchStatuses()), [dispatch]);

  return (
    <Container className={`${styles.containerWidth}`}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />}/>
        <Route path="/details/:id" element={<TableDetails />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;