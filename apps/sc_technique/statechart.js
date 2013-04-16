ScTechnique.statechart = SC.Statechart.create({

	initialState: 'rootState',

	rootState: SC.State.design({
		initialSubstate: 'LOAD_DIR_STRUCTURE',
		
		LOAD_DIR_STRUCTURE: SC.State.design({
			enterState: function() {
			
				console.log( 'enter state' );
				
				//ScTechnique.loadingPane.append();
				
				return SC.Async.perform( 'load' );
			},
			
			script: null,

			load: function() {
				//
				// inject script tag
				//
				console.log( 'load function' );
							
				var script = document.createElement('script');
								
				script.type = 'text/javascript';
				script.src	= 'helper.js';
								
				this.script = script;
								
				document.appendChild(script);			
			},
			
			loadData: function(data) {
				if ( !data ) throw "False data";
				
				document.removeChild( this.script );
				
				data.forEach(function(rec) {
					var id = rec.folder;
					
					MyApp.store.pushRetrieve(MyApp.myModel,id,rec);
				});
				
				this.resumeGotoState();
				
				document.removeChild( this.script );
				
				this.script = null; // prevent leak
				
				this.gotoState('MAIN');
			}
		})
	}),
	
	MAIN: SC.State.plugin( 'ScTechnique.ReadyState' )
	
});

/*
ScTechnique.statechart = SC.Statechart.create({

	initialState: 'rootState',
	
	rootState: SC.State.design({
		initialSubstate: 'LOAD_DIR_STRUCTURE',
		
		LOAD_DIR_STRUCTURE: SC.State.design({
			enterState: function(){
				//MyApp.loadingPane.append();
				
				//return SC.Async.perform('load');
			},
			
			script: null,
	
			load: function() {
				//
				// inject script tag
				//
				var script = document.createElement('script');
				
				script.type = 'text/javascript';
				script.src	= 'helper.js';
				
				this.script = script;
				
				document.appendChild(script);
			},
			
			loadData: function(data) {
				if ( !data ) throw "False data";
				
				document.removeChild( this.script );
				
				data.forEach(function(rec) {
					var id = rec.folder;
					
					MyApp.store.pushRetrieve(MyApp.myModel,id,rec);
				});
				
				this.resumeGotoState();
				
				document.removeChild( this.script );
				
				this.script = null; // prevent leak
				
				this.gotoState('MAIN');
			}
		}),
	
		//MAIN: SC.State.plugin( 'ScTechnique.ReadyState' )
});

			*/
