import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;
  if(!authorization) {
    return res.status(401).send('Not Authorized');
  }
  const accessToken = authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    if(decoded) {
      next();
    }
  } catch(err) {
    return res.status(401).send(err);
  }
}

export default verifyToken;