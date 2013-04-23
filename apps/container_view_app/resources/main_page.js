// ==========================================================================
// Project:   ContainerViewApp - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals ContainerViewApp */

// This page describes the main user interface for your application.  
ContainerViewApp.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
  
    childViews: [ 'container' ],
    
    container:  SC.ContainerView.design({
  
      layout:   { left: 300 },    
      nowShowing: 'secondview',
    
      firstview:    SC.View.extend({

                      childViews: ['firstLabel'],            
                      firstLabel: SC.LabelView.extend({
                
                                    layout: { height: 24, borderLeft: 20 },
                  
                                    value:  'some information'
                      
                                  })
      
                    }),
                    
      secondview:    SC.View.extend({

                      childViews: ['firstLabel'],            
                      firstLabel: SC.LabelView.extend({
                
                                    layout: { height: 24, borderLeft: 20 },
                  
                                    value:  'some other information'
                      
                                  })
      
                    })                    
    })
  })
});