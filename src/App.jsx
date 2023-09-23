import { Fragment } from "react";
import Header from "./components/Header/Header";
import SectionCompany from "./components/SectionCompany/SectionCompany";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";
import SectionGallery from "./components/SectionGallery/SectionGallery";
import SectionNew from "./components/SectionNew/SectionNew";
import SectionSlides from "./components/SectionSlides/SectionSlides";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <SectionSlides />
      <SectionFeatures />
      <SectionGallery />
      <SectionNew />
      <SectionCompany />
    </Fragment>
  );
}

export default App;
