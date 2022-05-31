import React from 'react';
import "../../App.css";

const Cards = ({ results }) => {

  let display;

  if (results) {
    display = results.slice(0,15).map((x) => {
      let { id, name, image, status, species, origin, location } = x;
      return (
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 cards__container"
          key={id}
        >
          <div className="card">
            <img src={image} alt="" className="img" />
            <div className="content">
              <div className="name__card">{name}</div>

              <div className="location"> Ubicación: <b> {location.name}</b></div>
              <div className="species">Especie: <b> {species}</b> </div>
              <div className="origin">Origen: <b> {origin.name}</b></div>

            </div>
            {(() => {
              if (status === "Alive") {
                return (
                  <div className="badge bg-success state_life">{status}</div>
                );
              } else if (status === "Dead") {
                return (<div className="badge bg-danger state_life">{status}</div>);


              } else {
                return (<div className="badge bg-warning state_life">{status}</div>);

              }
            })()}
          </div>

        </div>
      )
    });
  } else {
    display = 'nop, nada :D'
  }
  return (<>{display}</>)
}

export default Cards;

/*name
image (mostrar la imagen)
status
species
origin
location */