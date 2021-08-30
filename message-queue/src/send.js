var amqp = require('amqplib/callback_api'); // Biblioteca amqp.node
const readline = require('readline'); // Biblioteca para ler mensagens digitadas

// conectando ao servidor padrão do RabbitMQ
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }

    // criando canal para realizar as tarefas
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'fila'; // declarando a fila para enviar as mensagens

        // criando input para ler texto digitado do terminal
        const input = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        input.question('Informe a mensagem que deseja enviar para a fila: ', (msg) => {
            channel.assertQueue(queue, { durable: false }); // passando nome da fila para a conexão do RabbitMQ
            channel.sendToQueue(queue, Buffer.from(msg)); // enviando a mensagem para fila
            console.log(" >> Enviando %s", msg);
            input.close();
        });
    });

    // fechar a conexão após 5 segundos
    setTimeout(function() { connection.close(); process.exit(0); }, 5000);
});