var soap = require('soap');
var url = 'http://localhost/server.php?wsdl';

var valores = {a:'5',b:'5'};

soap.createClient(url, function(err, client) {
    client.soma(valores, function(err, result) {
        console.log(result);
    });
});