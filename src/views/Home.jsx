import React from "react";
import Navbar from "../layout/Navbar";
import Container from "../layout/Container";
import { ProyectsList } from "../components/Proyects/ProyectsList";
import SectionLayout from "../layout/Section/SectionLayout";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <SectionLayout title="Proyects" id="Proyects">
          <ProyectsList />
        </SectionLayout>
      </Container>
    </div>
  );
};

export default Home;
