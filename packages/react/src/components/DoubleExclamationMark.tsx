import React from 'react'

const DoubleExclamationMark = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#BE1931" cx="11" cy="31" r="3"/><path fill="#BE1931" d="M14 23c0 1.657-1.343 3-3 3s-3-1.343-3-3V4c0-1.657 1.343-3 3-3s3 1.343 3 3v19z"/><circle fill="#BE1931" cx="25" cy="31" r="3"/><path fill="#BE1931" d="M28 23c0 1.657-1.344 3-3 3s-3-1.343-3-3V4c0-1.657 1.344-3 3-3s3 1.343 3 3v19z"/></svg>
  )
}

export default DoubleExclamationMark