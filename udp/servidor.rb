require 'socket'

server = UDPSocket.new
host = "0.0.0.0" 
port = 2509

server.bind(host, port)

5.times do
    msg, address = server.recvfrom(250)
    puts "Recebi #{msg} de #{address[2]} #{address[1]}"
    
    #tempoI = Time.now()
    server.send("Bem Vindo: #{msg}", 0, address[2],address[1])
    server.send("Bytes da mensagem: #{msg.length}", 0, address[2],address[1])
    #server.send("Tempo Inicial: #{tempoI.strftime("%L")}", 0, address[2], address[1]) 
end

server.close
