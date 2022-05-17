import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoS from '../../assets/images/logo-s.png'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container-about">
        <div className="text-zone">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          />
        </div>
        <div className="text-about">
          <p>
            改めましてご覧いただきありがとうございます。<br />
            現在はネットワークエンジニアとして働いております。<br />
            とてもやりがいのある仕事ではあるのですが<br />
            場所にとらわれない働き方や<br />
            元々興味のあったフロントエンジニアとして働きたく<br />
            勉強を始めました。<br />
            いざ勉強を始めるとわかってはいましたが<br />
            とても難しく苦戦の日々でした。<br />
            しかし同時に楽しさも感じ、どんどんはまっていきました。<br />
            まだまだ勉強中の身ではありますが<br />
            フロントエンドエンジニアとしてのスタートを<br />
            一日でも早く切りたいと思っています。<br />
            どうぞよろしくお願いいたします。<br />
            <Link to="/History" className="history-button">
              History
            </Link>
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={LogoS} alt="Logo" />
            </div>
            <div className="face2">
              <img src={LogoS} alt="Logo" />
            </div>
            <div className="face3">
              <img src={LogoS} alt="Logo" />
            </div>
            <div className="face4">
              <img src={LogoS} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="semi-circle-spin" />
    </>
  )
}

export default About
