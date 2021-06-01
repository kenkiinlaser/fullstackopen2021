import React from 'react'
import Part from './Part'

const Content = (course) => {
    return(
        <tbody>
            <Part parts={course.parts} />
        </tbody>
    )
}

export default Content