import App from "../components/App"
import { withRouter } from "next/router"
import Welcome from "../components/Welcome"
import Loading from "../components/Loading"

const Page = ({
  router: {
    query: { slug }
  }
}) => {
  return (
    <App>
      <Welcome />
      {slug ? (
        <div>
          <div>{slug}</div>
        </div>
      ) : (
        <Loading />
      )}
    </App>
  )
}
export default withRouter(Page)
