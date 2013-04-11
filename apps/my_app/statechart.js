MyApp.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('MyApp.ReadyState'),
  // someOtherState: SC.State.plugin('MyApp.SomeOtherState')

});