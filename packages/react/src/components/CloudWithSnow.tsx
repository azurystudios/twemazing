import React from 'react'

const CloudWithSnow = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E1E8ED" d="M28 4c-.825 0-1.62.125-2.369.357C24.744 1.822 22.338 0 19.5 0c-3.044 0-5.592 2.096-6.299 4.921C12.447 4.351 11.519 4 10.5 4 8.015 4 6 6.015 6 8.5c0 .604.123 1.178.339 1.704C5.91 10.085 5.467 10 5 10c-2.762 0-5 2.238-5 5s2.238 5 5 5h23c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8z"/><path d="M6.53 26.75c-.138-.239-.443-.32-.683-.183L4 27.634V25.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684L2.499 28.5.651 29.567c-.239.138-.32.443-.183.683.138.24.443.321.683.184L3 29.366V31.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L4.5 28.5l1.848-1.067c.239-.138.321-.443.182-.683zm10 4c-.138-.239-.443-.32-.683-.183L14 31.634V29.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L13 33.366V35.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L14.5 32.5l1.848-1.067c.239-.138.321-.443.182-.683zM11 27.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L12.5 24.5l1.848-1.067c.239-.139.321-.443.183-.684-.138-.239-.443-.32-.683-.183L12 23.634V21.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L11 25.366V27.5zm12.848-.066c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L22.5 25.5l1.848-1.067c.239-.139.321-.443.183-.684-.138-.239-.443-.32-.683-.183L22 24.634V22.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L21 26.366V28.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067zm10.5-1.867L32.5 24.5l1.848-1.067c.239-.139.321-.443.183-.684-.138-.239-.443-.32-.683-.183L32 23.634V21.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L31 25.366V27.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.137-.239.056-.545-.183-.683zM29.53 30.75c-.138-.239-.443-.32-.683-.183L27 31.634V29.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.135l-1.849-1.067c-.239-.138-.545-.057-.683.183-.139.24-.057.545.183.684l1.848 1.067-1.848 1.067c-.239.138-.32.443-.183.683.138.24.443.321.683.184L26 33.366V35.5c0 .276.224.5.5.5s.5-.224.5-.5v-2.133l1.848 1.067c.239.138.545.057.683-.184.138-.239.057-.545-.183-.683L27.5 32.5l1.848-1.067c.239-.138.321-.443.182-.683z" fill="#5DADEC"/></svg>
  )
}

export default CloudWithSnow