const Course = ({ course }) => (
    <>
        <h2>{course.name}</h2>
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
        <p><strong>Total of {total} exercises</strong></p>
    )
}

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
)

export default Course
