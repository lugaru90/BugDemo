Buchungen = new Mongo.Collection('buchungen');
Buchungen.attachSchema(new SimpleSchema({
  mieterId: {
    type: String,
    label: "Mieter"
  },
  zimmerId: {
    type: String,
    label: "Zimmer"
  },
  anreise: {
    type: Date,
    label: "Anreise",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
        }
    }
  },
  abreise: {
    type: Date,
    label: "Abreise",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
        }
    }
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

Buchungen.allow({
  remove: function(userId) { return true },
  update: function(userId) { return true },
  insert: function(userId) { return true },
});
