# Canine-Guessrd
A brief description of our project:
Our project is building a dogbreed quiz website. When pressing start the user will se a picture of a dog and will have to guess the breed and origin of the dog in the picture. If they guess correct they will receive a point for each correct answer. Then the next dog will be shown. The quiz will be on time so the user have to guess the breed and origin of the dogs as fast as possible. When the time is over the user will recieve a score that will be placed on a leader board. To able to save the different users score the player will have to login/register before playing.  

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


How to set up:
These are all of our dependecies.
1.  "@reduxjs/toolkit": "^2.0.1",
2.  "firebase": "^10.7.0",
3.  "localforage": "^1.10.0",
4.  "match-sorter": "^6.3.1",
5.  "mobx": "^6.12.0",
6.  "mobx-react": "^9.1.0",
7.  "react": "^18.2.0",
8.  "react-burger-menu": "^3.0.9",
9.  "react-dom": "^18.2.0",
10. "react-redux": "^9.0.0",
11. "react-router-dom": "^6.20.1",
12. "react-select": "^5.8.0",
13. "reactjs-popup": "^2.0.6",
14. "redux": "^5.0.0",
15. "redux-thunk": "^3.1.0",
16. "sort-by": "^0.0.2"

If you haven't installed npm yet, then just writing "npm install" should be all you need to setup.
If it doesn't work you can try to npm install every dependecy one by one. 
