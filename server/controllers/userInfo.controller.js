import jwt from "jsonwebtoken";

const userInfoController = (req, res) => {
  const authorization = req.headers.authorization;
  const accessToken = authorization.split(' ')[1];
  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  return res.json({ username: decoded.username });
}

export default userInfoController;