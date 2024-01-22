const {Schema, model} = require('mongoose');
//milk production model
const milkSchema = new Schema({
    farmerId:{
        type: Schema.Types.ObjectId,
        ref:"farmer",
        required:false
    },
    quantity:{
        type: Number,
        required: true,
        unique: false
    }
},{
    timestamps: true
});
const MilkModel = model('milk', milkSchema);
module.exports = MilkModel;