// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Andrei",
  middleName: "",
  lastName: "Solomon",
  message: " Eager to try new stuff everyday :) ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/andreisolo0",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/andrei-solomon-b42671165",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/asolomon.jpg"),
  imageSize: 375,
  message:
    "My name is Andrei Solomon. I graduated in 2020 my bachelor's degree  and in 2022 the master's degree at Politehnica University of Bucharest. I'm constantly learning and trying new apps, programming languages and tools. In my free time I like to code, my first ever experience with this being in a web application developed for the master's degree in Ruby on Rails, I also like video games and a really big fan of Netflix, I am also very interested in automating almost everything to make my life easy :)",
  resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "andreisolo0", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Ruby", value: 70 },
    { name: "SQL", value: 70 },
    { name: "Automation tools(Puppet/Ansible)", value: 85 },
    { name: "System Admin", value: 75 },
    { name: "Monitoring", value: 90 },
    { name: "Scripting", value: 85 },
    { name: "Containers", value: 75 },
    { name: "Software Architecture", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 75 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 85 },
    { name: "Time management", value: 70 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Learning everyday and happy to help in any way I can. Feel free to contact me at any time via email or Linkedin :)",
  email: "solomonandrei2605@gmail.com",
};

const experiences = {
  show: true,
  job: "Experience",
  data: [
    {
      role: 'Infrastructure Engineer - Automation Team',// Here Add Company Name
      companylogo: require('../assets/img/bd-small.jpg'),
      skills: "- Puppet - Ansible - Containers - GCP - AWS - Zabbix - Ruby - ",
      skills2: "- System Admin - Scripting - API integration - ",
      date: 'August 2021 – Present',
    },
    {
      role: 'Level 1 System Support Engineer',
      companylogo: require('../assets/img/rs.jpg'),
      skills: "- Networking - Ansible - VoIP - Zabbix - Bash Scripting- ",
      date: 'June 2018 – August 2021',
    },
  ],
  study: "Study",
  data_study: [ // Here Add Study Experience 
    { unversity: "Politehnica University of Bucharest",
      section: "Electronics, Telecommunications and Information Technology",
      degree: "Master's Degree",
      date: "September 2020 - June 2022",
      schoollogo: require('../assets/img/upb.png'),
      schoollogo2: require('../assets/img/eti.png'),
    },
    { unversity: "Politehnica University of Bucharest",
      section: "Electronics, Telecommunications and Information Technology",
      degree: "Bachelor's Degree",
      date: "September 2016 - June 2020",
      schoollogo: require('../assets/img/upb.png'),
      schoollogo2: require('../assets/img/eti.png'),
    }
],
  

}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
