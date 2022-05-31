import React from 'react';

const InputGroup = ({ total, setID, name }) => {
  return (
    <div className="input-group inputgroup__location">
      <select
        onChange={(e) => setID(e.target.value)}
        id={name}
        className="form-select inputgroup__location">

        <option value="1" > Ubicación ...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}

      </select>
    </div>
  );
};

export default InputGroup;