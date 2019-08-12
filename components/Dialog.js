import { useRef, useEffect } from "react"
import colors from "../lib/colors"

function useOutsideAlerter(ref, close) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      close()
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter({ open, close, children }) {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, close)
  return (
    <div ref={wrapperRef}>
      <button
        className='close-button'
        onClick={() => {
          console.log("Clicked")
          close()
        }}
      >
        Fechar
      </button>
      <div className='container'>{children}</div>
      <style jsx>{`
        z-index: 99;
        pointer-events: ${open ? "inherit" : "none"};
        transition: opacity 0.6s ease;
        opacity: ${open ? "1" : "0"};
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        width: 70%;
        height: 300px;
        .container {
          /* position: relative;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%); */
          background: ${colors.light2};
          border: 1px solid ${colors.color1};
          padding: 50px 15px;
          border-radius: 35px;
          margin: 0 auto;
        }
        .close-button {
          position: relative;
          top: 30px;
          border-radius: 5px;
          background: ${colors.color1};
          color: ${colors.light};
          width: 100px;
          height: 45px;
          z-index: 100;
          text-align: center;
        }
        .close-button button {
          text-tranform: uppercase;
        }
      `}</style>
    </div>
  )
}
