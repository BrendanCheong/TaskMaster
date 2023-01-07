# TaskMaster

TaskMaster is a ToDo manager that aims to help users keep track of and categorise their task easily. Made with React and Ruby on Rails connected to a MySQL database

## Getting Started Locally

### Backend

Create a file called ```app_environment_variables.rb``` in Backend/config that looks like this:
```ruby
ENV['DATABASE_USERNAME'] = '<your db username>'
ENV['DATABASE_PASSWORD'] = '<your db password> '
ENV['DATABASE_HOST'] = '<db url like XXXXX.amazonaws.com>'
ENV['JWT_SECRET'] = '<a JWT secret of your choice>'
ENV['JWT_ALGO'] = 'HS256'
```
Run the backend rails server using docker
```bash
cd Backend
docker-compose up
```
The server is hosted on http://localhost:3001
### Frontend

Create a ```.env.local``` file that looks like this:
```
NEXT_PUBLIC_API_URL="https:<backend url, in this case it can be taskmaster...herokuapp.com>/api/v1"
NEXT_PUBLIC_APP_ENV="development" // or "production"
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.


Run the development server to launch NextJS in the frontend:

```bash
yarn run dev
```

The frontend is hosted on http://localhost:8888

Open [http://localhost:8888](http://localhost:8888) with your browser to see the result.

## Deployment

Go to <a href="https://task-master-cvwo.vercel.app">the taskmaster website</a> and check it out!
</br>
Current backend deployment is at <a href="https://taskmaster-cvwo.herokuapp.com">https://taskmaster-cvwo.herokuapp.com</a>

Test Account: (Highly Recommend you create your own account with a fake email)
```
Email: taskMasterTestEmail@gmail.com
Password: verySecureMuchWow
```

## Tech stack
Frontend
- MaterialUI
- TailwindCSS
- React
- Redux
- NextJS
- Javascript

Backend
- Ruby on rails
- MySQL
- Docker

Deployment
- Heroku (Backend)
- Vercel (Frontend)
- AWS RDS (Database)
