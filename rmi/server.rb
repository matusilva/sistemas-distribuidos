require 'drb'

queue = Queue.new

DRb.start_service('druby://localhost:2509', queue)
DRb.thread.join