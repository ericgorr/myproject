ListviewComplex.ReadyState = SC.State.extend({ 
  
  enterState: function() {
  
    
 	ListviewComplex.itemArrayController.set( 'content',
  	 							             ListviewComplex.store.find( SC.Query.local( ListviewComplex.Item, { orderBy: 'timestamp DESC' } ) ) );
 
    ListviewComplex.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    ListviewComplex.getPath('mainPage.mainPane').remove();
  },
  
  actionItemSelected: function() {
    console.log( 'actionItemSelected' );
  }

});

