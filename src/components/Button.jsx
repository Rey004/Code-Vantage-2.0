import React from 'react'

const Button = ({ name = 'Button', link = '#' }) => {
    return (
      <button>
          {name}
      </button>
    )
  }
export default Button
