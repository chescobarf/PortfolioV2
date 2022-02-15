import React from "react";
import Navbar from "../layout/Navbar";
import Container from "../layout/Container";
import { ProjectsList } from "../components/Projects/ProjectsList";
import SectionLayout from "../layout/Section/SectionLayout";
import Profile from "./Profile";
import Experience from "./Experience";
import { Education } from "./Education";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <SectionLayout id="Profile">
          <Profile />
        </SectionLayout>
        <SectionLayout title="Experience" id="Experience">
          <Experience />
        </SectionLayout>
        <SectionLayout title="Education" id="Education">
          <Education />
        </SectionLayout>
        <SectionLayout title="Projects" id="Projects">
          <ProjectsList />
        </SectionLayout>
      </Container>
    </div>
  );
};

export default Home;
