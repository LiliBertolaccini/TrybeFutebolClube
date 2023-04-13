import { ITeamMatch, ILeaderboard } from '../../intefaces/ILeaderboard';

const homeTotalPoints = (matches: ITeamMatch[]) => {
  let total = 0;
  matches.forEach((jogo) => {
    if (jogo.homeTeamGoals > jogo.awayTeamGoals) {
      total += 3;
    } else if (jogo.homeTeamGoals === jogo.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const homeTotalVictories = (matches: ITeamMatch[]) => {
  let total = 0;
  matches.forEach((jogo) => {
    if (jogo.homeTeamGoals > jogo.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const homeTotalDraws = (matches: ITeamMatch[]) => {
  let total = 0;
  matches.forEach((jogo) => {
    if (jogo.homeTeamGoals === jogo.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const homeTotalLosses = (matches: ITeamMatch[]) => {
  let total = 0;
  matches.forEach((jogo) => {
    if (jogo.homeTeamGoals < jogo.awayTeamGoals) {
      total += 1;
    }
  });
  return total;
};

const homeEfficiency = (matches: ITeamMatch[]) => (((homeTotalPoints(matches)) / (matches
  .length * 3)) * 100).toFixed(2);

const homeMatches = (matches: ITeamMatch[]) => {
  let casa = 0;
  let visitante = 0;
  const homePoints = matches.map((jogo) => {
    const home = {
      name: jogo.homeTeam.teamName,
      totalPoints: homeTotalPoints(matches),
      totalGames: matches.length,
      totalVictories: homeTotalVictories(matches),
      totalDraws: homeTotalDraws(matches),
      totalLosses: homeTotalLosses(matches),
      goalsFavor: casa += jogo.homeTeamGoals,
      goalsOwn: visitante += jogo.awayTeamGoals,
      goalsBalance: casa - visitante,
      efficiency: homeEfficiency(matches),
    };
    return home;
  });
  return homePoints;
};

const homeService = (matches: ITeamMatch[]) => {
  let homeTeam: ILeaderboard[] = [];
  for (let i = 1; i <= 16; i += 1) {
    const match = matches.filter((jogo) => jogo.homeTeamId === i);
    const home = homeMatches(match);
    homeTeam = [...homeTeam, home[home.length - 1]];
  }
  return homeTeam;
};

export default homeService;
