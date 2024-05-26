import { cartModel } from "../models/cart.model.js";
import { productModel } from "../models/product.model.js";

export class CartManager {
  constructor() {}

  async createCart(cart) {
    try {
      const newCart = await cartModel.create(cart);

      return await newCart.save();
    } catch (error) {
      throw error;
    }
  }

  async getCartById(cid) {
    try {
      const cart = await cartModel.findById(cid).populate("pid");

      return cart;
    } catch (error) {
      throw error;
    }
  }

  async addProduct(cid, pid, quantity) {
    try {
      const cart = await cartModel.findById(cid);
      const product = await productModel.findById(pid);

      if (cart && product) {
        const existingProductIndex = cart.products.findIndex(
          (e) => e.pid === pid
        );

        if (existingProductIndex >= 0) {
          cart.products[existingProductIndex].quantity += quantity;
        } else {
          cart.products.push({ pid: pid, quantity: quantity });
        }
      }

      await cart.save();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
