import React from 'react'

const RegionalIndicatorSymbolLetterN = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M8.591 9.156c0-1.55.992-2.418 2.326-2.418.589 0 1.55.465 1.954 1.023L22.7 20.877h.062V9.156c0-1.55.992-2.418 2.324-2.418 1.334 0 2.326.868 2.326 2.418v17.611c0 1.551-.992 2.418-2.326 2.418-.588 0-1.518-.465-1.953-1.022l-9.829-12.961h-.062v11.565c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.156z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterN