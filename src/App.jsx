import { Dock, Home, Navbar, Welcome } from "#components";
import { MOBILE_BREAKPOINT } from "#constants";
import { useMediaQuery } from "#hooks";
import { HomeIndicator, HomeScreen, StatusBar } from "#mobile";
import { AboutScreen, ContactScreen, GalleryScreen, ProjectsScreen, ResumeScreen, SkillsScreen } from "#mobile/screens";
import { ContactWindow, Finder, ImageWindow, ResumeWindow, Terminal, TextWindow } from "#windows";
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (isMobile) {
    return (
      <main id="ios">
        <HomeScreen />

        <ProjectsScreen />
        <SkillsScreen />
        <ResumeScreen />
        <ContactScreen />
        <AboutScreen />
        <GalleryScreen />

        <StatusBar />
        <HomeIndicator />
      </main>
    );
  }

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
