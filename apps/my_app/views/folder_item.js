MyApp.FolderItemView = SC.View.extend( SC.ContentDisplay, {

	classNames:			[ 'folder_item_style' ],
	displayProperties:	[ 'content', 'isSelected' ],
	content:			null,
	
	render: function(context, firstTime)
	{
		sc_super();
		
		if ( this.get( "isSelected" ) ) context.addClass( "selected" );
	},
	
	createChildViews: function() 
	{
		var childViews 	= [];
		var content		= this.get( 'content' );
		
		if ( SC.none( content ) ) return;
		
		var contentView = this.createChildView(
			SC.LabelView.extent({
				layout:			{ centerY: 0, left: 10, right: 48, height: 24 },
				classNames:		[ 'name' ],
				content:		content,
				isEditable:		NO,
				fontWeight:		SC.BOLD_WEIGHT,
				valueBinding:	SC.binding( '.name', content )
			})
		);
		
		childViews.push( contentView );
		
		this.set( 'childViews', childViews );
	}
});