import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({id}, 'TOP_SECRET', {
        expiresIn: '30d',
    })
}

export default generateToken;