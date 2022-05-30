const bcrypt =require('bcrypt');
const mongoose = require("mongoose");

const saltRounds = 10;
/**
 * schema donde los usuarios en la base de datos de mongo
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}>}
 */
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});
/**
 * aqui estaremos realizando el guardado de los usuarios
 */
UserSchema.pre('save', function (next){
    if (this.isNew || this.isModified('password')){
        const document = this;

        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) =>{
            if (err){
                next(err);
            }else {
                document.password = hashedPassword;
                next();
            }
        });
    }else {
        next();
    }
});


UserSchema.methods.isCorrectPassword = function (password, callback){
    bcrypt.compare(password, this.password, function (err, same){
       if (err){
           callback(err);
       } else {
           callback(err, same);
       }
    });
}

module.exports = mongoose.model('User', UserSchema);

