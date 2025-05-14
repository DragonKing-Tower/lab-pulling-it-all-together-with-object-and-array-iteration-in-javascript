require("jsdom-global")();

describe("Basketball Stats", function () {
  describe("numPointsScored", function () {
    it("should return points scored by a player", function () {
      expect(numPointsScored("Alan Anderson")).to.equal(22);
      expect(numPointsScored("Ben Gordon")).to.equal(33);
    });
  });

  describe("shoeSize", function () {
    it("should return shoe size of a player", function () {
      expect(shoeSize("Alan Anderson")).to.equal(16);
      expect(shoeSize("Ben Gordon")).to.equal(15);
    });
  });

  describe("teamColors", function () {
    it("should return team colors", function () {
      expect(teamColors("Brooklyn Nets")).to.deep.equal(["Black", "White"]);
      expect(teamColors("Charlotte Hornets")).to.deep.equal([
        "Turquoise",
        "Purple",
      ]);
    });
  });

  describe("teamNames", function () {
    it("should return team names", function () {
      expect(teamNames()).to.deep.equal(["Brooklyn Nets", "Charlotte Hornets"]);
    });
  });

  describe("playerNumbers", function () {
    it("should return player numbers of a team", function () {
      expect(playerNumbers("Brooklyn Nets")).to.deep.equal([0, 30, 11, 1, 31]);
      expect(playerNumbers("Charlotte Hornets")).to.deep.equal([
        4, 0, 2, 8, 33,
      ]);
    });
  });

  describe("playerStats", function () {
    it("should return stats of a player", function () {
      expect(playerStats("Alan Anderson")).to.deep.equal({
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      });

      expect(playerStats("Ben Gordon")).to.deep.equal({
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
      });
    });
  });

  describe("bigShoeRebounds", function () {
    it("should return number of rebounds for the player with the biggest shoe", function () {
      expect(bigShoeRebounds()).to.equal(12);
    });
  });
});
