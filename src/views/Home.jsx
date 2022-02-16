import React from "react";
import Navbar from "../layout/Navbar";
import Container from "../layout/Container";
import { ProjectsList } from "../components/Projects/ProjectsList";
import SectionLayout from "../layout/Section/SectionLayout";
import Profile from "./Profile";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
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
        <SectionLayout title="Projects" id="Projects">
          <ProjectsList />
        </SectionLayout>
        <SectionLayout title="Skills" id="Skills">
          <Skills />
        </SectionLayout>
        <SectionLayout title="Certifications and Courses" id="Certifications">
          <Certifications />
        </SectionLayout>
        <SectionLayout title="Education" id="Education">
          <Education />
        </SectionLayout>
      </Container>
    </div>
  );
};

export default Home;
