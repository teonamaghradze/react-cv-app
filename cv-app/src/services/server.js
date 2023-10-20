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
        (schema) => {
          return schema.educations.all();
        },
        { timing: 3000 }
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
