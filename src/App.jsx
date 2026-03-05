import { Dock, Home, Navbar, Welcome } from "#components";
import { ContactWindow, Finder, ImageWindow, ResumeWindow, Terminal, TextWindow } from "#windows";
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <ResumeWindow /> 
      <Finder />
      <TextWindow />
      <ImageWindow />
      <ContactWindow />

      <Home />
    </main>
  );
};

export default App;