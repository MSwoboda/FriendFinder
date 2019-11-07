var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {

        res.json(friendData);

    });

    app.post("/api/friends", function (req, res) {


        const arrSum = arr => arr.reduce((a,b) => a + b, 0)

        let bestFriend = 0; 
        var bestScore = 100000;//large
        let userScores = req.body.scores;

        for (let index = 0; index < friendData.length; index++) {
            let scores = friendData[index].scores
            var x = [];

          for(var i = 0;i<=userScores.length-1;i++)
          x.push(Math.abs(scores[i] - userScores[i]));

          if (bestScore > arrSum(x)) {
            bestScore = arrSum(x);
            bestFriend = index;
          }
        }

        res.json({name: friendData[bestFriend].name, img:friendData[bestFriend].photo});

    });



};
