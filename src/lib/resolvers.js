"use strict";

const courses = [
  {
    _id: 10,
    title: "Curso de introducción a reactjs",
    teacher: "@gndx",
    description: "lorem upsus",
    topic: "Programacion",
  },
  {
    _id: 11,
    title: "Curso de basico de Graphql",
    teacher: "@gndx",
    description: "lorem upsus",
    topic: "Programacion",
  },
];

module.exports = {
  Query: {
    getCourses: () => courses,
    getCourse: (root, args) => courses.find((course) => course._id == args._id),
  },
};
