import { Response } from 'superagent';
import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');

import Team from '../database/models/TeamModel';
import { Model } from 'sequelize';
import { teamMock, idMock } from './mockTeams';


chai.use(chaiHttp);

const { expect } = chai;


//describe('GET /teams:id', () => {
//  afterEach(sinon.restore);
//  it('testa se o id informado não for encontrado, retorna status 404', async () => {
//    sinon.stub(TeamService, 'prototype').resolves(null);
//    const chaiHttp = await chai.request(app).get('/teams/100');
//    expect(chaiHttp.status).to.be.equal(404);
//    expect(chaiHttp.body).to.be.deep.equal({ error: 'Invalid email or password' });
//  });
//});

describe('quando a requisição é feita com sucesso', () => {
  let resChaiHttp: Response;
it('retorna todos os times, status 200', async () => {
sinon.stub(Model, 'findAll').resolves(teamMock as Team[])
resChaiHttp = await chai.request(app).get('/teams');
  expect(resChaiHttp.status).to.be.deep.equal(200);
  expect(resChaiHttp.body).to.be.deep.equal(teamMock);
  afterEach(function () {
    sinon.restore();
  });
})
})

describe('testa rota Teams', () => {
    let resChaiHttp: Response;
it('se a rota /teams/:id exibe um time, status 200', async () => {
  
sinon.stub(Model, 'findOne').resolves(idMock as Team)
resChaiHttp = await chai.request(app).get('/teams/5')
expect(resChaiHttp.status).to.be.deep.equal(200)
expect(resChaiHttp.body).to.be.deep.equal(idMock)
})
afterEach(function () {
  sinon.restore();
});
})