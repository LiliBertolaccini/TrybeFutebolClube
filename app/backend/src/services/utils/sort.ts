import { ILeaderboard } from '../../intefaces/ILeaderboard';

const oredenaMatches = (teams: ILeaderboard[]) => teams.sort((b, a) => {
  if (a.totalPoints === b.totalPoints) {
    if (a.goalsBalance === b.goalsBalance) {
      return a.goalsFavor - b.goalsFavor;
    } return a.goalsBalance - b.goalsBalance;
  }
  return a.totalPoints - b.totalPoints;
});

export default oredenaMatches;
