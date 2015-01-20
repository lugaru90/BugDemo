Template.mieterPage.events({
	'click .delete': function(e) {
		e.preventDefault();

		if (confirm("Delete this post?")) {
		  var currentId = this._id;
		  Mieter.remove(currentId);
		  Router.go('mieterList');
		}
	}
});