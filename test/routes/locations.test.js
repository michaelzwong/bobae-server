import { expect, server, BASE_URL } from '../setup';
import sinon from 'sinon';
import yelpClient from '../../src/services/graphql/yelpClient';

describe('GET locations route', () => {

    describe('Yelp Client returns status 200 with correct data', async () => {
        before(() => {
            sinon.stub(yelpClient, 'request').returns({ 'data': 'this is a fake response haha' });
        });

        after(() => {
            sinon.restore();
        });

        it('should receive total number of locations in a given vicinity', done => {
            server
                .get(`${BASE_URL}/locations`)
                .expect(200)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.data).to.equal(
                        'this is a fake response haha'
                    );
                    done();
                });
        });
    });

    describe('Yelp Client returns error status with error message', async () => {
        let error;

        before(() => {
            error = new Error('oops a fake error appeared');
            sinon.stub(yelpClient, 'request').throws(error);
        });

        after(() => {
            sinon.restore();
        });

        it('should receive error message returned by the Yelp Client', done => {
            server
                .get(`${BASE_URL}/locations`)
                .end((err, res) => {
                    expect(res.status).to.equal(500);
                    expect(res.error.text).to.equal(
                        'oops a fake error appeared'
                    );
                    done();
                });
        });
    });
});