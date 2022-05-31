import React from 'react';
import '../../App.css';

const FilterButton = ({ name, index, items, task, setPageNumber }) => {
  return (
      <div className="form-check">
  
        <input
        onClick={()=>{
          setPageNumber(1)
          task(items)
        }}
          className="form-check-input  filter__button"
          type="radio"
          name={name}
          id={`${name}-${index}`} />
        <label
          className="btn btn__labelfilter"
          for={`${name}-${index}`} >{items}</label>
      </div>

  
  )
}
export default FilterButton; 