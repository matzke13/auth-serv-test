import jwt from 'jsonwebtoken';

// CERT: https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com
const isSignedIn = async (req, res, next) => {
  console.log('verify');
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (token) {
      const user = jwt.verify(token, process.env.GOOGLE_CERT.replace(/\\n/g, '\n'));
      // const user = jwt.verify(req.query.auth, process.env.GOOGLE_CERT.replace(/\\n/g, '\n'));
      console.log('user', user);
      if (user) next();
      else res.status(403).json({ test: 'du kommst da nicht rein!' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ test: 'du kommst da nicht rein!' });
  }
};
export default isSignedIn;
