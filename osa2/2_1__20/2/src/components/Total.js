import React from 'react'

const Total = ({ parts }) => {
    return (
      <h2>total of {parts.reduce((sum, current) => sum + current.exercises, 0)} exercises</h2>
    )
}

export default Total