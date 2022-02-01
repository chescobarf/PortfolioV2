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
    <div className="grid projects grid-cols-2 md:grid-cols-4">
      {data.map((e) => (
        <ProyectCard data={e} />
      ))}
    </div>
  ) : (
    <Loading />
  );
};
