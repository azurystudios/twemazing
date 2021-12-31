import React from 'react'

const FlagMadagascar = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FC3D32" d="M32 5H13v13h23V9c0-2.209-1.791-4-4-4z"/><path fill="#007E3A" d="M13 31h19c2.209 0 4-1.791 4-4v-9H13v13z"/><path fill="#EEE" d="M13 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h9V5z"/></svg>
  )
}

export default FlagMadagascar