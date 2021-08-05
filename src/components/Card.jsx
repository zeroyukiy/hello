import React, { useState } from 'react'

export function Card({ increment }) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    if (increment) {
      increment()
    }
  }

  return (
    <div className="card" onClick={handleClick}>
      <p>
        {count}
      </p>
    </div>
  )
}
