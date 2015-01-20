Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [Meteor.subscribe('notifications')]
  }
});


Router.route('/',                   {name: 'home'});

//Mieter Routes
Router.route('/mieter/create',      {name: 'mieterCreate'});

Router.route('/mieter/edit/:_id',   {name: 'mieterEdit',
  waitOn: function() {
    return [
      Meteor.subscribe('mieterPage', this.params._id)
    ];
  },
  data: function() { return Mieter.findOne(this.params._id); }
});

Router.route('/mieter/:_id',        {name: 'mieterPage',
  waitOn: function() {
    return [
      Meteor.subscribe('mieterPage', this.params._id)
    ];
  },
  data: function() { return Mieter.findOne(this.params._id); }
});

Router.route('/mieter/',            {name: 'mieterList',
  waitOn: function() {
    return [Meteor.subscribe('mieterAll')];
  }
});

//Buchungen Routes
//Router.route('/buchungen/create',      {name: 'buchungenCreate'});
Router.route('/buchungen/create',            {name: 'buchungenCreate',
  waitOn: function() {
    return [Meteor.subscribe('mieterAll')];
 }
});

Router.route('/buchungen/',            {name: 'buchungenList',
  waitOn: function() {
    return [Meteor.subscribe('buchungenAll')];
  }
});


var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

//Router.onBeforeAction(requireLogin, {only: 'play'});
