sc_require('data_sources/itemDataSource');

CascadingDatasource.dataSource = SC.CascadeDataSource.create(
{
  	dataSources: ['itemDataSource'],

  	itemDataSource: CascadingDatasource.itemDataSource,

});
