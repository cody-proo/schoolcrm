const { Schema, model } = require("mongoose");
const baseOptionModel = require("./base-option.model");

const UserRoles = Object.freeze({
  Student: "Student",
  Teacher: "Teacher",
  ServiceMan: "ServiceMan",
  Admin: "Admin",
  SuperAdmin: "SuperAdmin",
});

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nationalCode: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: String,
        enum: Object.values(UserRoles),
      },
    ],
    bio: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    blocked: {
      type: Schema.Types.ObjectId,
      ref: "userBlocks",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    school: {
      type: Schema.Types.ObjectId,
      ref: "schools",
    },
  },
  baseOptionModel
);

module.exports = model("users", userSchema);
module.exports.UserRoles = UserRoles;
