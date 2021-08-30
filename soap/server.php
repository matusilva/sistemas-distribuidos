<?php
require_once('lib/nusoap.php');

function soma($a,$b) {
 return $a + $b;
}

function div($a,$b) {
        return $a / $b;
}

$server = new soap_server();
$server->configureWSDL("Matheus SOAP","http://matheus.com");

$server->register("soma",
    // param
    array('a'=>'xsd:int','b'=>'xsd:int'), 
    // return
    array('return'=>'xsd:int'),
    // namespace
    "http://matheus.com",
    // soapaction
    false,
    // style
    'rpc',
    // use
    'encoded',
    // description
    'Atividade de distribuido');

$rawPostData = file_get_contents("php://input");
$server->service($rawPostData);
?>