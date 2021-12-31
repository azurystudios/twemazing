import React from 'react'

const BellWithSlash = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFAC33" d="M28 13c0 11 5 10 5 15 0 0 0 2-2 2H5c-2 0-2-2-2-2 0-5 5-4 5-15C8 7.478 12.477 3 18 3s10 4.478 10 10z"/><circle fill="#FFAC33" cx="18" cy="3" r="3"/><path fill="#FFAC33" d="M18 36c2.209 0 4-1.791 4-4h-8c0 2.209 1.791 4 4 4z"/><path fill="#DD2E44" d="M31.003 33.003L3.997 5.997c-.551-.551-.551-1.443 0-1.994l.006-.006c.551-.551 1.443-.551 1.994 0l27.006 27.006c.551.551.551 1.443 0 1.994l-.006.006c-.551.551-1.443.551-1.994 0z"/></svg>
  )
}

export default BellWithSlash