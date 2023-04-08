//import * as sinon from 'sinon';
//import * as chai from 'chai';
//import * as jwt from 'jsonwebtoken';
//import * as bcryptjs from 'bcryptjs';
//import { app } from '../app';
//// @ts-ignore
//import chaiHttp = require('chai-http');
//import { Model } from 'sequelize';
//import User from '../database/models/UsersModel';
//import UserService from '../services/UserService';

////token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2ODA2MjIzODcsImV4cCI6MTY4MTIyNzE4N30.cgQ1qRMgSFlJinq7vrz41PLt72twa0aTav-vkJLIZPE';
//const token = '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW';

//chai.use(chaiHttp);
//const { expect  } = chai;

//describe('/login', () => {

//afterEach(sinon.restore)

//it('caso o email não seja informado retorna status 400', async () => {
//const httpResponse = await chai.request(app).post('/login').send({
//password: 'secret_admin'
//}) 
//expect(httpResponse.status).to.be.equal(400)
//expect(httpResponse.body).to.be.deep.equal({ message: 'All fields be filled' })
//})
//})

//it('caso a senha não seja informada, retorna status 400', async () => {
//const httpResponse = await chai.request(app).post('/login').send({
//email: 'admin@admin.com',
//password: '',
//}) 
//expect(httpResponse.status).to.be.equal(400)
//expect(httpResponse.body).to.be.deep.equal({ message: 'All fields be filled' })
//})

//it('retornar status 401 se a senha tiver menos de 6 caracteres', async () => {
//  const httpResponse = await chai.request(app).post('/login').send({
//  email: 'admin@admin.com',
//  password: '12345'
//  }) 
//  expect(httpResponse.status).to.be.equal(401)
//  expect(httpResponse.body).to.be.deep.equal({ message: 'Invalid email or password' })
//  })

//it('retornar status 401 caso o email tenha um formato inválido', async () => {
//  const httpResponse = await chai.request(app).post('/login').send({
//  email: 'ad/_45dasioj',
//  password: '12345'
//  }) 
//  expect(httpResponse.status).to.be.equal(401)
//  expect(httpResponse.body).to.be.deep.equal({ message: 'Invalid email or password' })
//  })

//it('retornar status 200 quando o login estiver correto', () => {
//  const admin =    {
//          username: 'Admin',
//          role: 'admin',
//          email: 'admin@admin.com',
//          password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
//          // senha: secret_admin
//                  };
//sinon.stub(Model, 'findOne').resolves(Model as unknown as User);
//sinon.stub(bcryptjs, 'compareSync').resolves(true);
//sinon.stub(jwt, 'sign').resolves(token);
//})

//const httpResponse = await chai.request(app).post('/login').send({
//  email: 'admin@admin.com',
//  password: 'secret_admin'
//  }) 
//  expect(httpResponse.status).to.be.equal(200);
