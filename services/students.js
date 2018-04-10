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

// returns array met de resultaten
module.exports.fetchAll = () => {
    // find en execute studentmodel
    return StudentModel.find({}).exec();
}

// returns array op basis van id
module.exports.fetchById = (id) => {
    return students.find((student) => {
        return student.id === id;
    });
}