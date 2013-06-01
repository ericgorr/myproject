PrintingTemplate.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('PrintingTemplate.ReadyState'),
  // someOtherState: SC.State.plugin('PrintingTemplate.SomeOtherState')

});