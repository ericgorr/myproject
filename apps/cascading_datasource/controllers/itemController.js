CascadingDatasource.itemArrayController = SC.ArrayController.create({
});

CascadingDatasource.itemController = SC.ObjectController.create({
	contentBinding: SC.Binding.oneWay('CascadingDatasource.itemArrayController.firstObject')
});

