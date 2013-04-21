ScTechnique.ReadyState = SC.State.extend({ 
  
 	enterState: function() 
  	{
  		ScTechnique.itemArrayController.set( 'content', ScTechnique.store.find( SC.Query.local( ScTechnique.Item, { orderBy: 'timestamp DESC' } ) ) );
		
		ScTechnique.itemArrayController.selectObject( ScTechnique.itemArrayController.firstSelectableObject() );
		
    	ScTechnique.getPath('mainPage.mainPane').append();
  	},

  	exitState: function() 
  	{
    	ScTechnique.getPath('mainPage.mainPane').remove();
  	},

  	actionFolderSelected: function() 
  	{
    	console.log( 'actionFolderSelected pressed' );
    	console.log( ScTechnique.itemController.get( 'folder' ) );
  	},

  	actionFileSelected: function() 
  	{
    	console.log( 'actionFileSelected pressed' );
    	
    	var filenamePath 		= sc_static( 'helper.jsonp' );
    	var filenameComponents	= filenamePath.split( '/' );
    	var nComponents			= filenameComponents.length;
    	
    	filenameComponents[ nComponents - 1 ] = ScTechnique.folderController.get( 'thename' );
    	
    	filenamePath = filenameComponents.join( '/' );
    	    	    	    	
		var script = document.createElement('script');						
		
		script.type = 'text/javascript';
		script.src	= filenamePath;

		this.script = script;
		
		var bodyElement = (document.getElementsByTagName( 'body' ))[0];
					
		bodyElement.appendChild( script );			
  	},
	
	loadFile: function( data ) 
	{
		if ( !data ) throw "False data";
		
		var bodyElement = (document.getElementsByTagName( 'body' ))[0];
		
		bodyElement.removeChild( this.script );
								
		this.script = null; // prevent leak
		
		ScTechnique.set( 'fileContent', data.fileContent );
	}
});

