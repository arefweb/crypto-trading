import fs from "fs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const signupController = (req, res) => {
  const data = req.body;

  let rawData = fs.readFileSync('credentials.json');
  let credentials = JSON.parse(rawData);
  const newKey = 1 + Object.keys(credentials).length;
  credentials[newKey.toString()] = {...data};

  fs.writeFileSync('credentials.json', JSON.stringify(credentials));

  const refreshToken = jwt.sign({
    username: data.username
  },
    process.env.TOKEN_SECRET,
    {
      expiresIn: '1000d'
    }
  );

  res.status(201).json({
    user: {
      username: data.username,
      email: data.email,
    },
    refreshToken
  });
};

export default signupController;