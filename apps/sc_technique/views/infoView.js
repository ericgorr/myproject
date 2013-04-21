ScTechnique.InfoView = SC.View.extend({

	childViews:	['firstLabel'],

	firstLabel:	SC.LabelView.extend({
		layout:	{ height: 24, borderLeft: 20 },
		
		value:	'some information'
	})
});