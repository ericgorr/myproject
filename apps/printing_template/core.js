// ==========================================================================
// Project:   PrintingTemplate
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals PrintingTemplate */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
PrintingTemplate = SC.Application.create(
  /** @scope PrintingTemplate.prototype */ {

  NAMESPACE: 'PrintingTemplate',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
    store: SC.Store.create().from(SC.Record.fixtures),
  
  // TODO: Add global constants or singleton objects needed by your app here.

    titleContent:   'This is some title content',
    
    bodyContent:    '<html><table border="1"><tr><td>row 1, cell 1</td><td>row 1, cell 2</td></tr><tr><td>row 2, cell 1</td><td>row 2, cell 2</td></tr></table></html>',            
});
