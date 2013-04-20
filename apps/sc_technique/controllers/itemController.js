ScTechnique.itemArrayController = SC.ArrayController.create({
});

ScTechnique.itemController = SC.ObjectController.create({
	contentBinding: SC.Binding.oneWay( 'ScTechnique.itemArrayController.selection' )
});
