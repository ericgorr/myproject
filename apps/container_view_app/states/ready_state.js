ContainerViewApp.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    ContainerViewApp.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    ContainerViewApp.getPath('mainPage.mainPane').remove();
  }

});

