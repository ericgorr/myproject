PrintingTemplate.ReadyState = SC.State.extend({ 
  
    enterState:     function() {
                        PrintingTemplate.getPath('mainPage.mainPane').append();
                    },
    
    exitState:      function() {
                        PrintingTemplate.getPath('mainPage.mainPane').remove();
                    },

    actionPrint:    function( view ) {
                        console.log( 'print action' );
                        
                        PrintingTemplate.printController.printContent();
                    }
});

