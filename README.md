
# Recipe App
Within this repository, you'll find a straightforward Express.js application designed for recipe management, utilizing MongoDB as its database for storing and fetching recipe data. The following guide provides instructions on configuring and running the application.

# Prerequisites

Node.js: Make sure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/en).

MongoDB: Ensure that you have MongoDB installed locally. You can download it [here](https://www.mongodb.com/docs/manual/installation/).

# Getting Started
1-Clone the repository to your local machine:   
`git clone https://github.com/oumaima-ezarouali/recipe-projectExpress.git`

2-Navigate to the project directory: 
`cd recipe-api` 

3-Install the dependencies : `npm install`

# Configuring MongoDB

1-Ensure MongoDB is running on your local machine.
2-Open the 'config/connect.js' file and update the connection string if your MongoDB instance is running on a different host or port.

# Running the Application

1-Start the Express server:
 `nodemon index.js`
 The server will run on http://localhost:4000 by default.

2-Use your preferred API testing tool like postman or a web browser to interact with the API.

# API Endpoints

GET /all: Retrieve all recipes.

POST /create: Create a new recipe. Send a JSON object with the recipe details in the request body.

PUT /update/:id: Update a recipe by ID. Provide the recipe ID in the URL and send the updated details in the request body.

DELETE /delete/:id: Delete a recipe by ID. Provide the recipe ID in the URL.

# Example Requests
## Adding a Recipe :
````
POST http://localhost:4000/api/recipes/upload
Content-Type: application/json

{
  "name": "Delicious Pasta",  
  "category": "Italien",  
  "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],  
  "instructions": ["Boil pasta", "Mix with sauce", "Top with cheese"],   
   "imageUrl": "https://example.com/pasta.jpg",
}
````

# Updating a Recipe
````
PUT http://localhost:4000/api/recipes/id
Content-Type: application/json

{
  "instructions": ["Boil pasta", "Mix with sauce", "Top with cheese and bake"]
}
````
# Deleting a Recipe
`DELETE http://localhost:4000/api/recipes/id
`

# Contributing
Feel free to contribute to this project by creating issues or submitting pull requests.










