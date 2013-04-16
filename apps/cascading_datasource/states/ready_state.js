CascadingDatasource.ReadyState = SC.State.extend({ 
  
  	enterState: function() 
  	{
		CascadingDatasource.itemArrayController.set( 'content', CascadingDatasource.store.find(CascadingDatasource.Item.itemQuery) );

    	CascadingDatasource.getPath('mainPage.mainPane').append();        
  	},

  	exitState: function() 
  	{
    	CascadingDatasource.getPath('mainPage.mainPane').remove();
  	}

});

