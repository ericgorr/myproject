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
    selectionBinding:   'ListviewComplex.itemArrayController.selection',
    contentBinding:     'ListviewComplex.itemArrayController.arrangedObjects',
    action:             'actionItemSelected',
    actOnSelect:        true,

    exampleView:    ListviewComplex.ListViewCell
    
//    exampleView:  SC.LabelView.design({
//    
//                        valueBinding:   SC.Binding.oneWay( '.content.propertyA' )
//                        
//            })
    })
  })
});
