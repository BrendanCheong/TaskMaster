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
        content: "Amazon Web Services or AWS in short, is a subsidiary of Amazon (thank you Papa Bezos) that provides on-demand cloud computing platform and APIs for companies and individuals. To clarify the technical jargon cloud computing, it is simply an access to required services such as servers, databases, networking without having to care about managing the actual computer resource. I know, sounds fancy, but that's just the tip of the iceberg of what AWS can offer. Once again, I'm no AWS sensei so we'll only be focusing on one of the services AWS offers - Lambda.",
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