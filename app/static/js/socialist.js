(function() {

var jQuery;
var script_tag1 = document.createElement('script');

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || typeof window.jQuery === "undefined" || window.jQuery.fn.jquery !== '1.7.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    
   
    script_tag1.setAttribute("type","text/javascript");
    script_tag1.setAttribute("language","javascript");
    script_tag1.setAttribute("src","http://plugins.in1.com/scripts/jquery.socialist.js");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag1);
    
     if (script_tag1.readyState) {
      script_tag1.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else {
      script_tag1.onload = scriptLoadHandler;
    }
    
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    
    script_tag1.setAttribute("type","text/javascript");
    script_tag1.setAttribute("language","javascript");
    script_tag1.setAttribute("src","http://plugins.in1.com/scripts/jquery.socialist.js");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag1);
    
    if (script_tag1.readyState) {
      script_tag1.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
            // call main
            main();
          }
      };
    } else {
      script_tag1.onload = main;
    }
}

    
/******** called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    
    // call main
    main();
}

function main() {
   
    jQuery(document).ready(function($) {
    
        var custom_lnk = $("<link>", {
           rel: "stylesheet",
           type: "text/css",
           href: "http://plugins.in1.com/scripts/jquery.socialist.css"
        });
        custom_lnk.appendTo('head');  

        var networks = [];
        var nets =  $('#socialist').attr("data-networks");
        var urls =  $('#socialist').attr("data-ids");
        var max =  $('#socialist').attr("data-max");
        
        if (typeof nets != "undefined" && typeof urls != "undefined") {
            nets = nets.split(',');
            urls = urls.split(',');
            
            if (nets.length!=urls.length) {
                // definition error
                return;   
            }
            
            for (var i=0;i<nets.length;i++) {
                networks.push({name:nets[i],id:urls[i]});
            }
        }
        else {
            networks = [
                {name:'tumblr',id:'in1blog'}
            ]
        }
        
        $('#socialist').socialist({
            networks:networks,
            maxResults:max
    });
}

})();