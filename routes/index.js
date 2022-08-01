const express = require('express');
const { getAllStudents, createStudent, deleteStudent } = require('../controllers/studentController');

const routes = express.Router();

routes.get("/students",getAllStudents);
routes.post("/student",createStudent);
routes.delete("/student/delete",deleteStudent);

module.exports = routes;