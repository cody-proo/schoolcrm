const requestWrapper = (dto, handler, middlewares) => {
  return (request, response, next) => {
    middlewares.map((middleware) => middleware(request, response, next));
    if (dto) {
      const { error } = dto.validate(request.body);
      if (error) {
        return response
          .status(400)
          .json({ message: "validation failed ...", statusCode: 400, error });
      }
    }
    return handler(request, response, next);
  };
};

module.exports = requestWrapper;
