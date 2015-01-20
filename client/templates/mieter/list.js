Template.editCell.events({
  'click .delete': function(e) {
		e.preventDefault();

		if (confirm("Delete this post?")) {
		  var currentId = this._id;
		  Mieter.remove(currentId);
		  Router.go('mieterList');
		}
	}
});
// http://datatables.net/examples/advanced_init/defaults.html
$.extend($.fn.dataTable.defaults, {
    language: {
        sEmptyTable: 'Keine Daten in der Tabelle vorhanden',
        sInfo: '_START_ bis _END_ von _TOTAL_ Einträgen',
        sInfoEmpty: '0 bis 0 von 0 Einträgen',
        sInfoFiltered: '(gefiltert von _MAX_ Einträgen)',
        sInfoPostFix: '',
        sInfoThousands: '.',
        sLengthMenu: '_MENU_ Einträge anzeigen',
        sLoadingRecords: 'Wird geladen...',
        sProcessing: 'Bitte warten...',
        sSearch: 'Suchen',
        sZeroRecords: 'Keine Einträge vorhanden.',
        oPaginate: {
            sFirst: 'Erste',
            sPrevious: 'Zurück',
            sNext: 'Nächste',
            sLast: 'Letzte'
        },
        oAria: {
            sSortAscending: ': aktivieren, um Spalte aufsteigend zu sortieren',
            sSortDescending: ': aktivieren, um Spalte absteigend zu sortieren'
        }
    },
});