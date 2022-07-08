import React from "react"

export default function ToggleButton() {
  const [isReadMore, setIsReadMore] = React.useState(true)

  function changeToggle(props) {
    setIsReadMore(prevState => !prevState)
  }

  return(
    <p onClick={changeToggle} className="cursor-pointer">{isReadMore ? 'Show More' : 'Show Less'}</p>
  )
}
