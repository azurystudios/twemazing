import React from 'react'

const EightOClock = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#99AAB5" cx="18" cy="18" r="18"/><circle fill="#E1E8ED" cx="18" cy="18" r="14"/><path fill="#66757F" d="M17 18c0 .553.448 1 1 1 .553 0 1-.447 1-1V7c0-.552-.447-1-1-1-.552 0-1 .448-1 1v11z"/><path fill="#66757F" d="M9.34 23c.275.479.887.643 1.365.367l7.795-4.5c.479-.276.642-.889.365-1.367-.275-.478-.887-.642-1.365-.365l-7.795 4.5c-.478.276-.642.887-.365 1.365z"/></svg>
  )
}

export default EightOClock