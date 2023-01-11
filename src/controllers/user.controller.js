const UserModel = require("../models/user.model");
const SchoolModel = require("../models/school.model");
const UserBlockModel = require("../models/userBlock.model");
const bcrypt = require("bcrypt");
const envConfigs = require("../configs/env.config");

const createUser = async (request, response) => {
  const duplicateNationalCode = await UserModel.findOne({
    nationalCode: request.body.nationalCode,
  });
  if (duplicateNationalCode) {
    return response.status(409).json({
      message: "national code is duplicated ...",
      statusCode: 409,
    });
  }
  const duplicateCode = await UserModel.findOne({
    code: request.body.code,
  });
  if (duplicateCode) {
    return response.status(409).json({
      message: "code is duplicated ...",
      statusCode: 409,
    });
  }
  const school = await SchoolModel.findById(request.body.school);
  if (!school) {
    return response.status(404).json({
      message: "school is not found",
      statusCode: 404,
    });
  }
  const hashedPassword = await bcrypt.hash(
    request.body.password,
    envConfigs.passwordSalt
  );
  const userCreated = await UserModel.create({
    ...request.body,
    password: hashedPassword,
    image: req.file.filename,
  });
  return response.status(201).json({
    message: "user created successfully",
    statusCode: 201,
    data: {
      user: userCreated,
    },
  });
};

const getAllUsers = async (request, response) => {
  const users = await UserModel.find();
  return response.status(200).json({
    message: "get users list successfully",
    statusCode: 200,
    data: { users },
  });
};

const getSingleUser = async (request, response) => {
  const { id } = request.params;
  const user = await UserModel.findById(id);
  if (!user) {
    return response.status(404).json({
      message: "user not found",
      statusCode: 404,
    });
  }
  return response.status(200).json({
    message: "get single user successfully",
    statusCode: 200,
    data: { user },
  });
};

const updateUser = async (request, response) => {
  const { id } = request.params;
  const user = await UserModel.findById(id);
  if (!user) {
    return response.status(404).json({
      message: "user not found",
      statusCode: 404,
    });
  }
  if (request.body.school) {
    const school = await SchoolModel.findById(request.body.school);
    if (!school) {
      return response
        .status(404)
        .json({ message: "school is not found", statusCode: 404 });
    }
  }
  if (request.body.nationalCode) {
    const duplicateNationalCode = await UserModel.findOne({
      nationalCode: request.body.nationalCode,
    });
    if (duplicateNationalCode) {
      return response.status(409).json({
        message: "national code is duplicated ...",
        statusCode: 409,
      });
    }
  }
  const updatedUser = await UserModel.findByIdAndUpdate(
    id,
    { $set: request.body },
    { new: true }
  );
  return response.status(200).json({
    message: "update user successfully",
    statusCode: 200,
    data: {
      updatedUser,
    },
  });
};

const deleteUser = async (request, response) => {
  const { id } = request.params;
  const user = await UserModel.findById(id);
  if (!user) {
    return response.status(404).json({
      message: "user not found",
      statusCode: 404,
    });
  }
  await UserModel.findByIdAndDelete(id);
  return response
    .status(200)
    .json({ message: "delete successfully", statusCode: 200 });
};

const blockUser = async (request, response) => {
  const { id } = req.params;
  const user = await UserModel.findById(id);
  if (!user) {
    return response.status(404).json({
      message: "user not found",
      statusCode: 404,
    });
  }
  const userBlock = await UserBlockModel.findOne({ user: id, isBlocked: true });
  if (userBlock) {
    return response.status(400).json({
      message: "user blocked before ...",
      statusCode: 400,
    });
  }
  await UserBlockModel.create({
    user: id,
    description: request.body.description,
  });
  await UserModel.findByIdAndUpdate(id, { $set: { blocked: true } });
  return response
    .status(201)
    .json({ message: "user blocked successfully ...", statusCode: 201 });
};

const unBlockUser = async (request, response) => {
  const { id } = req.params;
  const user = await UserModel.findById(id);
  if (!user) {
    return response.status(404).json({
      message: "user not found",
      statusCode: 404,
    });
  }
  if (!user.blocked) {
    return response.status(400).json({
      message: "user is not block",
      statusCode: 400,
    });
  }
  await UserBlockModel.updateMany({ user: id }, { $set: { isBlocked: false } });
  return response.status(200).json({
    message: "user unblocked successfully ...",
    statusCode: 200,
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  blockUser,
  unBlockUser,
};
