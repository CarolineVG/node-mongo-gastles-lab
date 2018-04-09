const studentsService = require('../services/students');

module.exports.fetchAll = (req, res) => {
    res.status(200).json(studentsService.fetchAll());
};