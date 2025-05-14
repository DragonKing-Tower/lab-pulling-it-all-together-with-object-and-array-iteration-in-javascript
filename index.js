function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

const arrayOfTeams = gameObject();

function numPointsScored(playerName) {
  // I did not realize that the goal was to just use the, method to dig into the objects
  function search(object, path = "") {
    for (const key in object) {
      const newPath = `${path}.${key}`;
      const value = object[key];
      if (typeof value === "object" && value !== null) {
        const found = search(value, newPath);
        if (found) return found;
      }
      if (key === playerName) {
        return value.points;
      }
    }

    return "No such player found";
  }

  return search(gameObject());
}

function shoeSize(playerName) {
  function search(object, path = "") {
    for (const key in object) {
      const newPath = `${path}.${key}`;
      const value = object[key];
      if (typeof value === "object" && value !== null) {
        const found = search(value, newPath);
        if (found) return found;
      }
      if (key === playerName) {
        return value.shoe;
      }
    }

    return "No such player found";
  }

  return search(gameObject());
}

function teamColors(teamName) {
  function search(object, path = "") {
    for (const key in object) {
      const newPath = `${path}.${key}`;
      const value = object[key];
      if (typeof value === "object" && value !== null) {
        const found = search(value, newPath);
        if (found) return found;
      }
      if (value.teamName === teamName) {
        return value.colors;
      }
    }

    return "No teamname found";
  }

  return search(gameObject());
}

function teamNames() {
  //here I realized
  return [arrayOfTeams.home.teamName, arrayOfTeams.away.teamName];
}

function playerNumbers(teamName) {
  const arrayOfNumbers = [];
  if (arrayOfTeams.home.teamName === teamName) {
    for (let player in arrayOfTeams.home.players) {
      arrayOfNumbers.push(arrayOfTeams.home.players[player].number);
    }
  } else if (arrayOfTeams.away.teamName === teamName) {
    for (let player in arrayOfTeams.away.players) {
      arrayOfNumbers.push(arrayOfTeams.away.players[player].number);
    }
  }else {
    return "No team of that name found"
  }
  return arrayOfNumbers;
}

function playerStats(playerName) {
  // on this one, I think that this was the easiest way given that I wrote it already
  function search(object, path = "") {
    for (const key in object) {
      const newPath = `${path}.${key}`;
      const value = object[key];
      if (typeof value === "object" && value !== null) {
        const found = search(value, newPath);
        if (found) return found;
      }
      if (key === playerName) {
        return value;
      }
    }

    return "No player found";
  }
  return search(gameObject());
}

function bigShoeRebounds() {
  // only method I could think of
  let biggestShoeSoFar = 0;
  let reboundsTracker = 0;
  function search(object) {
    for (const key in object) {
      const value = object[key];

      if (typeof value === "object" && value !== null) {
        search(value);
      }
      if (key === "shoe" && value > biggestShoeSoFar) {
        biggestShoeSoFar = value;
        reboundsTracker = object.rebounds;
      }
    }

    return reboundsTracker;
  }
  return search(gameObject());
}
