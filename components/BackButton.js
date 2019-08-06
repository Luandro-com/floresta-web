import Router from "next/router"
import Arrows from "./Arrows"
import colors from "../lib/colors"

export default function BackButton({ to }) {
  return (
    <button onClick={() => Router.push(to)}>
      <Arrows size='10px' left top={"64%"} left={"17px"} />
      Voltar
      <style jsx>{`
        cursor: pointer;
        background: ${colors.dark};
        text-transform: uppercase;
        padding: 12px 25px 12px 50px;
        border-radius: 10px;
        color: ${colors.light};
      `}</style>
    </button>
  )
}
