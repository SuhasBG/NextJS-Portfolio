import { FaRobot } from "react-icons/fa";
import { CgBrowser } from "react-icons/cg";
import { SiGit, SiJava } from "react-icons/si";

export const Skills = [
  {
    slug: "Machine Learning",
    Component: FaRobot,
    title: "Machine Learning",
    Description: () => <>I train & deploy Machine Learning models.</>,
  },
  {
    slug: "Web Development",
    Component: CgBrowser,
    title: "Web Development",
    Description: () => (
      <>Currently working with Dart & Flutter for app development. </>
    ),
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => (
      <>I can code in Java. I sometimes use it for Competitive Coding.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
