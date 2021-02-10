# Docs-Spots
Our goal for our web based application is to create a website that is hosted on Heroku, implement a functioning weather API, integrate a functioning chat room, and a platform to view and rate courses, professors, and bars/restaurants around the Towson area. Students will be able to write reviews of the aforementioned items, and be held accountable by a user-sourced upvote/downvote system to ensure accuracy and integrity. Students will be able to communicate with other students in a chat specific to each course they are enrolled in. There will also be a section of the website where students can find activities, restaurants, and events going on around campus.

# Getting Started
1. Verify that Node.js is installed on your machine by typing ```node -v``` in the terminal. If Node.js is not installed, head over to the [Node.js](https://nodejs.org/en/download/) page and download/install it for your OS of choice (don't forget to verify the install afterwards). 
2. Clone the repository to your local machine.
3. Navigate\* to the root folder of the project and execute ```npm install```. This will check the package.json file for required modules and install them into a node_modules folder to be used by our React front end.
4. Once the modules are installed, execute ```npm start```\*\*. You should see terminal output indicating the React components are being served on port 3000. This is how our front end is delivered. This step will need to be taken any time we intend to test the front end.
5. Navigate to the server subfolder within the project and execute ```npm install```. This will check the packages.json file in the server folder and install the required modules into a node_modules folder to be used by our Node back end.
6. Next, we want to install nodemon for managing our server. Execute ```npm install -g nodemon``` to install nodemon globally.
7. Once the server modules and nodemon are installed, execute ```nodemon server```\*\*. You should see terminal output indicated the Node.js server is running on port 5000. This will need to be done when testing any back end functionalities**.

\**If using an editor such as VS Code, make sure you're navigating directories from within the terminal before executing the appropriate commands.*  
\*\**After the initial setup, you should not need to install node modules again unless a new module is added during feature implementation. Due to the size of the node_modules folder(s) they are included in the .gitignore.*  
\*\*\**When testing functionalities involving both React and Node components, the commands in steps 4 and 7 need to be run in their appropriate folders.*  
