import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import indexRouter from './routes/index';
import locationsRouter from './routes/locations';

const app = express();

//TODO: be specific about requests
app.use(cors());
//TODO: enable caching
app.disable('etag');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/v1', indexRouter);
app.use('/api/v1/locations', locationsRouter);

export default app;
