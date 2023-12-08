# Canine-Guessrd
A brief description of our project:
Our project is building a dogbreed quiz website. When pressing start the user will se a picture of a dog and will have to guess the breed and origin of the dog in the picture. If they guess correct they will receive a point for each correct answer. Then the next dog will be shown. The quiz will be on time so the user have to guess the breed and origin of the dogs as fast as possible. When the time is over the user will recieve a score that will be placed on a leader board. To able to save the different users score the player will have to login/register before playing.  

What we've done so far:
So far we have created a model for the quiz and added some functionality, created startView and startPresenter, we have also started to implement gameView and gamePresenter, but it is not finished. We have connected with the API so that we can get information from it and started with the design of the website so CSS and logos amongst other things. 

What you still plan to do:
We still need to write the firebaseModel file and create the functionality of creating and saving users and their score. We also have to create the view and presenter for the leader board, results and authentication as well as create the functionality of a timer in the game. We have to finish the gameview and presenter as well so that it works. We also have to finished the Quiz model for all the game's functionality.

Your project file structure (short description/purpose of each file)
Outside of source we have our configureration files. We use vite to create a react website and we use firebase to store information and depoly the app. We are using mobx for a reactive model. 
In /src:
    - assets: Here we have all of our icons. 
    - presenters: Here we have all of our presenters that connect the view to the model.
                  - gamePresenter.jsx: Used for
                  - leaderboardPresenter.jsx: The presenter linking the model with leaderboardview. 
                  - resultsPresenter.jsx: The presenter linkling the model with the resultsview. 
                  - startPresenter.jsx: The presenter linking the model with the startView. 
    - Views: Here we have all our of views, the different pages of our website.
             -  GameView: The page for the actual playing of the game
             -  leaderboardView: The page the will show the leaderboard
             -  LoginView: The page when the user will login. 
             -  RegisterView: The page when the user will register themselves. 
             -  resultsview: The page after the user played that will show them the result for that turn.
             -  startView: The start page of the site where user can press to login, register of play  
                (if they have already have done one of the previous two) 
    - apiConfig.js: Configuration of the API.
    - App.cc: More presice css stylign for the website (classnames)
    - App.jsx: The root component of the website (routing all the views with hashes)
    - dogBreedSource.js: The fetching of the data from the API.
    - firebaseConfig.js: The configuration of firebase
    - firebaseModel.js/firebaseService.js: The model where we will communicate with firebase and create functionality with 
                                           firebase. 
    - index.css: css stylign for all relevent html components. Genreal styling.
    - main.jsx: Where we create our root for our website. Here we create our reactive model. 
    - Quizmodel.js: Our model with the game functionality.
    - resolvePromise.js: Has the function that resolve the promise that the fetching of the API gives us.  

             