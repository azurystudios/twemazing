import React from 'react'

const Compass = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#F4900C" cx="18" cy="18" r="18"/><circle fill="#FFD983" cx="18" cy="18" r="14.5"/><circle fill="#F5F8FA" cx="18" cy="18" r="13"/><path fill="#CCD6DD" d="M18 8l1.531 6.304 5.54-3.375-3.375 5.54L28 18l-6.304 1.531 3.375 5.54-5.54-3.375L18 28l-1.531-6.304-5.54 3.375 3.375-5.54L8 18l6.304-1.531-3.375-5.54 5.54 3.375z"/><path fill="#292F33" d="M17.343 20.748l8.777 5.381-5.379-8.778z"/><path fill="#DD2E44" d="M18.657 15.267L9.879 9.886l5.38 8.779z"/><circle fill="#8899A6" cx="18" cy="18.008" r="3.055"/><circle fill="#F5F8FA" cx="18" cy="18.008" r="1.648"/></svg>
  )
}

export default Compass