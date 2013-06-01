// ==========================================================================
// Project:   PrintingTemplate - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals PrintingTemplate */

// This page describes the main user interface for your application.  
PrintingTemplate.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: [ 'printButton', 'titleView', 'bodyContent' ],
    
    printButton:    SC.ButtonView.extend({
                        layout: { height: 24, width: 100 },
                        title:  'Print',
                        action: 'actionPrint'
                    }),
                    
    titleView: SC.LabelView.design({
                  layout: { top: 30, height: 24 },
                  tagName: "h1", 
                  valueBinding: 'PrintingTemplate.titleContent',
                }),
    
    bodyContent:    SC.StaticContentView.extend({
                        layout:         { top: 60 },
                        contentBinding: 'PrintingTemplate.bodyContent'
                    })
  })

});
