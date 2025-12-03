import { Router } from 'express';
import Product from '../models/product';
    

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products', details: String(err) });
  }
});

export default router;