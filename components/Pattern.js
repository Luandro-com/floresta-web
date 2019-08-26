import colors from '../lib/colors'

export default ({ children, pattern, width, backgrundColor }) => {
  return (
    <div className='pattern'>
      <div className='container'>{children}</div>
      <style jsx>{`
        /* margin-top: 12vh; */
        .pattern {
          background: ${backgrundColor || colors.color4};
          background-image: url("${pattern}");
          background-repeat: round;
        }
        .container {
          margin: 0 auto;
          width: ${width || '90%'};
          background: ${colors.light2};
          min-height: 100vh;
          padding: 2vh;
          /* margin-top: 30vh; */
        }
        .description {
          color: ${colors.color1};
        }
        @media screen and (min-width: 480px) {
          .container {
            width: ${width || '85%'};
            padding: 5vh;
          }
        }
        @media screen and (min-width: 640px) {
          .container {
            width: ${width || '80%'};
          }
        }
        @media screen and (min-width: 1024px) {
          margin-top: 0;
          .container {
            max-width: 968px;
            padding: 5vh 30vh;
          }
          .description {
            font-size: 1.2em;
          }
        }
      `}</style>
    </div>
  )
}
