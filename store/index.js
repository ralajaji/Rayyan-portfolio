import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Cheldren Educational App",
      category: "Mobile Applecation",
      img: "../images/Picture1.png",
      // url: "https://levo-bnb.vercel.app/",
      // github: "https://github.com/Lawndlwd/LevoBnb",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      // objectivesDetails: "Create a copy of Airbnb with googleMap API.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Cheldren Educational App",
          img: "../images/Picture1.png",
        },
        {
          id: uuidv4(),
          title: "Cheldren Educational App",
          img: "../images/Picture2.png",
        },
        {
          id: uuidv4(),
          title: "Cheldren Educational App",
          img: "../images/Picture1.png",
        },
      ],
      technologies: [
        "Dart",
        "Flutter",
        "JavaScript",
        "PHP",
        "Firebase",
        "Google Api",
        "techable mechiene",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: "- learn the Arabic letters from a video.",
        },
        {
          id: uuidv4(),
          details: "- learn the Arabic Numbers from a video.",
        },
        {
          id: uuidv4(),
          details: "- Authenticate signin with Google Firebase",
        },
        {
          id: uuidv4(),
          details: "- Practice how to write Arabic letters and numbers.",
        },
        {
          id: uuidv4(),
          details: "- Practice how to pronunce Arabic letters and numbers.",
        },
        {
          id: uuidv4(),
          details: "- Able to play a game to check if he learn the objective",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "Sdaia Acheivment Dashboard",
      category: "Web Application",
      img: "../images/achievment.jpg",
      publishDate: "Nov 04, 2021",
      // url: "https://mobile.gravity.earth",
      tag: "UI / Frontend",
      clientTitle: "Gravity",
      objectivesTitle: "Objective",
      // objectivesDetails: "Digital identities for financial inclusion",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "PWA",
          img: "assets/images/PHOTO-2021-05-31-15-10-08.jpg",
        },
        {
          id: uuidv4(),
          title: "PWA",
          img: "../images/pwa-1.png",
        },
        {
          id: uuidv4(),
          title: "PWA",
          img: "../images/pwa-2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Gravity",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Supply chain with Blockchain and Decentralized Apps",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://gravity.earth",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vuejs",
        "Bootstrab",
        ".Net Core 5",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            " A Dashboard for SDAIA to show the achievments of each department",
        },
        {
          id: uuidv4(),
          details: "used in SDAIA workplace",
        },
      ],
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "A software engineering graduate. looking forward to earning the opportunity to obtain experience, improve my skills and be productive and efficient in my scope. I also aim to always improve myself by working hard and learning more in my field of education to achieve success.",
    },
    {
      id: uuidv4(),
      bio: "Proficient with Programming languages such as JavaScript and Dart, as well as basic UI/UX principles and prototyping. I've always been interested in solving problems, programming, coding and Designing apps was the best way for me to keep my interests growing in the right way.",
    },
    {
      id: uuidv4(),
      bio: "I love to do Typescript Vue or Nuxt application!!",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "",
    },
    {
      id: uuidv4(),
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/rayyan-alajaji/",
    },
    {
      id: uuidv4(),
      name: "Medium",
      icon: "book",
      url: "",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // Todo
};

export const actions = {
  // Todo
};
