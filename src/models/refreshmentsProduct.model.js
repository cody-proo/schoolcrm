const { Schema, model } = require("mongoose");
const baseOptionModel = require("./base-option.model");

const refreshmentProductSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    categories: [
      { type: Schema.Types.ObjectId, ref: "refreshment_product_categories" },
    ],
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  baseOptionModel
);

module.exports = model("refreshment_products", refreshmentProductSchema);
