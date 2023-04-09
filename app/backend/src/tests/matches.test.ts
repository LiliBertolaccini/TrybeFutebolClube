import { Response } from 'superagent';
import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import Match from '../database/models/MatchesModels';
import { Model } from 'sequelize';
import { mockMatches, timao } from './mockMatches';

//import Team from '../database/models/TeamModel';
//import MatchService from '../services/MatchesService';


chai.use(chaiHttp);

const { expect } = chai;


describe('/matches', () => {
  let resChaiHttp: Response;
const match = new Match();

it('se todas as partidas de times da da rota matches, retorne status 200', async () => {
  sinon.stub(Model, 'findAll').resolves(mockMatches as unknown as Match[])
  resChaiHttp = await chai.request(app).get('/matches');
    expect(resChaiHttp.status).to.be.deep.equal(200);
    expect(resChaiHttp.body).to.be.deep.equal(mockMatches);
    afterEach(function () {
      sinon.restore();
    });
  })
  })


  describe('testa rota matches/:id', () => {
    let resChaiHttp: Response;
    afterEach(function () {
      sinon.restore();
    });
it('se a rota /teams/:id exibe um time, status 200', async () => {
  
sinon.stub(Model, 'findOne').resolves(mockMatches as unknown as Match)
resChaiHttp = await chai.request(app).get('/teams/4')
expect(resChaiHttp.status).to.be.deep.equal(200)
expect(resChaiHttp.body).to.be.deep.equal(timao)
})
})
//  it('Testar a rota post matches', async () => {
//    const res = await chai.request(app).post('/matches').send(Match);
//    expect(res.status).to.equal(201);
//    expect(res.body.homeTeamId).to.equal(Match.homeTeamId);
//    expect(res.body.awayTeamId).to.equal(Match.awayTeamId);
  

//  it('Checar todos rota matches', async () => {
  
//  });
//});
