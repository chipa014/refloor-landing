import { Fragment } from "react";
import Header from "./components/Header/Header";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";
import SectionGallery from "./components/SectionGallery/SectionGallery";
import SectionSlides from "./components/SectionSlides/SectionSlides";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <SectionSlides />
      <SectionFeatures />
      <SectionGallery />
    </Fragment>
  );
}

export default App;
