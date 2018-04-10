const studentsService = require('../services/students');

/* FETCH ALL */
module.exports.fetchAll = (req, res) => {
    studentsService.fetchAll().then((students) => {
        res.status(200).json(students); // success
    }, (err) => { // error
        res.status(500).json({
            message: err.message,
        });
    });
};

/* FETCH BY ID */
module.exports.fetchOne = (req, res) => {
    // fetch by id (id in url), dan
    studentsService.fetchById(req.params.id).then((student) => {
        if (student) {
            res.status(200).json(student); // success
        } else { // bestaat niet
            res.status(404).json({
                error: 404,
                message: 'Not Found'
            });
        }
    }, (err) => {
        res.status(500).json({
            message: err.message,
        });
    });
};



/* CREATE */
module.exports.create = (req, res) => {
    studentsService.create(req.body).then((student) => {
        res.status(201).json(student); // success 
    }, (err) => {
        res.status(500).json({
            message: err.message,
        });
    });
};

/* UPDATE */
module.exports.update = (req, res) => {
    studentsService.update(req.params.id, req.body).then((student) => {
        if (student) {
            res.status(200).json(student); // success
        } else { // bestaat niet
            res.status(404).json({
                error: 404,
                message: 'Not Found'
            });
        }
    }, (err) => {
        res.status(500).json({
            message: err.message,
        });
    });
};

/* DELETE */
module.exports.delete = (req, res) => {
    studentsService.delete(req.params.id).then((response) => {
        if (response && response.n > 0) {
            res.status(204).send(); // delete
        } else { // bestaat niet
            res.status(404).json({
                error: 404,
                message: 'Not Found'
            });
        }
    }, (err) => {
        res.status(500).json({
            message: err.message,
        });
    })
};