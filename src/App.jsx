import { Fragment } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollUpButton from "./components/UI/ScrollUpButton";
import SectionCompany from "./components/SectionCompany/SectionCompany";
import SectionFeatures from "./components/SectionFeatures/SectionFeatures";
import SectionGallery from "./components/SectionGallery/SectionGallery";
import SectionNew from "./components/SectionNew/SectionNew";
import SectionSlides from "./components/SectionSlides/SectionSlides";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <SectionSlides />
        <SectionFeatures />
        <SectionGallery />
        <SectionNew />
        <SectionCompany />
        <ScrollUpButton />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
