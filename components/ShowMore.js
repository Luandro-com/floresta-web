import colors from "../lib/colors"

export default ({ open, set, html }) => {
  return (
    <div>
      <div className={open ? "open container" : "container"}>
        <div
          className='description dark medium'
          dangerouslySetInnerHTML={{
            __html: html
          }}
        />
      </div>
      <button onClick={() => (open ? set(false) : set(true))}>
        Mostrar {open ? "menos" : "mais"}
      </button>
      <style jsx>{`
        button {
          background: ${colors.color1};
          border-radius: 12px;
          padding: 9px 15px;
          margin: 0 auto;
          text-transform: uppercase;
          cursor: pointer;
        }
        .container {
          max-width: 968px;
          transition: all 1s ease;
          max-height: 0;
          opacity: 0;
          pointer-events: ${open ? "inherit" : "none"};
          padding: 30px 0;
          /* background: ${colors.light2}; */
        }
        .open {
          max-height: 3000px;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}
