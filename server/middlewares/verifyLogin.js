const verifyLogin = (req, res, next) => {
  const { email, password } = req.body;
  const allExist = email && password;
  if(!allExist) {
    return res.status(400).send('Bad Request');
  }
  next();
}

export default verifyLogin;