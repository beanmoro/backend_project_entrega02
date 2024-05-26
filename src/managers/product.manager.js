import { productModel } from "../models/product.model.js";

export class ProductManager {
  constructor() {}

  async addProduct(product) {
    try {
      const newProduct = await productModel.create(product);
      return newProduct.save();
    } catch (error) {
      throw error;
    }
  }

  async getProducts() {
    try {
      const products = await productModel.find();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const product = await productModel.findById(id);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(id, product) {
    try {
      const updateProduct = await productModel.findByIdAndUpdate(id, product);
      return updateProduct.save();
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      const product = await productModel.findByIdAndDelete(id);
      return product.save();
    } catch (error) {
      throw error;
    }
  }
}
