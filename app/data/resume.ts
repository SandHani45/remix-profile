export interface Experience {
  company: string;
  companyUrl: string;
  contract?: boolean;
  date: string;
  dateRange?: [start: Date, end?: Date];
  description: string;
  highlights: string[];
  image?: string;
  tags: string[];
  title: string;
}

export const experience: Experience[] = [

  {
    company: "LG Soft India",
    companyUrl: "https://www.lgsoftindia.com/",
    date: `May 2022 - Present`,
    dateRange: [new Date(2022, 9, 6)],
    description: `
      <p>
        Nearly two years in and we've made some incredible features. We've paid
        down significant technical debt and have begun to see the webOS Hub Manager for TV flashing.
      </p>
    `,
    highlights: [
      `Lead the end-to-end development of innovative web
applications using the MERN stack, ensuring seamless
integration of front-end and back-end components.`,
`Created webOS Hub Manager from scratch.`,
`Analyse the webOS Setting application and fixed.
Minor issue and optimized UI using hooks and lazy load.`,
`Collaborated with UX/UI designers to create intuitive
and visually appealing user interfaces, ensuring a
positive and engaging user experience.`,
`Implemented user feedback mechanisms and
conducted usability testing to iterate on the user
interface.`,
`Developed and maintained version control processes
using Git, contributing to a streamlined and organized
codebase.`
      // `Dockerized the development workflow and tooling`,
      // `... And we're just getting started!`,
    ],
    image: ``,
    tags: ["Javascript", "React", "Node Js", "GraphQL", "AWS", "Git", "Jenkin",
      "Remix", "Enact", "Zod"],
    title: `Senior Full Stack Developer`,
  },
  {
    company: "JoulestoWatts Business Solutions Pvt Ltd",
    companyUrl: "https://www.joulestowatts.com/",
    date: `May 2020 - March 2022`,
    dateRange: [new Date(2020, 5, 5), new Date(2022, 3, 15)],
    description: `
      <p>
        Two year in we've jump-started the organization's code! Taking a
        "loosely typed and strongly coupled" system and successfully flipping it.
        worked in client location for buidling education application.
      </p>
    `,
    // <p>One year in and we've accomplished so much. Here are a few milestones worth mentioning.</p>
    highlights: [
      `Collaborated with cross-functional teams to gather
requirements, analyze user feedback, and iterate on
software solutions for optimal performance.`,
      `Introduced GraphQL and strongly types across services`,
      `Conducted code reviews, identified areas for
improvement, and implemented best practices for code
quality and maintainability.`,
      `Survey Framework, CSS Style Guide, Monorepo, Unit/E2E Testing, and more`,
    ],
    image: ``,
    tags: [
      "Docker",
      "Google Cloud",
      "GraphQL",
      "GraphQL Nexus",
      "NextJS",
      "NodeJS",
      "Serverless",
      "TailwindCSS",
      "TypeScript",
      "React",
      "Html",
      "Zod"
    ],
    title: `Principal Engineer`,
  },
  {
    company: "Capgemini Pvt Ltd",
    companyUrl: "https://www.capgemini.com/gb-en/",
    date: `Sep 2018 - Feb 2020`,
    dateRange: [new Date("Sep 2018"), new Date("Feb 2020")],
    description: `<p>
      Successfully pitched, prototyped, and delivered several high-impact
      projects within the organization. Assisting in hiring, managing, and
      mentoring engineers at various levels, distributed across the globe.
    </p>`,
    highlights: [
      `3D and 2D PDF view.`,
      `Implemented continuous integration and deployment
(CI/CD) pipelines, reducing deployment time by 25% and
increasing overall system reliability.`,
      `Introduced a mechanism to convert a web page table to
a Performance Demand Pool (PDF).`,
      `Contributed to the development of a dynamic e-
commerce platform, incorporating secure payment
gateways and real-time inventory management.`,
      `Successfully converted complex Excel datasets into
HTML, enhancing accessibility and enabling
collaborative data analysis on web platforms`,
    ],
    image: ``,
    tags: [
      "CSS",
      "Docker",
      "HTML",
      "Kubernetes",
      "PostCSS",
      "NodeJS",
      "React",
      "TailwindCSS",
      "TypeScript",
      "Webpack",
    ],
    title: `Associate Consultant`,
  },
  {
    company: "Krackerz 360 Degree Pvt Ltd",
    companyUrl: "https://krackerz.in/",
    date: `Aug 2016 - Aug 2018`,
    dateRange: [new Date(2016, 8, 1), new Date(2018, 8, 1)],
    description: `<p>
      Involved in analyzing client requirement and selecting
suitable technology stack.
    </p>`,
    highlights: [
      `Involved in designing scalable architecture based on the
requirement.Successfully integrated web-based
functionality into a mobile app, expanding the product's
reach and enhancing accessibility for users on the go.`,
    ],
    image: ``,
    tags: [
      "VueJs",
      "ReactJs",
      "NodeJs",
      "Express",
      "HTML",
      "Javascript",
      "MongoDB"
    ],
    title: `Technical Team Lead`,
  },
  {
    company: "Lift Agency",
    companyUrl: "https://liftagency.co",
    date: `Jul 2010 - Nov 2011`,
    dateRange: [new Date(2010, 7, 1), new Date(2011, 11, 1)],
    description: `<p>
      Joining Lift Agency was a conscious decision to move away from any
      form of a "Design" related role and focus on "Engineering". At the time
      jQuery was the tool of choice and browser support/hacks were an art form.
    </p>`,
    highlights: [
      `Wrote the Charter Checkout system and client-side validation flow`,
      `Experienced all the fun "quirks" of the IE days and Financial Systems`,
      `Assisted in creating the "Lift Calculator" an iPhone application`,
    ],
    image: "https://liftagency.co/favicon.ico",
    tags: [
      `ActionScript 3.0`,
      "Adobe Flash",
      "CSS",
      "Development",
      "Git",
      "HTML",
      "Javascript",
      "jQuery",
      "PHP",
    ],
    title: `Interactive Developer`,
  },
  {
    company: "Hotwire",
    companyUrl: "https://hotwire.com",
    contract: true,
    date: `Apr 2010 - July 2010`,
    dateRange: [new Date(2010, 4, 1), new Date(2010, 7, 1)],
    description: `<p>
      Worked in a hybrid Dev/Design capacity within the Creative Services
      department producing e-mails, banners, and 3rd party widgets.
    </p>`,
    highlights: [
      `Created initial prototypes for interactive widgets`,
      `General design of marketing collateral`,
    ],
    image: "https://hotwire.com/favicon.ico",
    tags: [
      "Adobe Illustrator",
      `Adobe Photoshop`,
      "CSS",
      "Design",
      "HTML",
      "jQuery",
      "Prototyping",
    ],
    title: `Graphic Designer`,
  },
  {
    company: "I.W. Group",
    companyUrl: "https://www.iwgroup.agency",
    date: `Sep 2008 - Feb 2010`,
    dateRange: [new Date(2008, 8, 1), new Date(2010, 2, 1)],
    description: `<p>
      A hybrid Dev/Design role creating web and interactive materials for
      clients including; McDonald's, FedEx, PG&E, US Army, US Census, and
      others.
    </p>`,
    highlights: [
      `Management of the APAC Ronald McDonald House Charity web domain`,
      `Design & development of interactive Flash media, across 3-5 languages`,
      `Speaker: New York, non-profit meetup re: Using social networking to enhance brand awareness`,
    ],
    image: `https://assets.website-files.com/6210110d90c0080391bd2d70/62ec7ce2c60a5c558566f5f1_IW%20favicon.png`,
    tags: [
      `ActionScript 2.0`,
      `ActionScript 3.0`,
      "Adobe Flash",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CSS",
      "HTML",
      "jQuery",
    ],
    title: `Interactive Designer/Developer`,
  },
  {
    company: "Zipidee",
    companyUrl: "https://zipidee.com",
    date: `Oct 2007 - Aug 2008`,
    dateRange: [new Date(2007, 10, 1), new Date(2008, 8, 1)],
    description: `<p>
      As with any startup, we tend to wear many hats, and this being my first
      professional / non-freelance position I took every opportunity I could
      to learn.
    </p>`,
    highlights: [
      `Implemented and managed the video encoding/transcoding processes`,
      `Balancing speed/quality settings across multiple outputs for varying use-cases`,
      `Development of custom branded, Flash video players for use on partner domains`,
      `Partners include; TiVo, ASPCA, The Weather Channel, and others`,
      `Development of interactive Flash components and banners used on site`,
    ],
    // image: "https://www.iwgroup.agency/favicon.ico",
    tags: [
      `ActionScript 2.0`,
      `Adobe Flash`,
      `Adobe Photoshop`,
      "CSS",
      `HTML`,
      `Video encoding`,
      `Video transcoding`,
    ],
    title: `Multi-Media Production Artist`,
  },
];

export interface Social {
  icon: string;
  title: string;
  url: string;
}

export const social: Social[] = [
  {
    icon: `/images/svg/envelope.svg`,
    title: `sandhanifullstack`,
    url: `mailto:sandhanifullstack@gmail.com`,
  },
  // {
  //   icon: `/images/svg/phone.svg`,
  //   title: `(415) 722-7481`,
  //   url: `tel:+14157227481`
  // },
  {
    icon: `/images/svg/github.svg`,
    title: `SandHaniDev`,
    url: `https://github.com/SandHani45`,
  },
  {
    icon: `/images/svg/linkedin.svg`,
    title: `/in/SandhaniFullstack`,
    url: `https://www.linkedin.com/in/sandhani-sheikh-full-stack-developer-8bb76aa4/`,
  },
  {
    icon: `/images/svg/twitter.svg`,
    title: `@SandHani45`,
    url: `https://twitter.com/SandHani45`,
  },
];
