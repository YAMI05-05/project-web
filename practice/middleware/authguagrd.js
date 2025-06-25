const jwt = require("jsonwebtoken");

const JWT_TOKEN = process.env.JWT_TOKEN;

const authGuard = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ success: false, message: 'Authorization token MISSING'});
  
}
const token = authHeader.split(' ')[1];
try{
  const decoded = jwt.verify(token, JWT_TOKEN);
  req.user = decoded;
  next();


} catch (error) {
  return res.status(401).json({ success: false, message: 'Invalid token' });
}
};

module.exports = authGuard;