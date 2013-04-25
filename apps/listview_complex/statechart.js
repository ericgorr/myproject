ListviewComplex.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('ListviewComplex.ReadyState'),

});