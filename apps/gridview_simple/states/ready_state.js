GridviewSimple.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    
    GridviewSimple.gridItems = [];
    
    GridviewSimple.gridItems.push( "item1" );
    GridviewSimple.gridItems.push( "item2" );
    GridviewSimple.gridItems.push( "item3" );
  
    GridviewSimple.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    GridviewSimple.getPath('mainPage.mainPane').remove();
  }

});

