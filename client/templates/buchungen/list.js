Template.editCellBuchungen.events({
  'click .delete': function(e) {
		e.preventDefault();

		if (confirm("Delete this post?")) {
		  var currentId = this._id;
		  Buchungen.remove(currentId);
		  Router.go('buchungenList');
		}
	}
});