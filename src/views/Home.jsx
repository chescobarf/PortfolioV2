import React from "react";
import Navbar from "../layout/Navbar";
import Container from "../layout/Container";
import { ProjectsList } from "../components/Projects/ProjectsList";
import SectionLayout from "../layout/Section/SectionLayout";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <SectionLayout title="Projects" id="Projects">
          <ProjectsList />
        </SectionLayout>
      </Container>
    </div>
  );
};

export default Home;
