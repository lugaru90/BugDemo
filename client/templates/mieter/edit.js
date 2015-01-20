AutoForm.addHooks(['updateMieterForm'], {
  after: {
    update: function(error, result, id) {
      if (!error) {
        console.log(id);
        Router.go('mieterPage', {_id: Router.current().params._id});
      }
    },
  }
});

