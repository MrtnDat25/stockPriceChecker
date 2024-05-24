const mongoose = require('mongoose');
const {Schema} = mongoose;
const StockShema  = new Schema(
    {
        symbol: {type: String, required: true},
        likes: {type: [String], default: []},
    }
);

const Stock = mongoose.model("Stock", StockShema);


exports.Stock = Stock; 