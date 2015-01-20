AutoForm.addHooks(['insertMieterForm'], {
  after: {
    insert: function(error, result) {
      if (!error) {
        Router.go('mieterPage', {_id: result});
      }
    },
  }
});

