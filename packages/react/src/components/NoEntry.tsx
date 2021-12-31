import React from 'react'

const NoEntry = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#BE1931" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z"/><path fill="#FFF" d="M32 20c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-4c0-1.104.896-2 2-2h24c1.104 0 2 .896 2 2v4z"/></svg>
  )
}

export default NoEntry