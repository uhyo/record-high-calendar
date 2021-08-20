export type Ranking = Map<
  string,
  Map<
    string,
    {
      thenRank: number;
      currentRank: number;
    }
  >
>;
