import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({courses}) => {
    return (
        courses.map(course =>
            <div key={course.id}>
                <Header name={course.name} />
                <table>
                <Content parts={course.parts} />
            </table>
            <Total parts={course.parts} />
            </div>
        )
    )
}

export default Course