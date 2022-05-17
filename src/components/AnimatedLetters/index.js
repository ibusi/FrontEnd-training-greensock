import './index.scss'

const AnimatedLetters = ({ letterClass, strArray }) => {
  return (
    < span >
      {
        strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass}`}>
            {char}
          </span>
        ))
      }
    </span >
  )
}

export default AnimatedLetters
