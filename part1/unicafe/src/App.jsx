import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h2>give feedbacks</h2>
            <button onClick={() => setGood(good+1)}>good</button>
            <button onClick={() => setNeutral(neutral+1)}>neutral</button>
            <button onClick={() => setBad(bad+1)}>bad</button>

            <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad} 
            />
        </div>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good-bad) / all
    const positive = good / all * 100

    if (all === 0) {
        return (
            <>
                <h2>statistics</h2>
                <div>No feedback given</div>
            </>
        )
    } else {
        return (
            <>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={all} />
                        <StatisticLine text="average" value={average} />
                        <StatisticLine text="positive" value={positive} />
                    </tbody>
                </table>
            </>
        )
    }
}

const StatisticLine = ({ text, value }) => (
    <tr>
        <th>{text}</th>
        <td>{value}</td>
    </tr>
)

export default App
