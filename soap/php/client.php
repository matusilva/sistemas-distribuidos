<?php

$url = array('uri' => 'http://localhost:8080/', 'location' => 'http://localhost/server.php');
$client = new SoapClient(null, $url);

var_dump($client->soma(10,10));

?>