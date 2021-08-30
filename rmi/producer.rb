require 'drb'

DRb.start_service

queue = DRbObject.new_with_uri('druby://localhost:2509')

puts "Digite um valor para o PUSH"
valor = gets
queue.push(valor)