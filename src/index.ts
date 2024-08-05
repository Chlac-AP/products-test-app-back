import express, { Express, Request, Response } from "express";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

import { createLogger, format, transports } from "winston";
 
const logger = createLogger({
  transports: [new transports.Console()],
});

const app: Express = express();
const port = process.env.PORT || 3000;


//var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');

const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

//app.use('/', indexRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
