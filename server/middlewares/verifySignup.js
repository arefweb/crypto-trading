import fs from "fs";

const verifySignup = (req, res, next) => {
  const { username, email, password } = req.body;
  const allExist = username && email && password;
  const rawData = fs.readFileSync('credentials.json');
  const credentials = JSON.parse(rawData);
  const users = Object.values(credentials);
  const duplicateEmail = users.find((item) => {
    return item.email === email;
  });
  if(!allExist) {
    return res.status(400).send('Bad Request');
  }
  if(duplicateEmail) {
    return res.status(409).send('Duplicate email');
  }
  next();
}

export default verifySignup;