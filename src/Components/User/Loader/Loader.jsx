import ContentLoader from "react-content-loader"

import style from "./Loader.module.css"

const size = 4
const arr = new Array(size).fill(0)

const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      {arr.map((el) => (
        <ContentLoader
          speed={2}
          width={300}
          height={590}
          viewBox="0 0 350 590"
          backgroundColor="gray"
          foregroundColor="#ecebeb"
          key={crypto.randomUUID()}
        >
          <rect x="-3" y="0" rx="3" ry="3" width="351" height="588" />
        </ContentLoader>
      ))}
    </div>
  )
}
export default Loader
