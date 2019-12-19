import Head from "next/head";

const Meta = ({ props = { title: "", description: "", image: "", url: "", keywords: "" } }) => (
  <div>
    <Head>
      <title>{props.title || "Lifeline 16911"}</title>
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="description" content={props.description || "Lifeline 16911"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={props.keywords || "Lifeline 16911"} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={props.title || "Lifeline 16911"} />
      <meta property="og:description" content={props.description || "Lifeline 16911"} />
      <meta property="og:image" content={props.image ? props.image.replace("https://", "http://") : "https://lifeline.com.ph"} />
      <meta property="og:image:secure_url" content={props.image || "https://lifeline.com.ph"} />
      <meta property="og:image:type" content="image/jpeg" />
      {/* <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" /> */}
      <meta property="og:url" content={props.url || "https://lifeline.com.ph"} />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      // integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      // crossOrigin="anonymous"
      />
    </Head>
  </div>
)

export default Meta
