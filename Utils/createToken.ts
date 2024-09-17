import Jwt from "jsonwebtoken";

export const createToken = (payload: any, role: string = "user") =>
  Jwt.sign({ _id: payload, role: role }, process.env.JWT_SECRET_KEY!);

export const createResetToken = (payload: any) =>
  Jwt.sign({ _id: payload }, process.env.JWT_SECRET_KEY!);
