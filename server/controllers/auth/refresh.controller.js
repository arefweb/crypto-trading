import jwt from "jsonwebtoken";

const refreshController = (req, res) => {
  const refreshToken = req.body.refreshToken;
  const decoded = jwt.verify(refreshToken, process.env.TOKEN_SECRET);
  const accessToken = jwt.sign({
      username: decoded.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '1d'
    }
  );

  return res.status(200).json({ accessToken });
}

export default refreshController;