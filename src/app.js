import express from "express";
import productsRoutes from "./router/products.route.js";
import cartsRoutes from './router/carts.route.js'
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);

try {
  await mongoose.connect('mongodb+srv://CoderUser:123@codercluster.67vrm4s.mongodb.net/?retryWrites=true&w=majority')
  console.log('Connected to MongoDB');
} catch (error) {
  console.log('Cannot connect to database: ' + error);
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
