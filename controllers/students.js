const studentsService = require('../services/students');

/* FETCH ALL */
module.exports.fetchAll = (req, res) => {
    res.status(200).json(studentsService.fetchAll()); // 200: success -> show array 
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
    res.status(201).json(Object.assign({}, req.body, {
        id: (students.length + 1).toString(),
    }));
};

/* UPDATE */
module.exports.update = (req, res) => {
    res.status(200).json(req, body); 
};

/* DELETE */
module.exports.delete = (req, res) => {
    res.status(204).send();  
};