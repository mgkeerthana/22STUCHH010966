import mongoose from 'mongoose';
import express from 'express';
import { nanoid } from 'nanoid';
import { urlController } from '../controllers/urlController.js';

app.post('/shorten', urlController.createShortUrl);
app.post('/:shortUrl', urlController.retriveShortUrl);