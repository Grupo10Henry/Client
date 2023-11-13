import { Helmet } from "react-helmet"

const DocumentTitle = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} - Mi Butaca</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  )
}
export default DocumentTitle
