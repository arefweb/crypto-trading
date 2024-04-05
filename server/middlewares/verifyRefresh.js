import jwt from "jsonwebtoken";

const verifyRefresh = (req, res, next) => {
  const request = req.body;
  if(!request.refreshToken) {
    return res.status(401).send('No refreshToken!')
  }
  try {
    const decoded = jwt.verify(request.refreshToken, process.env.TOKEN_SECRET);
    if(decoded) {
      next();
    }
  } catch(err) {
    return res.status(401).send(err);
  }
}

export default verifyRefresh;