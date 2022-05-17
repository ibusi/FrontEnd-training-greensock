import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo_logo.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef2 = useRef()
  const outlineLogoRef3 = useRef()
  const outlineLogoRef4 = useRef()
  const outlineLogoRef5 = useRef()
  const outlineLogoRef6 = useRef()
  const outlineLogoRef7 = useRef()
  const outlineLogoRef8 = useRef()
  const outlineLogoRef9 = useRef()
  const outlineLogoRef10 = useRef()
  const outlineLogoRef11 = useRef()
  const outlineLogoRef12 = useRef()
  const outlineLogoRef13 = useRef()
  const outlineLogoRef14 = useRef()
  const outlineLogoRef15 = useRef()
  const outlineLogoRef16 = useRef()
  const outlineLogoRef17 = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 2,
        opacity: 1,
      }).from(outlineLogoRef2.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef3.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef4.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef5.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef6.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef7.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef8.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef9.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef10.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef11.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef12.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef13.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef14.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef15.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef16.current, {
        drawSVG: 0,
        duration: 0.3,
      }).from(outlineLogoRef17.current, {
        drawSVG: 0,
        duration: 0.3,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        drawSVG: 1,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="Logo"
      />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
        >
          <path ref={outlineLogoRef2} d="M 315.5,76.5 C 324.425,83.7561 332.759,91.7561 340.5,100.5C 332.833,108.833 324.833,116.833 316.5,124.5C 308.167,116.833 300.167,108.833 292.5,100.5C 300.188,92.4794 307.855,84.4794 315.5,76.5 Z"></path>
          <path ref={outlineLogoRef3} d="M 274.5,114.5 C 283.425,121.756 291.759,129.756 299.5,138.5C 291.833,146.833 283.833,154.833 275.5,162.5C 267.167,154.833 259.167,146.833 251.5,138.5C 259.188,130.479 266.855,122.479 274.5,114.5 Z"></path>
          <path ref={outlineLogoRef4} d="M 357.5,114.5 C 366.425,121.756 374.759,129.756 382.5,138.5C 374.833,146.833 366.833,154.833 358.5,162.5C 350.167,154.833 342.167,146.833 334.5,138.5C 342.188,130.479 349.855,122.479 357.5,114.5 Z"></path>
          <path ref={outlineLogoRef5} d="M 399.5,154.5 C 408.146,162.479 416.479,170.812 424.5,179.5C 416.5,188.167 408.167,196.5 399.5,204.5C 391.014,196.514 382.681,188.348 374.5,180C 383.036,171.632 391.369,163.132 399.5,154.5 Z"></path>
          <path ref={outlineLogoRef6} d="M 232.5,157.5 C 241.759,165.09 250.426,173.423 258.5,182.5C 250.5,191.167 242.167,199.5 233.5,207.5C 224.833,199.5 216.5,191.167 208.5,182.5C 216.521,174.146 224.521,165.813 232.5,157.5 Z"></path>
          <path ref={outlineLogoRef7} d="M 315.5,158.5 C 324.425,165.756 332.759,173.756 340.5,182.5C 332.833,190.833 324.833,198.833 316.5,206.5C 308.167,198.833 300.167,190.833 292.5,182.5C 300.188,174.479 307.855,166.479 315.5,158.5 Z"></path>
          <path ref={outlineLogoRef8} d="M 438.5,194.5 C 447.759,202.09 456.426,210.423 464.5,219.5C 456.5,228.167 448.167,236.5 439.5,244.5C 430.833,236.5 422.5,228.167 414.5,219.5C 422.521,211.146 430.521,202.813 438.5,194.5 Z"></path>
          <path ref={outlineLogoRef9} d="M 192.5,198.5 C 201.759,206.09 210.426,214.423 218.5,223.5C 210.5,232.167 202.167,240.5 193.5,248.5C 184.833,240.5 176.5,232.167 168.5,223.5C 176.521,215.146 184.521,206.813 192.5,198.5 Z"></path>
          <path ref={outlineLogoRef10} d="M 357.5,198.5 C 366.759,206.09 375.426,214.423 383.5,223.5C 375.5,232.167 367.167,240.5 358.5,248.5C 349.833,240.5 341.5,232.167 333.5,223.5C 341.521,215.146 349.521,206.813 357.5,198.5 Z"></path>
          <path ref={outlineLogoRef11} d="M 273.5,199.5 C 282.759,207.09 291.426,215.423 299.5,224.5C 291.5,233.167 283.167,241.5 274.5,249.5C 265.833,241.5 257.5,233.167 249.5,224.5C 257.521,216.146 265.521,207.813 273.5,199.5 Z"></path>
          <path ref={outlineLogoRef12} d="M 314.5,237.5 C 323.759,245.09 332.426,253.423 340.5,262.5C 332.5,271.167 324.167,279.5 315.5,287.5C 306.833,279.5 298.5,271.167 290.5,262.5C 298.521,254.146 306.521,245.813 314.5,237.5 Z"></path>
          <path ref={outlineLogoRef13} d="M 398.5,237.5 C 407.759,245.09 416.426,253.423 424.5,262.5C 416.5,271.167 408.167,279.5 399.5,287.5C 390.833,279.5 382.5,271.167 374.5,262.5C 382.521,254.146 390.521,245.813 398.5,237.5 Z"></path>
          <path ref={outlineLogoRef14} d="M 232.5,239.5 C 241.759,247.09 250.426,255.423 258.5,264.5C 250.5,273.167 242.167,281.5 233.5,289.5C 224.833,281.5 216.5,273.167 208.5,264.5C 216.521,256.146 224.521,247.813 232.5,239.5 Z"></path>
          <path ref={outlineLogoRef15} d="M 272.5,279.5 C 281.759,287.09 290.426,295.423 298.5,304.5C 290.5,313.167 282.167,321.5 273.5,329.5C 264.833,321.5 256.5,313.167 248.5,304.5C 256.521,296.146 264.521,287.813 272.5,279.5 Z"></path>
          <path ref={outlineLogoRef16} d="M 354.5,280.5 C 363.759,288.09 372.426,296.423 380.5,305.5C 372.5,314.167 364.167,322.5 355.5,330.5C 346.833,322.5 338.5,314.167 330.5,305.5C 338.521,297.146 346.521,288.813 354.5,280.5 Z"></path>
          <path ref={outlineLogoRef17} d="M 313.5,320.5 C 322.759,328.09 331.426,336.423 339.5,345.5C 331.5,354.167 323.167,362.5 314.5,370.5C 305.833,362.5 297.5,354.167 289.5,345.5C 297.521,337.146 305.521,328.813 313.5,320.5 Z"></path>
        </g>
      </svg>
    </div>
  )
}

export default Logo
