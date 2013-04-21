ScTechnique.folderArrayController = SC.ArrayController.create({
	contentBinding:	SC.Binding.oneWay( 'ScTechnique.itemController.content' ).transform( function( content )
					{
						return ScTechnique.itemController.get( 'files' );
					}),
    		
});

ScTechnique.folderController = SC.ObjectController.create({
	contentBinding: SC.Binding.oneWay( 'ScTechnique.folderArrayController.selection' )
});

