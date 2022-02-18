import React from "react";
import formatDate from "../../helpers/formatDate";
export const ProjectCard = ({ data }) => {
  return (
    <a
      className="card text-white bg-dark mb-3 d-inline-block max-w-xs hover:cursor-pointer transition-shadow shadow-xl shadow-slate-500 hover:shadow-blue-900 rounded-lg bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-600"
      href={data.ssl_url}
    >
      {data.screenshot_url ? (
        <img
          className="card-img-top rounded-t-lg w-full object-fill h-36 xl:h-60"
          src={data.screenshot_url}
          alt={data.name}
        />
      ) : (
        <img
          className="card-img-top rounded-t-lg w-full object-fill h-36 xl:h-60"
          src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
          alt={data.name}
        />
      )}

      <div className="card-body p-5 flex flex-col">
        <h4 className="card-title text-2xl uppercase">{data.name}</h4>
        <p>{formatDate(data.created_at)}</p>
      </div>
    </a>
  );
};
