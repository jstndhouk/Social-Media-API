# Social Media API

## Description
This application is a back-end API server.  It can either be attached to a front-end or pinged using Insomnia or Postman to manipulate the database associated with the social media application.  The application has a user model and a thoughts model.  These thoughts are tied to a user, and contain information on when they were created.  Thoughts can be reacted to using reactions.  Reactions are described as a schema only to be created and attached to thoughts.  Reactions have a user that created them and are tied to a thought.  The user model has a virtual that shows the total number of friends a user has.  The thought model has a virtual that displays the total number of reactions to that thought.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Features
This API includes the following routes
- A route to view all the thoughts, or all the users using the GET 'api/thought' or 'api/user' end points, respectfully.
- A route to view a single thought, or user using the GET 'api/thought/:thoughtId' or 'api/user/:userId' end points, respectfully. Make sure to include the thoughtId or userId of the thought or user that you want to view.
- A route to create a thought or user using the POST route of the same end points as above.
- A route to edit a thought or user using the PUT route of the same end point as above.
- A route to delete a thought or user using the DELETE route of the same end point as above.
- A route to add a reaction to a thought using a POST route 'api/thought/:thoughtId/reaction' end point.  Make sure to include the thoughtId of the thought that you want to add the reaction to.
- A route to add a friend to a user using a POST route 'api/user/userId/friendId' end point.  Here, the userId is the user that you want to add a friend to, and the friendId is the user that you want to make a friend of the user.

## Technologies
This application uses MongoDB using Mongoose in JavaScript.  Express is used for the back-end server.  The express router is used to modulate the routes.  This application was created with a future MCV architecture in mind.  A controller folder contains all the routes, as functions.  The routes folder shows those functions being executed as posts, puts, gets, and deletes.  

## Review
To review the code, please go to the [Repository](https://github.com/jstndhouk/social-media-api).

## Deploy
Future development includes a front-end that handles the routes described.  A deployed application will be included here in the future.

## Mock-Up
To review a demo of our application, click the following link: [Social-Media-API Demo]().
