// Function that returns the game object with all data
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
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
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
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Function 1: Returns the number of points scored by a player
  function numPointsScored(playerName) {
    const game = gameObject();
    
    // Look in home team
    for (let player in game.home.players) {
      if (player === playerName) {
        return game.home.players[player].points;
      }
    }
    
    // Look in away team
    for (let player in game.away.players) {
      if (player === playerName) {
        return game.away.players[player].points;
      }
    }
    
    return "Player not found";
  }
  
  // Function 2: Returns the shoe size of a player
  function shoeSize(playerName) {
    const game = gameObject();
    
    // Look in home team
    for (let player in game.home.players) {
      if (player === playerName) {
        return game.home.players[player].shoe;
      }
    }
    
    // Look in away team
    for (let player in game.away.players) {
      if (player === playerName) {
        return game.away.players[player].shoe;
      }
    }
    
    return "Player not found";
  }
  
  // Function 3: Returns an array of a team's colors
  function teamColors(teamName) {
    const game = gameObject();
    
    if (game.home.teamName === teamName) {
      return game.home.colors;
    }
    
    if (game.away.teamName === teamName) {
      return game.away.colors;
    }
    
    return "Team not found";
  }
  
  // Function 4: Returns an array of team names
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function 5: Returns an array of player numbers for a team
  function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    
    if (game.home.teamName === teamName) {
      for (let player in game.home.players) {
        numbers.push(game.home.players[player].number);
      }
      return numbers;
    }
    
    if (game.away.teamName === teamName) {
      for (let player in game.away.players) {
        numbers.push(game.away.players[player].number);
      }
      return numbers;
    }
    
    return "Team not found";
  }
  
  // Function 6: Returns a player's stats object
  function playerStats(playerName) {
    const game = gameObject();
    
    // Look in home team
    for (let player in game.home.players) {
      if (player === playerName) {
        return game.home.players[player];
      }
    }
    
    // Look in away team
    for (let player in game.away.players) {
      if (player === playerName) {
        return game.away.players[player];
      }
    }
    
    return "Player not found";
  }
  
  // Function 7: Returns rebounds of the player with largest shoe size
  function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = 0;
    let playerWithBiggestShoe = null;
    
    // Check home team players
    for (let player in game.home.players) {
      if (game.home.players[player].shoe > biggestShoe) {
        biggestShoe = game.home.players[player].shoe;
        playerWithBiggestShoe = game.home.players[player];
      }
    }
    
    // Check away team players
    for (let player in game.away.players) {
      if (game.away.players[player].shoe > biggestShoe) {
        biggestShoe = game.away.players[player].shoe;
        playerWithBiggestShoe = game.away.players[player];
      }
    }
    
    return playerWithBiggestShoe.rebounds;
  }
  
  // Bonus Function 1: Returns the player who scored the most points
  function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = "";
    
    // Check home team
    for (let player in game.home.players) {
      if (game.home.players[player].points > mostPoints) {
        mostPoints = game.home.players[player].points;
        playerWithMostPoints = player;
      }
    }
    
    // Check away team
    for (let player in game.away.players) {
      if (game.away.players[player].points > mostPoints) {
        mostPoints = game.away.players[player].points;
        playerWithMostPoints = player;
      }
    }
    
    return playerWithMostPoints;
  }
  
  // Bonus Function 2: Returns the team that has the most points
  function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    
    // Sum home team points
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    
    // Sum away team points
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    
    if (homePoints > awayPoints) {
      return game.home.teamName;
    } else if (awayPoints > homePoints) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  }
  
  // Bonus Function 3: Returns the player with the longest name
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    
    // Check home team
    for (let player in game.home.players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
    
    // Check away team
    for (let player in game.away.players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
    
    return longestName;
  }
  
  // Super Bonus: Returns true if the player with the longest name had the most steals
  function doesLongNameStealATon() {
    const game = gameObject();
    const playerWithLongestNameValue = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = "";
    
    // Find player with most steals
    // Check home team
    for (let player in game.home.players) {
      if (game.home.players[player].steals > mostSteals) {
        mostSteals = game.home.players[player].steals;
        playerWithMostSteals = player;
      }
    }
    
    // Check away team
    for (let player in game.away.players) {
      if (game.away.players[player].steals > mostSteals) {
        mostSteals = game.away.players[player].steals;
        playerWithMostSteals = player;
      }
    }
    
    // Compare
    return playerWithLongestNameValue === playerWithMostSteals;
  }
  
  // Debugging examples
  console.log("Game Object:", gameObject());
  console.log("Points scored by Brook Lopez:", numPointsScored("Brook Lopez"));
  console.log("Shoe size of Ben Gordon:", shoeSize("Ben Gordon"));
  console.log("Brooklyn Nets colors:", teamColors("Brooklyn Nets"));
  console.log("Team names:", teamNames());
  console.log("Player numbers for Charlotte Hornets:", playerNumbers("Charlotte Hornets"));
  console.log("Stats for Mason Plumlee:", playerStats("Mason Plumlee"));
  console.log("Rebounds of player with biggest shoe size:", bigShoeRebounds());
  console.log("Player with most points:", mostPointsScored());
  console.log("Winning team:", winningTeam());
  console.log("Player with longest name:", playerWithLongestName());
  console.log("Does player with longest name have most steals?", doesLongNameStealATon());