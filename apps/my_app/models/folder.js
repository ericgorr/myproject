MyApp.Folder = SC.Record.extend({
	primaryKey:		'id',
	name:			SC.Record.attr( String, { isRequired: YES, defaultValue: 'the name' } )
});