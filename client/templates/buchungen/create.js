AutoForm.addHooks(['insertBuchungenForm'], {
  after: {
    insert: function(error, result) {
      if (!error) {
        Router.go('mieterPage', {_id: result});
      }
    },
  }
});

Template.buchungenCreate.helpers({
  settings: function() {
    return {
     position: "top",
     limit: 5,
     rules: [
       {
         token: '',
         collection: "Mieter",
         field: "name",
         subscription: "mieterSearch",
         template: Template.buchungSmall,
         callback: function(item) {
            document.getElementById("mieterId").value = item._id;
          }
       }
     ]
    }
  }
});
