const studentsController = require('../controllers/students');

module.exports = (app) => {
    /* GET api students */
    app.route('/api/students').get(studentsController.fetchAll);

    /* GET api students by id */
    app.route('/api/students/:id').get(studentsController.fetchOne);

    /* MIDDLEWARE */

    /* POST api/students */
    app.route('/api/students').post(studentsController.create); 

    /* PUT api/students id */
    app.route('/api/students/:id').put(studentsController.update); 

    /* DELETE api/students id */
    app.route('/api/students/:id').delete(studentsController.delete);
}