import express from 'express';
import sequelize from './db';
import productRouter from './api/product';

const app = express();
app.use(express.json());
app.use('/products', productRouter);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, '127.0.0.1', () => {
      console.log(`Server listening on http://127.0.0.1:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();

