// ==========================================================================
// Project:   MyApp - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals MyApp */

sc_require( 'views/folder_item' );

// This page describes the main user interface for your application.  
MyApp.mainPage = SC.Page.design({

  	// The main pane is made visible on screen as soon as your app is loaded.
  	// Add childViews to this pane for views to display immediately on page 
  	// load.
  	mainPane: SC.MainPane.design(
  	{
    	childViews: 	[ 'navigation', 'display' ],
    
    	navigation:		SC.View.design({    	
    		layout:		{ width: 300 },
    		classNames:	[ 'navigation_style' ],
    		childViews:	[ 'info', 'folders' ],
    	
    		info:		SC.ButtonView.design({
    			layout:	{ height: 24 },
    			title:	'Info'
    		}),
    	
    		folders:	SC.ListView.design({
    			layout:				{ top: 24 },
    			classNames:			[ 'folders_style' ],
    			rowHeight:			18,
    			selectionBinding:	'MyApp.foldersController.selection',
    			contentBinding:		'MyApp.foldersController.arrangedObjects',
				exampleView: 	SC.LabelView.design(
					{
						valueBinding: 	'.content.name',
					})

    			//exampleView:		MyApp.FolderItemView,    			    			
    			//contentValueKey:	'name'
    		})    	
    	}),
    
    	display:	SC.View.design({
    		layout:		{ left: 300 },
    		classNames:	[ 'display_style' ]
    	})
  	})
});
