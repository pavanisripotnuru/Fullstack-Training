todos = [

"Meeting at 10:00am",

"Lunch at 1:30pm",

]



puts "What action do you want to perform? Options: (add) (update) (delete) (list)"

choice = gets.chomp

case choice



when "add"

puts "What todo would you like to add?"

todo = gets.chomp

todos.append(todo)

puts "#{todo} has been added"



when "update"

puts "Which todo you want to update?"

todo = gets.chomp

if todos.include?(todo)

todos.delete(todo)

puts "What changes do you want to make?"

todo = gets.chomp

todos.append(todo)

puts "todo has been updated"

else puts "Error! Todo not found"

end



when "delete"

puts "Which todo you want to delete"

todo = gets.chomp

if todos.include?(todo)

todos.delete(todo)

puts "todo deleted"

else puts "Error! todo not found"

end

end




puts todos
