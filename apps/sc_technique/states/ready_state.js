ScTechnique.ReadyState = SC.State.extend({ 
  
 	enterState: function() 
  	{
  		//ScTechnique.itemArrayController.set( 'content', ScTechnique.store.find( SC.Query.local( ScTechnique.Item, { orderBy: 'timestamp DESC' } ) ) );

		ScTechnique.itemController.set( 'content', ScTechnique.Item.create( { folder: "another folder", files: ["filename2.js"] } ) );
		
		//ScTechnique.itemArrayController.set( 'content', [{ folder: "my really cool folder", files: ["filename1.js"] }] );
		
		//ScTechnique.itemController.contentBinding.connect();
		
    	ScTechnique.getPath('mainPage.mainPane').append();
  	},

  	exitState: function() 
  	{
    	ScTechnique.getPath('mainPage.mainPane').remove();
  	},

  	actionButtonPressed: function() 
  	{
    	console.log( 'action button pressed' );
    	console.log( ScTechnique.itemController.get( 'folder' ) );
  	}

});

