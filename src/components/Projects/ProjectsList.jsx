import React, { useState, useEffect } from "react";
import { getSites } from "../../helpers/fetchSites";
import { ProjectCard } from "../Projects/ProjectCard";
import Loading from "../Loading/Loading";

export const ProjectsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getSites().then((val) => setData(val));
  }, []);

  return data ? (
    <div className="grid gap-4 projects grid-cols-2 md:grid-cols-4">
      {data.map((e) => (
        <ProjectCard data={e} key={e.id} />
      ))}
    </div>
  ) : (
    <Loading />
  );
};
