import app from '../src/index';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

const USER_API = '/api/v1/users';


chai.use(chaiHttp);
const server = () => chai.request(app);

// describe('Example Test', () => {
//   it('should expect true === true', () => {
//     expect('true').to.be.eql('true');
//   });
// });

describe('App', () => {
  it('Should start the server', (done) => {
    server().get('/').end((error, res) => {
    expect(res.status).equal(200);
    expect(res.body).to.have.property('Welcome')
    expect(res.body.Welcome).equal('Welcome to YAW')
    })
    server().close(done)
  })

})
