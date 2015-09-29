(function() {
    'use strict';
    var $ = require('jquery');

    module.exports = function (text) {
        console.log('....', text);
        $.getJSON(window.API_URL + '/brain/ask/' + text, function (response) {
            jQuery.getJSON
              (
                "http://vaas.acapela-group.com/Services/UrlMaker?jsoncallback=?",
               {
                  prot_vers: 2, cl_login: "EVAL_VAAS", cl_app: "EVAL_5991276", cl_pwd: "51oc6yv7", 
                  req_voice:"graham22k", 
                  req_text:"Hello world, how's it going ?",
                  //to produce ogg vorbis files, for MP3 you can remove this param.
                  req_snd_type:"OGG"  
               },
               function(data) 
               {
                  // Data exploitation
                  $("#demo1player").html("<audio src='"+data.snd_url+"' autoplay controls='controls' />");	
               }						
            );
            console.log(arguments);
        });
    };
}());

/**
 * <!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
  <head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  </head>
  <body>
      <div>TODO write content</div>
      <div id="demo1player"></div>
      <script>
          $(document).ready(function() 
            {            
              // Request
              jQuery.getJSON
              (
                "http://vaas.acapela-group.com/Services/UrlMaker?jsoncallback=?",
               {
                  prot_vers: 2, cl_login: "EVAL_VAAS", cl_app: "EVAL_5991276", cl_pwd: "51oc6yv7", 
                  req_voice:"ryan22k", 
                  req_text:"Hello world, how's it going ?",
                  //to produce ogg vorbis files, for MP3 you can remove this param.
                  req_snd_type:"OGG"  
               },
               function(data) 
               {
                  // Data exploitation 
                  $("#demo1player").html("<audio src='"+data.snd_url+"' controls='controls' />");	
               }						
            );
          });

      </script>
  </body>
</html>

**/