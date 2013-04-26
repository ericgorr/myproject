GridviewSimple.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('GridviewSimple.ReadyState'),
  // someOtherState: SC.State.plugin('GridviewSimple.SomeOtherState')

});