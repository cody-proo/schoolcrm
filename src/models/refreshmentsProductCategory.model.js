const { Schema, model } = require("mongoose");
const baseOptionModel = require("./base-option.model");

const refreshmentProductCategorySchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    price: {
      required: false,
      type: Number,
      default: 0,
    },
  },
  baseOptionModel
);

module.exports = model(
  "refreshment_product_categories",
  refreshmentProductCategorySchema
);
