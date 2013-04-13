// ==========================================================================
// Project:   CascadingDatasource - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals CascadingDatasource */

// This page describes the main user interface for your application.  
CascadingDatasource.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  	mainPane: SC.MainPane.design({
    	childViews: [ 'nameView', 'phView' ],
    
    	nameView: SC.LabelView.design({
      		layout: 		{ width: 200, height: 18 },
      		valueBinding: 	SC.Binding.oneWay('CascadingDatasource.itemController.name')
    	}),

    	phView: SC.LabelView.design({
      		layout: 		{ top: 20, width: 200, height: 18 },
      		valueBinding: 	SC.Binding.oneWay('CascadingDatasource.itemController.ph')
    	})
  	})
});
