import { Response } from 'superagent';
import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');

import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchesModels';
import MatchService from '../services/MatchesService';
import { describe } from 'node:test';

chai.use(chaiHttp);

const { expect } = chai;


describe('/matches', () => {
const matchesService = new MatchService();

it('"findAll matches', async () => {
  const res = await chai.request(app).get('/matches');
  expect(res.status).to.equal(200);
  });

  it('Testar a rota post matches ', async () => {
    const timao = {
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
    const res = await chai.request(app).post('/matches').send(Match);
    expect(res.status).to.equal(201);
    expect(res.body.homeTeamId).to.equal(Match.homeTeamId);
    expect(res.body.awayTeamId).to.equal(Match.awayTeamId);
  });

  it('Checar todos rota matches', async () => {
  
  });
});
