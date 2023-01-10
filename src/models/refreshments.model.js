const { Schema, model } = require("mongoose");
const baseOptionModel = require("./base-option.model");

const refreshmentsSchema = new Schema(
  {
    school: {
      type: Schema.Types.ObjectId,
      ref: "schools",
    },
    products: [{ type: Schema.Types.ObjectId, ref: "refreshment_products" }],
    serviceMans: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  baseOptionModel
);

module.exports = model("refreshments", refreshmentsSchema);
