require 'socket'

client = UDPSocket.new
client.connect("137.117.64.129", 2509)
tempoI = Time.now()

client.puts "Matheus Vinicius da Silva"
msg, address = client.recvfrom(250) #qtd de bytes
msgbyts, address = client.recvfrom(250)
#tempoI, address = client.recvfrom(250)
tempoF = Time.now()

puts msg
puts msgbyts
#puts msg.length
tempoDemorado = tempoF - tempoI
puts "Tempo demorado: #{tempoDemorado}"

client.close
