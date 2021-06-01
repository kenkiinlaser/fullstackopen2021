import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
    return (
        <>
            <Header name={course.name} />
            <table>
                <Content parts={course.parts} />
            </table>
        </>
    )
}

export default Course