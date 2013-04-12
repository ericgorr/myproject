MyApp.ReadyState = SC.State.extend({ 
  
  enterState: function() 
  {
  
	MyApp.foldersController.set( 'content',
  	 							 MyApp.store.find( SC.Query.local( MyApp.Folder, { orderBy: 'timestamp DESC' } ) ) );

  	MyApp.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    MyApp.getPath('mainPage.mainPane').remove();
  }

});

