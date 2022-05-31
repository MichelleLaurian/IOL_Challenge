import React from 'react';
import FilterButton from '../FilterButton';
import '../../../App.css';

const Status = ({ setStatus, setPageNumber }) => {

  let status = ['Alive', 'Dead', 'Unknown']
  return (
    <div className="accordion-item filters">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree">
          Estado
        </button>
      </h2>
      <div id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        <div className="accordion-body acord__body">
          {status.map((items, index) => (
            <FilterButton
              key={index}
              name='status'
              index={index}
              items={items}
              task={setStatus}
              setPageNumber={setPageNumber}
            />
          )
          )}

        </div>
      </div>
    </div>
  )
}

export default Status; 
