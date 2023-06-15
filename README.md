# 📆 Welcome to Taskmaster Notes ⭐️

#### What is Taskmaster Notes? 
* Taskmaster Notes is a place to keep track of your notes and keep up-to-date on your tasks for work, school, or whatever your task is for!
* Check out the guidelines below to get started using Taskmaster Notes 

#### I Want to Use the Site
##### Great! The site has been deployed using Railway & the link is here: https://taskmaster-notes-app-production.up.railway.app/api/users - PLEASE NOTE: This is a WIP and Deploying locally will yield best results
* Take a look around, as a User you are able to create tasks with titles and descriptions of your choice, assign due dates to them, and keep track of your progress.
* You are able to use Taskmaster Notes as a note-taking app as well. Simply start a new note and wrtie away! If you prefer, you are also able to add notes to specific tasks so you can keep track of progress. 

#### I Don't Want to Use the Site
#### To Deploy locally, clone this repo, pull from this REMOTE branch: final_push, run npm i, and run npm run start!
##### We've got you covered! Postman will be your friend in this case. take a look at our API routes below:
#### USERS:
##### GET Routes:
* http://localhost:3000/api/users
* http://localhost:3000/api/users/id
* http://localhost:3000/api/users/username/{which username you are looking for}
###### GET Route to get a User's Tasks:
* http://localhost:3000/api/users/id/tasks
###### GET Route to get a User's Notes:
* http://localhost:3000/api/users/id/notes
##### POST Routes:
* http://localhost:3000/api/users
##### PUT Routes:
* http://localhost:3000/api/users/id
##### DELETE Routes:
* http://localhost:3000/api/users/id
#### TASKS:
##### GET Routes:
* http://localhost:3000/api/tasks
* http://localhost:3000/api/tasks/id
##### POST Routes:
* http://localhost:3000/api/{user you would like to assign the new task to}/id
##### PUT Routes:
* http://localhost:3000/api/tasks/id
##### DELETE Routes:
* http://localhost:3000/api/tasks/id
#### NOTES:
##### GET Routes:
* http://localhost:3000/api/notes
##### POST Routes:
* http://localhost:3000/api/{user you would like to assign the new task to}/id
##### PUT Routes:
* http://localhost:3000/api/notes/id
##### DELETE Routes:
* http://localhost:3000/api/notes/id
