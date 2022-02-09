import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import {Team } from "./components/team";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Blog } from "./components/blog";

import {
  BrowserRouter as Router,
} from "react-router-dom";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation /><Router>

      <Header data={landingPageData.Slides} /> 
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team}/>
      <Services data={landingPageData.Services} /> 
      <Blog data={landingPageData.Blog}/>
      <Gallery data={landingPageData.Gallery}/> 
      <Contact data={landingPageData.Contact} /> 
      </Router>

    </div>
  );
};

export default App;
