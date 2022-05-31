import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "./App.css";
// -----FILTERS ----
import Search from "./components/Search/Search";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filter/Filters";
import Pagination from "./components/Pagination/Pagination";
// NAVBAR
import Navbar from "./components/Navbar/Navbar";
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from './Pages/Location';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>

  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1)
  let [fetchData, setFetchData] = useState([])

  let [search, setSearch] = useState('')
  let [status, setStatus] = useState('')
  let [gender, setGender] = useState('');
  let [species, setSpecies] = useState('');

  let { info, results } = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data)
    }
    )();

  }, [api])

  return (
    <div className="App">

      <h3 className="tittle__app">Rick&Morty Appi con React js</h3>

      <div className="container">
        <div className="row">
          <Search
            setSearch={setSearch}
            setPageNumber={setPageNumber}

          />
          <Filters
            pageNumber={pageNumber}
            status={status}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}

          />

          <div className="col-lg-8 col-12">
            <div className="row card__component">
              <Cards
                results={results}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pagination__component">
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber} />
      </div>

    </div>
  );
}

export default App;
