Mieter = new Mongo.Collection('mieter');
Mieter.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  vorname: {
    type: String,
    label: "Vorname",
    optional: true
  },
  firma: {
    type: String,
    label: "Firma",
    min: 0
  },
  telefon: {
    type: String,
    label: "Telefon",
    optional: true
  },
  mail: {
    type: String,
    label: "Mail",
    optional: true
  },
  createdAt: {
    type: Date,
	autoValue: function() {
		if (this.isInsert) {
		  return new Date;
		} else if (this.isUpsert) {
		  return {$setOnInsert: new Date};
		} else {
		  this.unset();
		}
	},
	denyUpdate: true,
    optional: true
  },
  updatedAt: {
  	label: "Update",
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
}));



Mieter.allow({
  remove: function(userId) { return true },
  update: function(userId) { return true },
  insert: function(userId) { return true },
});
Meteor.methods({
  mieterInsert: function(mieterAttributes){
		check(Meteor.userId(), String);
		check(mieterAttributes, {
			name: String,
			vorname: String,
			mail: String,
			telefon: String,
			firma: String,
		});

		var errors = validateMieter(mieterAttributes);
	    if (errors.name)
	      throw new Meteor.Error('invalid-post', "Bitte füllen Sie die erforderlichen Felder aus!");

		var user = Meteor.user();
		var data = _.extend(mieterAttributes, {
		  creatorId: user._id,
		  date: new Date()
		});
		var dataId = Mieter.insert(data);
		return {
		  _id: dataId
		};
	},
	mieterUpdate: function(id, mieterAttributes){
		check(Meteor.userId(), String);
		check(mieterAttributes, {
			name: String
		});
		var errors = validateMieter(mieterAttributes);
	    if (errors.name)
	      throw new Meteor.Error('invalid-post', "You must set a Name for your Mieter");

		var user = Meteor.user();
		var data = _.extend(mieterAttributes, {
		  updateDate: new Date()
		});
		Mieter.update(id, {$set: data});
		return {
		  _id: id
		};
	}
});

validateMieter = function (mieter) {
  var errors = {};
  if (!mieter.name && !mieter.firma){
    errors.name = "Bitte geben Sie entweder einen Namen oder die Firma an!";
    errors.firma = "Bitte geben Sie entweder einen Namen oder die Firma an!";
   }
  return errors;
}
