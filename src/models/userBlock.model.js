const { Schema, model } = require("mongoose");
const baseOptionModel = require("./base-option.model");

const userBlocksSchema = new Schema(
  {
    isBlcoked: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  baseOptionModel
);

module.exports = model("userBlocks", userBlocksSchema);
