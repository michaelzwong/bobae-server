// File helps setup base test packages
import supertest from 'supertest';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import app from '../src/app';

chai.use(sinonChai);
chai.use(chaiHttp);

export const { expect } = chai;
export const { request } = supertest;
export const server = supertest.agent(app);
export const BASE_URL = '/api/v1';
