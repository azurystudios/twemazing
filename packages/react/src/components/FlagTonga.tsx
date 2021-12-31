import React from 'react'

const FlagTonga = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C10000" d="M32 5H15v13H0v9c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#EEEDED" d="M15 5H4C1.791 5 0 6.791 0 9v9h15V5zm-3 8H9v3H6v-3H3v-3h3V7h3v3h3v3z"/><path fill="#C10000" d="M9 7H6v3H3v3h3v3h3v-3h3v-3H9z"/></svg>
  )
}

export default FlagTonga