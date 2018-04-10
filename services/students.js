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
    // als id niet bestaat
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return new Promise((resolve, reject) => {
            // return null
            resolve(null);
        });
    }
    // anders zoek de student met het id
    // .lean -> return js objects (niet mongoose)
    return StudentModel.findOne({ _id: id }).lean().exec();
}