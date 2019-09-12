import ReactFitText from 'react-fittext'

export default ({ children, maxFontSize }) => {
  if (process.browser) {
    return <ReactFitText maxFontSize={maxFontSize}>{children}</ReactFitText>
  } else return <div>{children}</div>
}
