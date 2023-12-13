import { Factory, Model, createServer } from "miragejs";

export default function makeServer() {
  let server = createServer({
    models: {
      skills: Model,
      education: Model,
    },

    factories: {
      education: Factory.extend({
        date: "10/13/2023",
        title: "education title",
        description: "edu description",
      }),
      skills: Factory.extend({
        name: "Example Skill",
        range: 50,
      }),
    },
    seeds(server) {
      server.createList("education", 5);
    },

    routes() {
      this.namespace = "api";

      this.get(
        "/educations",
        () => [
          {
            date: "2022",
            title: "Bachelor's Degree in Computer Science",
            description:
              "Completed a Bachelor's Degree in Computer Science from XYZ University.",
          },
          {
            date: "2020",
            title: "Summer Internship at TechCompany Inc.",
            description:
              "Interned at TechCompany Inc. as a software developer, gaining valuable experience.",
          },
          {
            date: "2019",
            title: "Research Assistant at Research Institute",
            description:
              "Worked as a research assistant at the Research Institute, contributing to AI research.",
          },
          {
            date: "2021",
            title: "Online Courses in Data Science",
            description:
              "Taking online courses in data science to enhance skills in data analysis and machine learning.",
          },
          {
            date: "2019",
            title: "Hackathon Competition - First Prize Winner",
            description:
              "Participated in a hackathon competition and won first prize for an innovative mobile app.",
          },
          {
            date: "2018",
            title: "High School Computer Science Club President",
            description:
              "Served as the president of the Computer Science Club in high school.",
          },
          {
            date: "2021",
            title: "Volunteer at Local Nonprofit Organization",
            description:
              "Volunteered at a local nonprofit organization, contributing technical skills.",
          },
          {
            date: "2020",
            title: "Mobile App Development Course",
            description:
              "Enrolled in a mobile app development course to learn app design and development.",
          },
          {
            date: "2019",
            title: "Technical Writing Workshop",
            description:
              "Attended a technical writing workshop to improve communication of technical concepts.",
          },
          {
            date: "2018",
            title: "Freelance Web Development Projects",
            description:
              "Took on freelance web development projects, creating custom websites.",
          },
          {
            date: "2021",
            title: "Participation in Coding Competitions",
            description:
              "Participated in coding competitions, enhancing problem-solving skills.",
          },
          {
            date: "2017",
            title: "Graduate Studies in Artificial Intelligence",
            description:
              "Pursuing graduate studies in artificial intelligence at ABC University.",
          },
          {
            date: "2020",
            title: "Open Source Contribution - GitHub",
            description:
              "Contributed to open source projects on GitHub, collaborating with developers.",
          },
        ],
        { timing: 1000 }
      );

      this.get(
        "/skills",
        (schema) => {
          return schema.skills.all();
        },
        { timing: 3000 }
      );

      this.post("/skills", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.skills.create(attrs);
      });
    },
  });
  return server;
}
