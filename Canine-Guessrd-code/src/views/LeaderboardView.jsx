// LeaderboardView.jsx
export default function LeaderboardView(props) {

    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Highscore</th>
                    </tr>
                </thead>
                <tbody>
                    {props.leaderboardData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.highscore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={props.navigateToStart}>Back to Start</button>
        </div>
    );
}
