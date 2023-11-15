import { Helmet } from "react-helmet"

const DocumentTitle = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} - Mi Butaca</title>
    </Helmet>
  )
}
export default DocumentTitle
