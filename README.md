# FlowNest

"FlowNest" is a simple Web App project created by me, Guilherme Rocha, to understand more the process of creating a React Application from the ground up, utilizing many of the React features, such as "React Hooks", and more about realtime databases and Storage using 'Firebase'.

# How to run the app correctly?

After you download and extract all the source code on the zip file to it's own folder, you can run the following commands in order on the project directory terminal to install the necessary dependencies to run the application without any issues:

### `npm install`

After the installation, you need to install a specific 'Firebase' version, so the 'Realtime Database' works properly, and the 'Date-FNS', that is a JavaScript Date Utility Library, so it can show the comments date format properly.

Run the following commands to install the correct version of 'Firebase' for this project, and also the 'Date-FNS' JS Library:

### `npm install firebase@8.5`

### `npm install date-fns`

After both installations, to run the React application, you need to run the following command in a terminal:

### `npm run start`

And then, access the application in the following local URL:
[http://localhost:3000](http://localhost:3000)

The project is about a simple project management web app that let users create projects tasks, so they can reach the goal of successfully completing all the projects tasks so the project can be completed.

You can also marks projects as "Completed", so it will be deleted from your Dashboard, letting you focus more on projects that are still under progress.

It is very simple and intuitive, so you can easily track your projects tasks, and separate each task according to their respective category, that can be either Development, Design, Sales or Marketing, and assign the users responsible for each area of the project itself.

## App Features

- Login / Sign Up feature
- Project Creation Page (You can add a Project Name, Project Details, Due Date, Category and assign current users to the Project Task)
- Dashboard to display the current projects that are under progress.
- A filter that only shows the projects tasks according to their category, such as "Development, Design, Sales and Marketing".
- A single page that contains all the details about the project you selected.
- Comment section to users update the progress of each one of the projects tasks.
- Option to mark projects as "completed", so you can delete projects from the Dashboard.

## Technologies used in this project

- HTML5
- CSS3
- Javascript
- Date-FNS (For the comments date format)
- React.js
- Firebase (Authentication, Realtime Database and Storage)

### Final Considerations

You can't create an account with the same e-mail address. Each time you create a new account, make sure to use a different e-mail address.

The 'Name' can be the same for multiple accounts, as the system only counts for the e-mail and password to create the account.

Only the user that created the project task can mark it as "Completed", so it can be deleted from all the users assigned to it in the Dashboard.