// ==========================================================================
// Project:   ScTechnique - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals ScTechnique */

sc_require( 'views/infoView.js' );
sc_require( 'views/folderDisplayView.js' );

// This page describes the main user interface for your application.  
ScTechnique.mainPage = SC.Page.design({

  	mainPane: SC.MainPane.design({
  	
    	childViews: 	[ 'navigation', 'display' ],
    
    	navigation:		SC.View.design({    	
    		layout:		{ width: 300 },
    		classNames:	[ 'navigation_style' ],
    		childViews:	[ 'info', 'folders' ],
    	
    		info:		SC.ButtonView.design({
    			layout:	{ height: 24 },
    			title:	'Another View'
    		}),
    	
    		folders:	SC.ListView.design({
    
    			layout:				{ top: 24 },
    			classNames:			[ 'folders_style' ],
    			rowHeight:			18,
    			selectionBinding:	'ScTechnique.itemArrayController.selection',
    			contentBinding:		'ScTechnique.itemArrayController.arrangedObjects',
    			action:				'actionFolderSelected',
    			actOnSelect:		true,
    			
				exampleView: 	SC.LabelView.design({
				
									valueBinding: 	'.content.folder',
				
								})
    		})    	
    	}),
    
    	/*
    	display: SC.LabelView.design({
    		layout: 	{ left: 300, height: 24, width: 300 },
    		value:		'hello'
    	})
    	*/
    	
    	display:	SC.ContainerView.design({
    		layout:		{ left: 300 },
    		classNames:	[ 'display_style' ],
    		
    		nowShowingBinding:	SC.Binding.oneWay( 'ScTechnique.displayView' ).transform( function( displayView ) {
    			return displayView;
    		}),

			//nowShowing:	'infoView',
			
    		infoView:			ScTechnique.InfoView,
    		folderDisplayView:	ScTechnique.FolderDisplayView
    	})
  	})
});