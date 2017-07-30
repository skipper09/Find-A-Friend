var friendsArray = require("./../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var yourMatch;
        var difference = [];

        // friendsData.push(req.body);

        //compare with each friends data

        for (var i=0; i<friendsArray.length; i++) {
            for (var j=0;j<friendsArray[i].scores.length; j++) {
                difference.push(Math.abs(newFriend.scores[j] - friendsArray[i].scores[j]))
            }




        }

        res.json(difference);

        // find friend with least difference

        //modal pop up with dude


    })
}

