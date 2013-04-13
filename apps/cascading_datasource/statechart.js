CascadingDatasource.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('CascadingDatasource.ReadyState'),
  // someOtherState: SC.State.plugin('CascadingDatasource.SomeOtherState')

});