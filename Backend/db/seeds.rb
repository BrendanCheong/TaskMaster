# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = Users.create([
    {
        name: "John",
        password: "hunter2",
        email: "john@gmail.com"
    },
    { 
        name: "Larry",
        password: "password",
        email: "larry@gmail.com"
    },
    { 
        name: "Katie",
        password: "admin",
        email: "katie@gmail.com"
    }
])

task = Tasks.create([
    {
        title: "Movie",
        content: "Watch Spiderman",
        status: true,
        endDate: DateTime.strptime("09/01/2022 17:00", "%d/%m/%Y %H:%M"),
        users: user.first
    },
    {
        title: "Dinner",
        content: "Dinner with your mom",
        status: true,
        endDate: DateTime.strptime("19/03/2022 22:00", "%d/%m/%Y %H:%M"),
        users: user.first
    },
    {
        title: "Interview",
        content: "Interview with Morgan Stanley for Big Investment Job",
        status: true,
        endDate: DateTime.strptime("08/02/2022 14:05", "%d/%m/%Y %H:%M"),
        users: user.first
    }
])

# tag = Tags.create([
#     {
#         tagName: "Fun",
#         tasks: task.first
#     },
#     { 
#         tagName: "Work",
#         tasks: task.first
#     }
# ])
