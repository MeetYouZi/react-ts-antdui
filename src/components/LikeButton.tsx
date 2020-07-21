import React, { useState, useContext } from "react";
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const theme = useContext(ThemeContext)
  console.log(theme)

  const style = {
    background: theme.background,
    color: theme.color
  }

  return (
    <button style={style} onClick={() => {setLike(like +1)}}>
      {like}
    </button>
  )
}

export default LikeButton
