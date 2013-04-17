sc_require( 'models/item_model' );

CascadingDatasource.itemDataSource = SC.DataSource.create(
{
	fetch: function( store, query ) 
	{
		var handled 	= false,
			itemRecord;
	
		if ( query.recordType === CascadingDatasource.Item && query.targetDataSource === 'itemDataSource') 
		{		
			var storeKey = CascadingDatasource.store.loadRecord( CascadingDatasource.Item, {
				name:	'the name aaa',
				ph:		'the phone number'
			});	

			store.loadQueryResults( query, [storeKey] );
			
	 	 	// Indicate that we took this request.
	  		handled = true;
		}
		
		return handled;
	}
});
