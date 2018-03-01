# WebDevBlog
A blog about web development.

How to run this application:
1) Open the folder slacked out to you, run `npm install`

2) Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

3) In the command line navigate to the root directory of the application and enter
`node server.js`


This application uses the CRUD methods inside each route. Below is a list of all the methods you can use.

  * Create a new post
  * Get a list of all posts
    * Get a list of all posts of a category
    * Edit a post
    * Delete a post