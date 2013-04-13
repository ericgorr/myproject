CascadingDatasource.Item = SC.Record.extend(
{
  	name: 	SC.Record.attr(String),
  	ph:		SC.Record.attr(String)
});

CascadingDatasource.Item.itemQuery = SC.Query.remote( CascadingDatasource.Item, { targetDataSource: 'itemDataSource' });