import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'src', 'views'));

// Morgan
app.use(morgan('dev'));

// Static Files
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});