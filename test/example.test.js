import app from '../src/index';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

const USER_API = '/api/v1/users';

chai.should();
chai.use(chaiHttp);
const server = () => chai.request(app);


describe('server', () => {
  it('should start the server successfully', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).equal(200);
   expect(res.body).to.have.property('Welcome')
    expect(res.body.Welcome).equal('Welcome to YAW')
        done();
      });
  });
});
