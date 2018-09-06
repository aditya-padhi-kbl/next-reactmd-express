import Document, { Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <html>
                <Head>
                    <title>Application Dashboard</title>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}