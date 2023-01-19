import React from "react";
import { movies } from "./MovieData";

const Moviecard = () => {
  return (
    <>
      {movies?.map((i, j) => {
        return (
          <div
            className="card position-relative"
            style={{ width: "18rem" }}
            key={j}
          >
            <div>
              <img
                src={require(`./` + i.img.src)}
                className="card-img-top img-fluid rounded-3"
                alt={i.img.alt}
              />
            </div>

            <div className="title">
              <h5 className="card-title">
                {i.title + " " + `(` + i.year + `)`}
              </h5>
            </div>
            <div className="distributor">
              <p className="card-text">{i.distributor}</p>
            </div>
            <div className="collection"></div>
            <p className="card-text">Collection : {i.amount}</p>
          </div>
        );
      })}
    </>
  );
};

export default Moviecard;
