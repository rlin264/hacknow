const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoppingItemSchema = new Schema({
    item:{type: String, required: true},
    amount: {type: Number, required: true},
    isWeight: {type: Boolean, required: true}
})

const shoppingListSchema = new Schema({
    username:{type: String, required: true},
    items:[shoppingItemSchema]
},{
    timestamps: true;
})

const User = mongoose.model('User', userSchema);

module.exports = User;