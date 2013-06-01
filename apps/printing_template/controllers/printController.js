PrintingTemplate.printController = SC.Object.create({
  debug: (SC.buildMode == 'debug'),

  header:   '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' + 
            '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>' + 
            '<link rel="stylesheet" href="' + sc_static('print_css') + '">' +
            '</head>\n<body>\n',
            
  footer:   '</body></html>',

  view: SC.TemplateView.create(),

  renderTemplate:   function(content, templateName) {
                        var view = this.get('view'),
                            data,
                            output,
                            template = SC.TEMPLATES[templateName];
                    
                        view.set('value', content);
                    
                        data = { view: view, isRenderData: true };
                        output = template(content, { data: data });
                     
                        return output;
                      },

  print:    function(pages) {
                var data,
                    output,
                    iframe,
                    doc,
                    body,
                    debug = this.get('debug');
            
                //console.log(output);
                
                iframe = document.createElement('iframe'); 
                iframe.setAttribute('style'," z-index: 10; position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 100%; background-color: white; height: 100%;"); 
                
                body = document.getElementsByTagName('body')[0]; 
                body.appendChild(iframe); 
                
                doc = iframe.contentWindow.document;
            
                doc.open();
                doc.write( this.get( 'header' ) );
                
                pages.forEach( function( page ) {
                  doc.write( this.renderTemplate( page.content, page.templateName ) );
                }, this);
                
                doc.write(this.get('footer'));
                doc.close();
            
                setTimeout( function() {
                    iframe.contentWindow.print();
                    //console.log("done printing");
                    body.removeChild(iframe);
                }, 500);
            },

  printContent: function() {
  
    var titleContent    = PrintingTemplate.get( 'titleContent' );
    var bodyContent     = PrintingTemplate.get( 'bodyContent' );
    var bodyTable       = $( '<div/>' ).append( bodyContent ).find( 'table' ).get();
    var bodyTableString = $( bodyTable[0] ).clone().wrap( '<div>' ).parent().html();
    
    this.print( [ { content: { title_content: titleContent, body_content: bodyTableString }, templateName: 'print_template' } ] );
  },
});