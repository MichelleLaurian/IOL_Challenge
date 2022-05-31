import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filter/Category/InputGroup';


const Location = () => {
  let [id, setID] = useState(1);
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let {type, name, dimension } = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);


  return (
    <div className="container location__container">
      <div className="row location__details">
        <h3 className="">
          Ubicación:
          <span className="location__text">

            {name === "" ? "Unknown" : name}
          </span>
        </h3>
        <h5 className="">
        Dimensión: 
        <span className="location__text">{dimension === "" ? "Unknown" : dimension}</span>
        
        </h5>
        <h6 className="">Tipo:
        <span className="location__text"> {type === "" ? "Unknown" : type}</span>
        </h6>
      </div>
      <div className="row location__search">
        <div className="col-lg-3 col-12 mb-4 location__search">
          <h4 className="location__details">Busca por Ubicación</h4>
          <InputGroup  name="Location" setID={setID} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );

};
export default Location;