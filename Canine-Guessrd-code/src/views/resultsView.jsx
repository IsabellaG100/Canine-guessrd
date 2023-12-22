import {slide as Menu} from "react-burger-menu"

export default function ResultsView(props){

    function homepageACB(){
        window.location.hash = "#/start"
    }

    function startGameACB(){
        props.playAgain()
        window.location.hash = "#/game"
    }

    function changeSlideACB(i){
        props.setIndex(i)
    }

    return (
        <div>
            <div className = "dropdownMenu">
                <Menu >
                    <a  id = "Home" 
                        className = "menuItem" 
                        href = "#/start">
                        Home
                    </a>

                    <a  id = "Profile" 
                        className = "menuItem" 
                        href = "#/profile">
                        Profile
                    </a>

                    <a  id = "Leaderboard" 
                        className = "menuItem" 
                        href = "#/leaderboard">
                        Leaderboard
                    </a>

                    <a  id = "Logout" 
                        className = "menuItem" 
                        onClick={props.logout}
                        href = "#/login">
                        Log out
                    </a>

                </Menu>
            </div>

            <div className = "minilogoDiv">
                <button onClick = {homepageACB}
                        className = "minilogoButton">
                    <img src = "https://svgshare.com/i/10ZE.svg"
                         className="minilogoImage"/>
                </button>
            </div>

            <h1>Score: {props.score} </h1>

            <span className = "results">
                <button onClick = {() => changeSlideACB(props.index - 1)}
                        disabled = {props.index === 0}
                        className = "resultsNavL">
                    <img src = "https://svgshare.com/i/10Zg.svg"
                         height = {20}/>
                </button>

                <img src = {props.correctDogs[props.index].imgThumb}
                     height = {200}
                     className = "dogImage"/>
            <div>    
                <span className = "resultsText">
                    <p className = "answersTitle">
                        Breed:
                    </p>
                    <span  className = "answers">
                        <p className = {props.answerFeedbackBreed.feedback}>
                            {props.guessedDogs[props.index].breedName} 
                        </p>
                        <p style={{opacity:props.answerFeedbackBreed.opacity}}>
                            {props.correctDogs[props.index].breedName}
                        </p>
                    </span>
                </span>

                <span className = "resultsText">
                    <p className = "answersTitle">
                        Origin: 
                    </p>
                    <span  className = "answers">
                        <p className = {props.answerFeedbackOrigin.feedback}>
                            {props.guessedDogs[props.index].origin} 
                        </p>
                        <p style={{opacity:props.answerFeedbackOrigin.opacity}}>
                            {props.correctDogs[props.index].origin}
                        </p>
                    </span>
                </span>
            </div>

                <button onClick = {() => changeSlideACB(props.index + 1)}
                        disabled = {props.index === props.guessedDogs.length - 1}
                        className = "resultsNavR">
                    <img src = "https://svgshare.com/i/10Yw.svg"
                         height = {20}/>
                </button>

            </span>

            <button onClick = {startGameACB}>
                Play again
            </button>

            <button onClick = {homepageACB}>
                Quit
            </button>

        </div>
    )
}