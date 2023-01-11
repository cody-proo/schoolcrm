const { Schema, model } = require("mongoose");
const baseOptionModel = require("./base-option.model");

const userBlocksSchema = new Schema(
  {
    isBlocked: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  baseOptionModel
);

module.exports = model("userBlocks", userBlocksSchema);
