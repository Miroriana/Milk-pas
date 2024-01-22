const {Schema, model}= require('mongoose');
//admin model: veterian registration

const VeterinarySchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: false
    },
    nationalId:{
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        match: [/(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,'Please provide a valid password'],
    },
    verified:{
        type: String,
        default: false
    },
    province:{
        type: String,
        required: true
    },
    sector:{
        type: String,
        required: true

    }
});
const VeterinaryModel = model('vet', VeterinarySchema);
module.exports= VeterinaryModel;