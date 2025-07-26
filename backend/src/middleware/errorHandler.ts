import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error occurred globally:", err.message);

  const statusCode = err.statusCode || res.statusCode || 500;

  res.status(statusCode).json({
    error: true,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
