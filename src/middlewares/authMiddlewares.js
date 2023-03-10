const axios = require('axios');

const validateLogin = async (req, res, next) => {

    const response = await axios.post('http://localhost:3000/login', req.body);

    if (response.data.success) {
        req.headers.authorization = response.data.token;
        res.status(200).json({ sucess: 'Login sucessfull' ,token:response.data.token});
    }
    else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
    next();
};


const validateReq = async (req, res, next) => {

    try {
        const validation = await axios.get("http://localhost:3000/verify", { headers: { authorization: req.headers.authorization } });
        if (validation.data.success) {
            next();
        }
        else {
            res.status(401).json({ error: validation.data });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

};
module.exports = { validateLogin,validateReq };