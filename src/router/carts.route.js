import { Router } from "express";
import { ProductManager } from "../managers/product.manager.js";
import { CartManager } from "../managers/cart.manager.js";

const cManager = new CartManager();

const pManager = new ProductManager();

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { products } = req.body;

    await cManager.createCart({ products });
    res.json({
      ok: true,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

router.get("/:cid", async (req, res) => {
  try {
    const { cid } = req.params;
    const cart = await cManager.getCartById(cid);
    res.json({
      ok: true,
      cart,
    });
  } catch (error) {
    throw error;
  }
});

router.post("/:cid/product/:pid", async (req, res) => {
  try {
    const { cid, pid } = req.params;

    const { quantity } = req.body;

    await cManager.addProduct(cid, pid, quantity);

    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.json({
      error,
    });
  }
});

export default router;