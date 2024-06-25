const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{type:String,require:true, trim:true},
    phone:{type:String,require:true, trim:true},
});

const student = mongoose.model('students',schema)
module.exports = student;