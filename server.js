import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';   
import dotenv from 'dotenv';
import {urlRouter} from '../routers/urlRouter.js';

app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/api/urls', urlRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;