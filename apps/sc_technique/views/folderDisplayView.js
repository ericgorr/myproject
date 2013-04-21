ScTechnique.FolderDisplayView = SC.View.extend({

	childViews:	[ 'folders', 'file' ],
	
	folders:	SC.ListView.design({
		layout:				{ width: 300 },
		rowHeight:			18,
		selectionBinding:	'ScTechnique.folderArrayController.selection',
		contentBinding:		'ScTechnique.folderArrayController.arrangedObjects',
		action:				'actionFileSelected',
		actOnSelect:		true,
		
		exampleView: 	SC.LabelView.design(
						{
							valueBinding:	SC.Binding.oneWay( '.content' ).transform( function( content )
							{	
								return content.thename;
							})
						})
	}),
	
	file:	SC.TextFieldView.design({
		isTextArea: true,
    	layout: 		{ left: 300 },
    	valueBinding:	SC.Binding.oneWay( 'ScTechnique.fileContent' )
	})
});

