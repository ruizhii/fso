const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                id: 1,
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                id: 2,
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                id: 3,
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

const Course = ({ course }) => (
    <>
        <h1>{course.name}</h1>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </>
)

const Content = ({ parts }) => (
    <>
        {parts.map(part => <Part part={part} key={part.id} />)}
    </>
)

const Total = ({ parts }) => {
    const total = parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0
    );

    return (
        <p>Number of exercises {total}</p>
    )
}

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
)

export default App
