var DEV_HOST = "http://0.0.0.0:3000/";
var SERVER_HOST = "http://at35.com:3000/";

var api_host = DEV_HOST;

/**
 * Query string parser
 */ 
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}