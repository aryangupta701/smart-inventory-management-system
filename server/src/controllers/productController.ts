import { Request, Response } from "express";
import Product from "../schema/productSchema";

export const addProduct = async (req: Request, res: Response) => {
  try {
    const { stock } = req.body;
    let { name } = req.body;
    if (!name || !stock) {
      return res.status(401).json({ message: "Please fill all fields" });
    }
    name = name.toLowerCase();
    const product = new Product({
      name,
      stock,
    });
    await product.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const products = await Product.find({ _id });
    if (products.length == 0) {
      return res.status(401).json({ message: "Product not found" });
    } else {
      await Product.deleteOne({ _id });
      return res.status(200).json({ message: "Product deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { _id, stock } = req.body;
    const products = await Product.find({ _id });
    if (products.length == 0) {
      return res.status(401).json({ message: "Product not found" });
    } else {
      await Product.findOne({ _id }).updateOne({ stock });
      return res.status(200).json({ message: "Product updated successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
