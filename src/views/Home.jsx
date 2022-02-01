import React from "react";
import Navbar from "../layout/Navbar";
import Container from "../layout/Container";
import { ProyectsList } from "../components/Proyects/ProyectsList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ProyectsList />
      </Container>
    </div>
  );
};

export default Home;
