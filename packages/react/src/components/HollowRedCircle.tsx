import React from 'react'

const HollowRedCircle = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0zm0 30c-6.627 0-12-5.373-12-12S11.373 6 18 6s12 5.373 12 12-5.373 12-12 12z"/></svg>
  )
}

export default HollowRedCircle