import fs from "fs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const loginController = (req, res) => {
  const { email, password } = req.body;
  const queryParams = req.query;

  let rawData = fs.readFileSync('credentials.json');
  let credentials = JSON.parse(rawData);
  const users = Object.values(credentials);
  const matchedUser = users.find((item) => {
    return item.email === email;
  });
  const passwordMatch = matchedUser && matchedUser.password === password;
  if(!matchedUser || !passwordMatch) {
    return res.status(404).send('Not found!');
  }

  const accessToken = jwt.sign({
      username: matchedUser.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '1d'
    }
  );

  if(queryParams["issue_refresh"] === 'true') {
    const refreshToken = jwt.sign({
        username: matchedUser.username
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '1000d'
      }
    );
    return res.status(200).json({ refreshToken, accessToken });
  }

  return res.status(200).json({ accessToken, username: matchedUser.username });
}

export default loginController;