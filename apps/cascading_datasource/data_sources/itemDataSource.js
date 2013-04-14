sc_require( 'models/item_model' );

CascadingDatasource.itemDataSource = SC.DataSource.create(
{
	fetch: function( store, query ) 
	{
		var handled 	= false,
			itemRecord;
	
		if ( query.recordType === CascadingDatasource.Item && query.targetDataSource === 'itemDataSource') 
		{		
			CascadingDatasource.store.loadRecord( CascadingDatasource.Item, {
				name:	'the name',
				ph:		'the phone number'
			});	

			var theRecords = CascadingDatasource.store.recordsFor( CascadingDatasource.Item );
			
	 	 	// Indicate that we took this request.
	  		handled = true;
		}
		
		return handled;
	}
});
