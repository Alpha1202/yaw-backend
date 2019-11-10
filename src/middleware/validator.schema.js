import Joi from 'joi';

const email = Joi.string().email({ minDomainAtoms: 2 }).required();

const password = Joi.string().min(8).max(16).alphanum().required();

const signUp = {
    body: {
        email, password
    }
}

export default [
    {
        route: '/signup',
        method: 'post',
        schema: signUp
    }
];