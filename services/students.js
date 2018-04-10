const mongoose = require('mongoose'); 
const StudentModel = require('../models/student'); 

// returns array met de resultaten
module.exports.fetchAll = () => {
    // find en execute studentmodel
    return StudentModel.find({}).lean().exec();
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

// create
module.exports.create = (student) => {
    return StudentModel.create(student);
}

// update
module.exports.update = (id, student) => {
    // als id niet bestaat is return null
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }
    // anders zoek id en update
    return StudentModel.findOneAndUpdate({ _id: id }, student, { new: true });
}

// delete 
module.exports.delete = (id) => {
    // als id niet bestaat return null
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }
    // anders zoek id en remove 
    return StudentModel.remove({ _id: id }).exec();
}