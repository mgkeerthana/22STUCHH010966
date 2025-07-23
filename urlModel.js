import mongoose from 'mongoose';
import express from 'express';

export const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(http|https):\/\/[^ "]+$/.test(v);
            }
        },
        message: props => `${props.value} is not a valid URL!`
        },
        shortUrl: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9_-]{6,}$/.test(v);
            }
        },
        message: props => `${props.value} is not a valid short URL!
`
        }
    },{
    timestamps: true
});

export const urlModel = mongoose.model('urlModel', urlSchema);