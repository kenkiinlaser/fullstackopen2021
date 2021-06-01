import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    return (
        <>
            <Header name={course.name} />
            <table>
                <Content parts={course.parts} />
            </table>
            <Total parts={course.parts} />
        </>
    )
}

export default Course