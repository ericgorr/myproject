GridviewSimple.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    
    GridviewSimple.gridItems = [];
    
    GridviewSimple.gridItems.push( GridviewSimple.GridItem.create({ displayString: 'first item' }) );
    GridviewSimple.gridItems.push( GridviewSimple.GridItem.create({ displayString: 'second item' }) );
    GridviewSimple.gridItems.push( GridviewSimple.GridItem.create({ displayString: 'third item' }) );
  
    GridviewSimple.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    GridviewSimple.getPath('mainPage.mainPane').remove();
  }

});

