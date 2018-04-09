const middleware = require('../middleware/auth');

// make json file for the api
const students = [
    {
        id: '1',
        name: 'Caroline',
    },
    {
        id: '2',
        name: 'Lisa',
    }
];

module.exports = (app) => {
    /* GET api/students */
    app.route('/api/students').get((req, res) => {
        res.status(200).json(students); // 200: success -> show students.json
    });
    /* GET api/students id -> http://localhost:3000/api/students/1 */
    app.route('/api/students/:id').get((req, res) => {
        // search in students 
        const student = students.find((stu) => {
            // if student id == request id
            return stu.id === req.params.id;
        });
        // 200: success -> show 
        if (student) {
            res.status(200).json(student);
        } else {
            // 200: not found -> error
            res.status(404).json({
                error: 404,
                message: 'Not Found'
            });
        }

        
    });
}