const mongoose = require('mongoose')
const uniqueValidator = require ('mongoose-unique-validator')

let rolesValidos={
    values:['ADMIN_ROLE','USER_ROLE'],
    message:'{VALUE} ro es un rol valido'
}
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        type: String,//tipo de dato
        require: [true,'El nombre es necesario']//si es obligatorio el campo y un mensaje
    },
    email:{
        type: String,
        unique: true,
        require:[true,'El correo es requerido']
    },
    password:{
        type: String,
        require:[true,'Contraseña Obligatoria']
    },
    img:{
        type: String,
        require:[false]
    },
    rol:{
        type:String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado:{
        type:Boolean,
        default: false
    },
    google:{
        type: Boolean,
        default: false
    }
});

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator,{menssage:'{PATH} DEBE DE SER UNICO'})
module.exports = mongoose.model('Usuario',usuarioSchema)