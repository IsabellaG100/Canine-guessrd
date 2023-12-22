# Canine-Guessrd
A brief description of our project:
Our project is building a dogbreed quiz website. When pressing start the user will se a picture of a dog and will have to guess the breed and origin of the dog in the picture. If they guess correct they will receive a point for each correct answer. Then the next dog will be shown. The quiz will be on time so the user have to guess the breed and origin of the dogs as fast as possible. When the time is over the user will recieve a score that will be placed on a leader board. To able to save the different users score the player will have to login/register before playing.  

# Project Strcuture
Your project file structure (short description/purpose of each file)
Outside of source we have our configureration files. We use vite to create a react website and we use firebase to store information and depoly the app. We are using mobx for a reactive model. 
# src 
    - assets: Here we have all of our icons. 
    - models: Here we have our two models
              - QuizModel.js: The model for the game functionality. 
              - Firbasemodel.js: The model for the functionality related to firebase
    - presenters: Here we have all of our presenters that connect the view to the model.
                  - gamePresenter.jsx: Used for linking the model with leaderboardview.
                  - leaderboardPresenter.jsx: The presenter linking the model with leaderboardview. 
                  - resultsPresenter.jsx: The presenter linkling the model with the resultsview. 
                  - startPresenter.jsx: The presenter linking the model with the startView. 
                  - loginPresenter.jsx: The presenter linking the model with the loginView. 
                  - profilePresenter.jsx: The presenter linking the model with the profileView. 
                  - registerPresenter.jsx: The presenter linking the model with the registerView. 
    - Views: Here we have all our of views, the different pages of our website.
             -  GameView: The page for the actual playing of the game
             -  leaderboardView: The page the will show the leaderboard
             -  LoginView: The page when the user will login. 
             -  profileView: The page that shows the user profile.
             -  registerView: The page when the user will register themselves. 
             -  resultsView: The page after the user played that will show them the result for that turn.
             -  resultsErrorView: The page shown if the user goes to results before having played the game. 
             -  startView: The start page of the site where user can press to login, register of play  
                (if they have already have done one of the previous two) 
    - apiConfig.js: Configuration of the API.
    - App.cc: More presice css stylign for the website (classnames)
    - App.jsx: The root component of the website (routing all the views with hashes)
    - dogBreedSource.js: The fetching of the data from the API.
    - firebaseConfig.js: The configuration of firebase
    - index.css: css stylign for all relevent html components. Genreal styling.
    - main.jsx: Where we create our root for our website. Here we create our reactive model. 
    - resolvePromise.js: Has the function that resolve the promise that the fetching of the API gives us.  
    - TimerFile.js: The file that creates our timer that we uses in the game
    - utilities.js: A file with simple functions that the quizModel uses. 


# How to set up:
**When you do the set up you have to be in the Canine-Guessrd-Code folder!**

These are all of our dependecies.
1.  "firebase": "^10.7.0",
2.  "localforage": "^1.10.0",
3.  "match-sorter": "^6.3.1",
4.  "mobx": "^6.12.0",
5.  "mobx-react": "^9.1.0",
6.  "react": "^18.2.0",
7.  "react-burger-menu": "^3.0.9",
8.  "react-dom": "^18.2.0",
9.  "react-router-dom": "^6.20.1",
10. "react-select": "^5.8.0",
11. "reactjs-popup": "^2.0.6",
12. "sort-by": "^0.0.2"

If you haven't installed npm yet, then just writing "npm install" should be all you need to setup.
If it doesn't work you can try to install every dependecy one by one. You do this by writing:

1.  npm install firebase@^10.7.0
2.  npm install localforage@^1.10.0
3.  npm install match-sorter@^6.3.1
4.  npm install mobx@^6.12.0
5.  npm install mobx-react@^9.1.0
6.  npm install react@^18.2.0
7.  npm install react-burger-menu@^3.0.9
8.  npm install react-dom@^18.2.0
9.  npm install react-router-dom@^6.20.1
10. npm install react-select@^5.8.0
11. npm install reactjs-popup@^2.0.6
12. npm install sort-by@^0.0.2

