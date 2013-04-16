ScTechnique.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    ScTechnique.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    ScTechnique.getPath('mainPage.mainPane').remove();
  }

});

