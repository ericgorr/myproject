CascadingDatasource.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    CascadingDatasource.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    CascadingDatasource.getPath('mainPage.mainPane').remove();
  }

});

