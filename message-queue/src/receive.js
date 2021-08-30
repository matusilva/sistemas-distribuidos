var amqp = require('amqplib/callback_api');

// conectando localhost padrão do RabbitMQ
amqp.connect('amqp://localhost', function(error0, connection) {
    
    if (error0) {
        throw error0;
    }

    // criando canal de conexão
    connection.createChannel(function(error1, channel) {
        
        if (error1) {
            throw error1;
        }

        var queue = 'fila'; // fila que recebe as mensagens do send.js

        channel.assertQueue(queue, { durable: false }); // passando nome da fila para a conexão do RabbitMQ

        console.log("Aguardando mensagens de %s...", queue);

        // recebe a mensagem da fila
        channel.consume(queue, function(msg) {
            console.log(" >> Recebi %s", msg.content.toString());
        }, { noAck: true });
    });
});