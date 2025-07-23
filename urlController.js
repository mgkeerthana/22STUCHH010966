import {nanoid} from 'nanoid';
import {urlModel} from '../models/urlModel.js';
import express from 'express';
import mongoose from 'mongoose'; 

export class urlController {
static async createShortUrl (req, res) {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ error: 'Original URL is required' });
    }

    try {
        const shortUrl = nanoid(6);
        const newUrl = new Url({
            originalUrl,
            shortUrl
        });

        await newUrl.save();
        res.status(201).json(newUrl);
    } catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

static async retriveShortUrl (req, res) {
    const { shortUrl } = req.params;

    try {
        const url = await Url.findOne({ shortUrl });
        if (!url) {
            return res.status(404).json({ error: 'Short URL not found' });
        }
        res.status(200).json({ shortUrl: url.shortUrl });
    } catch (error) {
        console.error('Error retrieving short URL:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
}
export default urlController;