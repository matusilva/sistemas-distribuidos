require 'savon'
client = Savon.client(wsdl: 'http://localhost/server.php?wsdl')

puts client.operations

response = client.call(:soma , message: {a: 11,b: 11})

puts response.body