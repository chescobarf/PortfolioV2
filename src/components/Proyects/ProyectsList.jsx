import React, { useState, useEffect } from "react";
import { getSites } from "../../helpers/fetchSites";
import { ProyectCard } from "./ProyectCard";
import Loading from "../Loading/Loading";

export const ProyectsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getSites().then((val) => setData(val));
  }, []);

  return data ? (
    data.map((e) => (
      <section className="resume-section" id="projects">
        <div className="resume-section-content">
          <h2 className="mb-5">Proyectos</h2>
          <div className="subheading mb-3">Proyectos realizados</div>
          <div className="grid projects">
            <ProyectCard data={e} />
          </div>
        </div>
      </section>
    ))
  ) : (
    <Loading />
  );
};
