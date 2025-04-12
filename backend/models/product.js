import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    ProName: {
      type: String,
      required: true,
    },
    Price: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Img: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productSchema);
 