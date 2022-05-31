import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
import '../../App.css';

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies, pageNumber }) => {
  
  let clear = () => [
    setStatus(''),
    setPageNumber(1),
    setGender(''),
    setSpecies(''),
    window.location.reload(false)
  ]

  return (

    <div className="col-lg-3 col-12 filter__container">
      <div className="filter__text">Filtros</div>
      <div
        className="filter__clear"
        onClick={clear}
      >
 
      Limpiar filtros
      </div>

      <div className="accordion filter__acordion" id="accordionExample">
        <Gender setGender={setGender}
          setPageNumber={setPageNumber}
        />

        <Species setSpecies={setSpecies}
          setPageNumber={setPageNumber} />
        <Status setStatus={setStatus}
          setPageNumber={setPageNumber} />
       
      </div>
    </div>

  )
}

export default Filters; 