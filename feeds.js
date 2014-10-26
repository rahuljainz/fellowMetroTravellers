var feeds = [];

exports.findAll = function(req, res, next) {
  var name = req.query.name;	
	if (name) {
    console.log("Filtering by: " + name);
      res.send(feeds.filter(function(feed) {
          return (feed.location + ' ' + feed.problem ).toLowerCase().indexOf(name.toLowerCase()) > -1;
      }));
  } else {
    console.log("Total feeds found: " + feeds.length);
    res.send(feeds);
  }
};

exports.findByID = function(req, res, next) {

};

exports.addNew = function(req, res, next) {
	var feed = {};
	console.log("Create feed body: " + JSON.stringify(req.body));
	feed.location = req.body.location,
	feed.problem = req.body.problem,
	feed.description = req.body.description;
	var now = new Date();
	feed.creationTime = now.toJSON();
	res.sendStatus(200);
	addFeed(feed);
};

//Add signup form data to database.
var addFeed = function(feed) {
	feeds.push(feed);
  /*var formData = {
    TableName: config.STARTUP_SIGNUP_TABLE,
    Item: {
      email: {'S': emailSubmitted}, 
      name: {'S': nameSubmitted},
      preview: {'S': previewPreference}
    }
  };
  db.putItem(formData, function(err, data) {
    if (err) {
      console.log('Error adding item to database: ', err);
    } else {
      console.log('Form data added to database.'); 
    }
  });*/
};


exports.update = function(req, res, next) {

};

exports.delete = function(req, res, next) {

};