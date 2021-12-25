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
        id: 1,
        title: "Eat",
        content: "Get some Food at your mom's house",
        status: false,
        endDate: DateTime.strptime("19/03/2022 22:00", "%d/%m/%Y %H:%M"),
        user_id: 1
    },
    {
        id: 2,
        title: "Drink",
        content: "Lets go to a bar at Clarke Quay",
        status: false,
        endDate: DateTime.strptime("21/03/2022 22:00", "%d/%m/%Y %H:%M"),
        user_id: 1
    },
    {
        id: 3,
        title: "Movie",
        content: "Watch the new Spiderman Movie",
        status: false,
        endDate: DateTime.strptime("21/12/2022 19:45", "%d/%m/%Y %H:%M"),
        user_id: 2
    }
])

tags = Tag.create([
    {
        id: 1,
        tagName: "Leisure",
        task_id: 1
    },
    {
        id: 2,
        tagName: "Work",
        task_id: 1
    },
    {
        id: 3,
        tagName: "Fun",
        task_id: 2
    }
])