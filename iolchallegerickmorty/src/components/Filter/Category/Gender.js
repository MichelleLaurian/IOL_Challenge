import React from 'react';
import FilterButton from '../FilterButton';
import '../../../App.css';

const Gender = ({ setGender, setPageNumber }) => {

  let gender = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item filters">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Género
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {gender.map((items, index) => (
            <FilterButton
              key={index}
              name='gender'
              index={index}
              items={items}
              task={setGender}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>


    </div>
  )
}

export default Gender; 
