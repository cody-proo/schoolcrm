const SchoolModel = require("../models/school.model");

const createSchool = async (request, response, next) => {
  const codeOrNameDuplicate = await SchoolModel.findOne({
    $or: [{ code: request.body.code }, { name: request.body.name }],
  });
  if (codeOrNameDuplicate) {
    return response.status(409).json({
      statusCode: 409,
      message: "duplicate name or code",
    });
  }
  const school = await SchoolModel.create(request.body);
  return response.status(201).json({
    statusCode: 201,
    message: "school created successfully ...",
    data: {
      school,
    },
  });
};

const getAllSchools = async (request, response, next) => {
  const schools = await SchoolModel.find();
  return response.status(200).json({
    statusCode: 200,
    message: "list of schools",
    data: {
      schools,
    },
  });
};

const singleSchool = async (request, response, next) => {
  const { id } = request.params;
  const school = await SchoolModel.findById(id);
  if (!school) {
    return response.status(404).json({
      message: "school not found",
      statusCode: 404,
    });
  }
  return response.status(200).json({
    message: "get single school",
    statusCode: 200,
    data: {
      school,
    },
  });
};

const deleteSchool = async (request, response, next) => {
  const { id } = request.params;
  const school = await SchoolModel.findById(id);
  if (!school) {
    return response.status(404).json({
      message: "school not found",
      statusCode: 404,
    });
  }
  await SchoolModel.findByIdAndDelete(id);
  return response.status(200).json({
    message: "school delete successfully",
    statusCode: 200,
  });
};

const updateSchool = async (request, response, next) => {
  const { id } = request.params;
  const school = await SchoolModel.findById(id);
  if (!school) {
    return response.status(404).json({
      message: "school not found",
      statusCode: 404,
    });
  }
  if (request.body.name) {
    const duplicateName = await SchoolModel.findOne({
      name: request.body.name,
      _id: id,
    });
    if (duplicateName) {
      return response.status(409).json({
        message: "name duplicated .,..",
        statusCode: 409,
      });
    }
  }
  if (request.body.code) {
    const duplicateCode = await SchoolModel.findOne({
      code: request.body.code,
      _id: id,
    });
    if (duplicateCode) {
      return response.status(409).json({
        message: "scode duplicated ...",
        statusCode: 409,
      });
    }
  }
  const updatedSchool = await SchoolModel.findByIdAndUpdate(
    id,
    {
      $set: request.body,
    },
    { new: true }
  );
  return response.status(200).json({
    message: "school updated successfully",
    statusCode: 200,
    data: {
      updatedSchool,
    },
  });
};

module.exports = {
  createSchool,
  getAllSchools,
  singleSchool,
  deleteSchool,
  updateSchool,
};
