ContainerViewApp.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('ContainerViewApp.ReadyState'),
  // someOtherState: SC.State.plugin('ContainerViewApp.SomeOtherState')

});