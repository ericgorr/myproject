ScTechnique.FolderDisplayView = SC.View.extend({

	childViews:	[ 'foldersscroller', 'file' ],
	
	foldersscroller:    SC.ScrollView.extend({

		                    layout:			{ width: 300 },
                            contentView:    SC.ListView.design({
                                                rowHeight:			18,
                                                selectionBinding:	'ScTechnique.folderArrayController.selection',
                                                contentBinding:		'ScTechnique.folderArrayController.arrangedObjects',
                                                action:				'actionFileSelected',
                                                actOnSelect:		true,
                                                
                                                exampleView: 	SC.LabelView.design({
                                                
                                                                    valueBinding:	SC.Binding.oneWay( '.content' ).transform( function( content ) {	
                                        
                                                                        return content.thename;
                                        
                                                                    })
                                                                })
                                            }),
                        }),
	                    
	
	file:	SC.TextFieldView.design({
		isTextArea: true,
    	layout: 		{ left: 300 },
    	valueBinding:	SC.Binding.oneWay( 'ScTechnique.fileContent' )
	})
});

