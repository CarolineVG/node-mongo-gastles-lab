//const middleware = require('../middleware/auth');

const studentsController = require('../controllers/students');


module.exports = (app) => {
    /* GET api students */
    app.route('/api/students').get(studentsController.fetchAll);

    /* MIDDLEWARE */

    /* POST api/students */
    /*app.route('/api/students').post(middleware, (req, res) => {
        // 201: created
        res.status(201).json(Object.assign({}, req.body, {
            id: (students.length + 1).toString(),
        }));
    });
    /* PUT api/students id */
    /*app.route('/api/students/:id').put((req, res) => {
        // 200: success
        res.status(200).json(req.body);
    });

    /* DELETE api/students id */
    /*app.route('/api/students/:id').delete((req, res) => {
        // 204: no content -> delete 
        res.status(204).send();
    });*/
}