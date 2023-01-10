const { Schema, model } = require("mongoose");
const baseOptionModel = require("./base-option.model");

const schoolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    areaCode: {
      type: String,
      required: true,
    },
    options: {
      type: Map,
      of: String,
    },
    users: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  baseOptionModel
);

module.exports = model("schools", schoolSchema);

// پارکنینگ داره یا نداره
// استخر داره یا نداره
// محیط بازی داره یا نداره
// ابخوری داره یا نداره
// یا تعداد ابخوری ها
// تعداد دستشویی ها
// ...
