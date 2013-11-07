if (Meteor.isServer) {
  Meteor.startup(function () {
  	Meteor.setInterval(function() {
  		if (moment().startOf('day').diff(moment()) > -3000) {
  			Meteor.users.find().forEach(function(user) {
  				Meteor.users.update(user._id, {$set: {'profile.data.yesterday': user.profile.data.today}});
  				Meteor.users.update(user._id, {$set: {'profile.data.today': ''}});
  			});
  		}
  	}, 3000);
  });
}