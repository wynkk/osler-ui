(function() {
    'use strict';
    var $ = require('jquery');

    module.exports = function (text) {
      console.log('In Voice Handler:', text);
        $.ajax({
          url: window.API_URL + '/brain/ask',
          method: 'POST',
          data: JSON.stringify({
            question: text
          }),
          dataType: "json",
          contentType: "application/json",
          headers: {
            'Authorization':'Bearer ' + window.localStorage.getItem('token'),
            'Content-Type':'application/json'
          },
          success: function(response) {
            alert(response.string);
            console.log('> success: ', arguments);
            jQuery.getJSON("http://vaas.acapela-group.com/Services/UrlMaker?jsoncallback=?",
                   {
                      prot_vesrb: 2, cl_login: "EVAL_VAAS", cl_app: "EVAL_3528527", cl_pwd: "ygb4mjab",
                      req_voice:"graham22k",
                      req_text: response.string || 'Pardon?',
                      //to produce ogg vorbis files, for MP3 you can remove this param.
                      req_snd_type:"OGG"
                   },
                   function(data)
                   {
                     if (data.err_code) {
                       // something went wrong wth Acapella
                       return alert(decodeURIComponent(data.err_msg));
                     }
                     console.log('RESPONSE: ', data);
                      // Data exploitation
                      $("#demo1player").html("<audio src='"+data.snd_url+"' autoplay controls='controls' />");
                   }
                );
          }
        });
        // $.getJSON(window.API_URL + '/brain/ask/' + text, function (response) {
        //     jQuery.getJSON
        //       (
        //         "http://vaas.acapela-group.com/Services/UrlMaker?jsoncallback=?",
        //        {
        //           prot_vesrb: 2, cl_login: "EVAL_VAAS", cl_app: "EVAL_5991276", cl_pwd: "51oc6yv7",
        //           req_voice:"graham22k",
        //           req_text: response.string || 'Pardon?',
        //           //to produce ogg vorbis files, for MP3 you can remove this param.
        //           req_snd_type:"OGG"
        //        },
        //        function(data)
        //        {
        //           // Data exploitation
        //           $("#demo1player").html("<audio src='"+data.snd_url+"' autoplay controls='controls' />");
        //        }
        //     );
        //     console.log(arguments);
        // });
    };
}());
