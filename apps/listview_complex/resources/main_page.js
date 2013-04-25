// ==========================================================================
// Project:   ListviewComplex - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals ListviewComplex */

// This page describes the main user interface for your application.  
ListviewComplex.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: [ 'thelist' ],
    
    thelist: SC.ListView.design({
    
        layout:             { width: 300 },
        rowHeight:          120,
		selectionBinding:	'ListviewComplex.itemArrayController.selection',
		contentBinding:		'ListviewComplex.itemArrayController.arrangedObjects',
		action:             'actionItemSelected',
		actOnSelect:        true,

		exampleView: 	SC.View.design({
		
		                    childViews:  [ 'propertyA', 'propertyB', 'propertyC' ],
		                    
		                    propertyA:  SC.LabelView.design({
		                                    layout:         { top: 0, left: 0, width: 300, height: 18 },
		                                    valueBinding:   SC.Binding.oneWay( '.parentView.content.propertyA' )
		                                }),

		                    propertyB:  SC.LabelView.design({
		                                    layout:         { top: 18, left: 0, width: 300, height: 18 },
		                                    valueBinding:   SC.Binding.oneWay( '.parentView.content.propertyB' )
		                                }),

		                    propertyC:  SC.LabelView.design({
		                                    layout:         { top: 36, left: 0, width: 300, height: 18 },
		                                    valueBinding:   SC.Binding.oneWay( '.parentView.content.propertyC' )
		                                }),
		                    
						})
		
// 		exampleView: 	SC.LabelView.design({
// 		
// 		                    valueBinding:   SC.Binding.oneWay( '.content.propertyA' )
// 		                    
// 						})
    })
  })
});
