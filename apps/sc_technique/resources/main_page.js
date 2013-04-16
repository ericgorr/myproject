// ==========================================================================
// Project:   ScTechnique - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals ScTechnique */

// This page describes the main user interface for your application.  
ScTechnique.mainPage = SC.Page.design(
{
  	mainPane: SC.MainPane.design(
  	{
    	childViews: [ 'nameView', 'phView' ],
    
    	nameView: SC.LabelView.design({
      		layout: 		{ width: 200, height: 18 },
      		value:			'name view'
      		//valueBinding: 	SC.Binding.oneWay( 'CascadingDatasource.itemController.name' )
    	}),

    	phView: SC.LabelView.design({
      		layout: 		{ top: 20, width: 200, height: 18 },
      		value:			'ph view'
      		//valueBinding: 	SC.Binding.oneWay( 'CascadingDatasource.itemController.ph' )
    	})
  	})
});
