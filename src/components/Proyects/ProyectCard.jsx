import React from "react";

export const ProyectCard = ({ data }) => {
  return (
    <div
      className="card text-white bg-dark mb-3 d-inline-block"
      style={{ maxWidth: "20rem" }}
      key={data.id}
    >
      <img className="card-img-top" src={data.screenshot_url} alt={data.name} />
      <div className="card-body">
        <h4 className="card-title text-light">{data.name}</h4>
        <a href={data.ssl_url} className="btn btn-custom">
          Visitar
        </a>
      </div>
    </div>
  );
};
