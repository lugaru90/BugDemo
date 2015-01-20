TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Mieter = new Tabular.Table({
  name: "Mieter",
  collection: Mieter,
  columns: [
    {data: "name", title: "Name"},
    {data: "vorname", title: "Vorname"},
    {data: "firma", title: "Firma"},
    {data: "telefon", title: "Telefon"},
    {data: "mail", title: "Email"},
    {tmpl: Meteor.isClient && Template.editCell}
  ]
});

TabularTables.Buchungen = new Tabular.Table({
  name: "Buchungen",
  collection: Buchungen,
  columns: [
    {data: "mieterId", title: "Mieter"},
    {data: "zimmerId", title: "Zimmer"},
    {data: "anreise", title: "Anreise"},
    {data: "anreise", title: "Abreise"},
    {tmpl: Meteor.isClient && Template.editCellBuchungen}
  ]
});