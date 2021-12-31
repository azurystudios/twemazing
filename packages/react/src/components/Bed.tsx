import React from 'react'

const Bed = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C1694F" d="M1 28h34v5H1z"/><path fill="#C1694F" d="M36 35c0 .553-.447 1-1 1-.553 0-1-.447-1-1V21c0-.553.447-1 1-1 .553 0 1 .447 1 1v14zM0 35c0 .553.447 1 1 1 .553 0 1-.447 1-1V13c0-.552-.447-1-1-1-.553 0-1 .448-1 1v22z"/><path fill="#269" d="M32 23H4c-1.104 0-2 .896-2 2v4h32v-4c0-1.104-.896-2-2-2z"/><path fill="#55ACEE" d="M32 23H4c-1.104 0-2 .896-2 2v4h32v-4c0-1.104-.896-2-2-2z"/><path fill="#5C913B" d="M2.126 19.938c-.261 1.073 1.485 2.419 3.9 3.006 2.415.587 4.584.192 4.846-.881.261-1.073-1.485-2.419-3.9-3.007-2.415-.587-4.585-.192-4.846.882z"/></svg>
  )
}

export default Bed