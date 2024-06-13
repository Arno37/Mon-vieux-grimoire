/* eslint-disable import/newline-after-import */
/* eslint-disable padded-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable indent */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('Token:', token);
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId,
        };
        next();
    } catch(error) {
        res.status(401).json({ error });
    }
};
