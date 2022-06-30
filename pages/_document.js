import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta description */}
          <meta
            name="description"
            content="EEESoc was established in the year 2013 to promote technical growth and overall development of the students of EEE department."
          />
          <meta
            name="EEESoc Website"
            content="Web site created using Next.js"
          />
          <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

          {/* Bootstrap CSS */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          />

          {/* Google fonts */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Chivo:wght@400;500;600;700&Fira+Code:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Bootstrap JS */}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossOrigin="anonymous"
            defer
          ></script>

          {/* Font awesome icons */}
          <script
            src="https://kit.fontawesome.com/55576ac1b8.js"
            crossOrigin="anonymous"
            defer
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
