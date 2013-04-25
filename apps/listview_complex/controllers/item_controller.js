ListviewComplex.itemArrayController = SC.ArrayController.create({
});

ListviewComplex.itemController = SC.ObjectController.create({
	contentBinding: SC.Binding.oneWay( 'ListviewComplex.itemArrayController.selection' )
});
