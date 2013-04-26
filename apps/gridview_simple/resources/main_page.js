// ==========================================================================
// Project:   GridviewSimple - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals GridviewSimple */

// This page describes the main user interface for your application.  
GridviewSimple.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: [ 'thegrid' ],
    
    thegrid: SC.GridView.design({
    
      layout:         { height: 200 },
      columnWidth:    120,
      rowHeight:      58,
      contentBinding: SC.Binding.oneWay('GridviewSimple.gridItems')
    })
  })

});
