users = User.create([
    {
        name: "John",
        email: "john@gmail.com",
        password: "password"
    },
    {
        name: "Larry",
        email: "larry@gmail.com",
        password: "helloworld"
    },
    {
        name: "Katie",
        email: "katie@gmail.com",
        password: "hunter2"
    }
])

tasks = Task.create([
    {
        title: "Eat",
        content: "Get some Food at your mom's house",
        status: false,
        endDate: DateTime.strptime("19/03/2022 22:00", "%d/%m/%Y %H:%M"),
        user: users.first
    },
    {
        title: "Drink",
        content: "Lets go to a bar at Clarke Quay",
        status: false,
        endDate: DateTime.strptime("21/03/2022 22:00", "%d/%m/%Y %H:%M"),
        user: users.first
    },
    {
        title: "Movie",
        content: "Watch the new Spiderman Movie",
        status: false,
        endDate: DateTime.strptime("21/12/2021 19:45", "%d/%m/%Y %H:%M"),
        user: users.last
    }
])

tags = Tag.create([
    {
        tagName: "Leisure",
        task: tasks.first
    },
    {
        tagName: "Work",
        task: tasks.first
    },
    {
        tagName: "Fun",
        task: tasks.last
    }
])