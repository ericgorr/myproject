MyApp.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    MyApp.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    MyApp.getPath('mainPage.mainPane').remove();
  }

});

