import { config } from 'dotenv';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { passwordHasher, signToken } from '../src/utils';
import app from '../src'

const USER_API = '/api/v1/users';

config();
chai.use(chaiHttp);
const server = () => chai.request(app);

const invalidData = {
    email: 'invalidemail@',
    password: 'doesnt matter'
};

const validData = {
    email: 'test.user@email.com',
    password: 'testuser001'
}

describe('Utils', () => {
  it('passwordHasher should return a string when salt is not passed', () => {
    passwordHasher('mypassword').then(data => expect(typeof data).equal('string'));
  });
  it('passwordHasher should return a string when salt is passed', () => {
    passwordHasher('mypassword', 15).then(data => expect(typeof data).equal('string'));
  });
  it('signToken should return a string', () => {
    const token = signToken(validData);
    expect(typeof token).equal('string')
  });
});

describe('Signup', () => {
  it('throw error if the data provided is invalid', done => {
    server().post(`${USER_API}/signup`).send(invalidData).end((error, res) => {
        expect(res.status).equal(400);
        expect(res.body).to.have.property('message');
        done();
    });
  });
  it('successfully register a user', done => {
    server().post(`${USER_API}/signup`).send(validData).then( res => {
        expect(res.status).equal(201);
        expect(res.body).to.have.property('message');
        expect(res.body.message).equal('Registration successfull');
        expect(res.body).to.have.property('token');
        expect(res.body).to.have.property('user');    
        expect(res.body.user).to.have.property('id');
        expect(res.body.user).to.have.property('email');
        expect(res.body.user).to.have.property('isVerified');
        expect(res.body.user).to.have.property('firstName');
        expect(res.body.user).to.have.property('lastName');
        expect(res.body.user.password).equal('undefined');
    });
    server().close(done);
  });
});
