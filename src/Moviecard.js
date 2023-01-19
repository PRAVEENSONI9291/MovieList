import React from "react";
import { movies } from "./MovieData";

const Moviecard = () => {
  

  return (
    <>
      {movies?.map((i, j) => {
        return (
          <div className="card" style={{ width: "18rem" }} key={j}>
            <img
              src={require(`./` + i.img.src)}
              className="card-img-top"
              alt={i.img.alt}
            />
            
              <div className="title">
                <h5 className="card-title">
                  {i.title + " " + `(` + i.year + `)`}
                </h5>
              </div>
              <div className="distributor">
                <p className="card-text">{i.distributor}</p>
              </div>
              <div className="collection"></div>
              <p className="card-text">{i.amount}</p>
            </div>
          
        );
      })}
    </>
  );
};

export default Moviecard;
