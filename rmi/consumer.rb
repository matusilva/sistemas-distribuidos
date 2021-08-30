require 'drb'

DRb.start_service
queue = DRbObject.new_with_uri('druby://localhost:2509')

puts "Digite o que você deseja fazer:\n - size\n - pop\n - sair"

loop do
    opcao = gets.chomp

    if opcao == "size" then
        size = queue.size
        puts "Quantidade da fila: #{size}"
    end

    if opcao == "pop" then
        if queue.size >= 1 then
            pop = queue.pop
            puts "Removendo o primeiro da fila: #{pop}"
        else
            puts "Fila vazia, não é possível remover"
        end
    end

    if opcao == "sair" then
        break
    end
end