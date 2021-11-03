"use strict";
const generateUniqueId = require("generate-unique-id");

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

const students = [
  { _id: 1, name: "Efren Martinez", email: "efren@platzi.com" },
  { _id: 2, name: "yo lan da", email: "yo@platzi.com" },
];

module.exports = {
  Query: {
    getCourses: () => courses,
    getCourse: (root, args) => courses.find((course) => course._id == args._id),
    getStudents: () => students,
    getStudent: (root, args) =>
      students.find((student) => student._id == args._id),
  },
  Mutation: {
    createCourse: (root, { input }) => {
      const newCourse = {
        ...input,
        _id: generateUniqueId({ length: 10 }),
      };
      return newCourse;
    },
    createStudent: (root, { input }) => {
      const newStudent = {
        ...input,
        _id: generateUniqueId({ length: 10 }),
      };
      return newStudent;
    },
  },
};
