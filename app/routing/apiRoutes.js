var friendsArray = require("./../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body,
            difference = [],
            differenceSum,
            yourMatch;

        function getSum(total, num) {
            return total + num;
        }

        for (var i = 0; i < friendsArray.length; i++) {
            for (var j = 0; j < friendsArray[i].scores.length; j++) {
                difference.push(Math.abs(newFriend.scores[j] - friendsArray[i].scores[j]))
            }
            differenceSum = difference.reduce(getSum);
            friendsArray[i].diffSum = differenceSum
            difference = [];
        }

        var lowest = Number.POSITIVE_INFINITY;
        var highest = Number.NEGATIVE_INFINITY;
        var tmp;

        for (var k = friendsArray.length - 1; k >= 0; k--) {
            tmp = friendsArray[k].diffSum;
            if (tmp < lowest) {
                yourMatch = friendsArray[k];
                lowest = tmp;
            }

            if (tmp > highest) highest = tmp;
        }

        res.json(yourMatch);
        friendsArray.push(req.body);
    })
}