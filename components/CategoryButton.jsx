import React from 'react'

const CategoryButton = ({name, handleClick}) => {
  return (
    <button onClick= {() => handleClick(name)}>
        {name.toUpperCase()}
    </button>
  )
}

export default CategoryButton