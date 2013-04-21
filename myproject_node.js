var g 			= require('garcon'); 
var shouldBuild = false;


 
if( process.argv[2] === "build" ) {
	shouldBuild = true;
}


 
var server = g.Server.create({

	REPL: 		false,

	proxies: 	[{ 
	
		prefix: 		'/',
		host: 			'localhost',
		port: 			5984,
		proxyPrefix: 	'/'

	}]

});


 
var stdHtmlBody = [

	'<div id="loading">',
	'<p id="loading">',
	'Loading…',
	'</p>',
	'</div>'
	
].join('\n');



var htmlBuildScripts = [

'<script type="text/javascript">',
'</script>'

].join("\n");



var sc_technique = g.App.create({

	name: 			'sc_technique',
	theme: 			'ace',
	htmlBody: 		stdHtmlBody,
	htmlHead: 		'<title>SC Technique</title>',
	htmlScripts: 	shouldBuild? htmlBuildScripts: "",
	urlPrefix: 		shouldBuild? '': '/',
	hasSC: 			true,
	configSC: 		{},
	
	frameworks: [
		//{ path: 'frameworks/sproutcore/themes/empty_theme'},
		//{ path: 'frameworks/sproutcore/themes/ace'},
		{ path: 'apps/sc_technique'}
	]

});


 
if ( !shouldBuild ) {

	server.addApp(sc_technique);
	server.run();

}
else {

	sc_technique.save();

}