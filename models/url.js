const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        shortUrl: {
            type: String,
            required: true,
            unique: true
        },
        longUrl: {
            type: String,
            required: true
        },
        visitHistory: [
            {
                timeStamp: {
                    type: Number
                }
            }
        ]
    },
    {
        timestamps: true // Use timestamps option here
    }
);

const URL = mongoose.model("url",urlSchema);

module.exports = URL;
