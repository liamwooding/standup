Template.todayText.events({
  'keyup #today' : function (event) {
    var todayText = ($('#today textarea').val());
    Meteor.users.update(Meteor.user()._id, {$set: {'profile.data.today': todayText}});
  }    
});

Template.yesterdayText.events({
  'keyup #yesterday' : function (event) {
    var yesterdayText = ($('#yesterday textarea').val());
    Meteor.users.update(Meteor.user()._id, {$set: {'profile.data.yesterday': yesterdayText}});
  }    
});

Handlebars.registerHelper('user', function() {
  return Meteor.user();
})

Handlebars.registerHelper('theDate', function() {
  return moment().format('MMMM Do YYYY');
})

Template.team.users = function () {
  return Meteor.users.find();
};