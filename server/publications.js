Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish('emailsAll', function() {
  return Emails.find();
});

Meteor.publish('buchungenAll', function() {
  return Buchungen.find();
});

Meteor.publish('mieterAll', function() {
  return Mieter.find();
});

Meteor.publish('mieterPage', function(id) {
  check(id, String);
  return Mieter.find(id);
});


Meteor.publish('mieterSearch', function(selector, options) {
  var collection, handle, sub;
  console.log('Subscribing to Mieter');
  collection = Mieter;
  sub = this;
  if (options.limit) {
    options.limit = Math.min(50, Math.abs(options.limit));
  }
  console.log("SELECTOR " + selector);
  handle = collection.find(selector, options).observeChanges({
    added: function(id, fields) {
      return sub.added("autocompleteRecords", id, fields);
    },
    changed: function(id, fields) {
      return sub.changed("autocompleteRecords", id, fields);
    },
    removed: function(id) {
      return sub.removed("autocompleteRecords", id);
    }
  });
  sub.ready();
  return sub.onStop(function() {
    return handle.stop();
  });
});
