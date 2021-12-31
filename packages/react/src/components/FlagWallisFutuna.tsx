import React from 'react'

const FlagWallisFutuna = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#ED2939" d="M32 5H18v12H0v10c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#EEE" d="M0 16h19v2H0z"/><path fill="#002395" d="M6 17H0V9c0-2.209 1.791-4 4-4h2v12z"/><path fill="#EEE" d="M6 5h6v12H6zm11 0h2v13h-2z"/><path fill="#ED2939" d="M12 5h6v12h-6z"/><path d="M24.38 22.32h6.24L27.5 19.2zM30.62 14h-6.24l3.12 3.12zm1.04 7.28v-6.24l-3.12 3.12zm-8.32-6.24v6.24l3.12-3.12z" fill="#FFF"/></svg>
  )
}

export default FlagWallisFutuna