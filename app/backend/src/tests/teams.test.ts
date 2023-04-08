import { Response } from 'superagent';
import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');

import Team from '../database/models/TeamModel';

import { describe } from 'node:test';
import { Model } from 'sequelize';
import TeamService from '../services/TeamService';


chai.use(chaiHttp);

const { expect } = chai;

mockTeamTest: {
  id: 4;
  teamName: 'Corinthians';
}

describe('GET /teams:id', () => {
  afterEach(sinon.restore);
  it('testa se o id informado não for encontrado, retorna status 404', async () => {
    sinon.stub(TeamService, 'prototype').resolves(null);
    const chaiHttp = await chai.request(app).get('/teams/100');
    expect(chaiHttp.status).to.be.equal(404);
    expect(chaiHttp.body).to.be.deep.equal({ error: 'Invalid email or password' });
  });
});

describe('quando a requisição é feita com sucesso', () => {
it('retorna status 200', async () => {

  // sinon.stub(TeamService, 'prototype').resolves({ id: 1, teamName: 'Avaí/Kindermann' })
sinon.stub(TeamService.prototype, 'findAllTeam').resolves(TeamService as unknown as Team[])
  const chaiHttp = await chai.request(app).get('/teams/4');
  expect(chaiHttp.status).to.have.status(200);
  expect(chaiHttp.body).to.be.deep.equal({
    timao: {
      "id": 46,
      "homeTeamId": 4,
      "awayTeamId": 12,
      "homeTeamGoals": 1,
      "awayTeamGoals": 1,
      "inProgress": true,
      "homeTeam": {
        "teamName": "Corinthians"
      },
      "awayTeam": {
        "teamName": "Palmeiras"
      }
    }
  })
  afterEach(function () {
    sinon.restore();
  });
})
})

describe('testa rota Teams', () => {
it('se a rota /teams exibe uma lista com todos os times', async () => {
  
  sinon.stub(TeamService.prototype, 'findAllTeam').resolves(TeamService as unknown as Team[])
const result = await chai.request(app).get('/teams')
expect(result).to.be.equal(200)
expect(result.body).to.be.deep.equal(Team)
})
afterEach(function () {
  sinon.restore();
});
})