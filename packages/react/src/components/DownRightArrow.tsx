import React from 'react'

const DownRightArrow = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M0 4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4z"/><path fill="#FFF" d="M27 11v16H11z"/><path fill="#FFF" d="M7 12.657L12.658 7l13.814 13.814-5.656 5.657z"/></svg>
  )
}

export default DownRightArrow