ListviewComplex.ListViewCell = SC.View.design({
    
    childViews:  [ 'propertyA', 'propertyB', 'propertyC' ],
    
    displayProperties: ['isSelected'],
    
    render: function(context) {
        var isSelected = this.get('isSelected');

        context.setClass( 'sel', isSelected );
        
        sc_super();
    },
    
    update: function(jqElement) {
        var isSelected = this.get('isSelected');

        jqElement.setClass('sel', isSelected);
    },
  
    propertyA:  SC.LabelView.design({
                    layout:         { top: 0, left: 0, width: 300, height: 18 },
                    valueBinding:   SC.Binding.oneWay( '.parentView.content.propertyA' )
                }),
    
    propertyB:  SC.LabelView.design({
                    layout:         { top: 18, left: 0, width: 300, height: 18 },
                    valueBinding:   SC.Binding.oneWay( '.parentView.content.propertyB' )
                }),
    
    propertyC:  SC.LabelView.design({
                    layout:         { top: 36, left: 0, width: 300, height: 18 },
                    valueBinding:   SC.Binding.oneWay( '.parentView.content.propertyC' )
                })
});
    