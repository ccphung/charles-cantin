import "../public/styles/bootstrap.min.css"
import './globals.css'
import Navigation from '@/components/Navigation';

export const metadata = {
    title: "Charles Cantin Photographe",
    description: ''
}

const Rootlayout = ({children, pageProps}) => {
  return (
    <html lang="fr">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Lustria&display=swap" rel="stylesheet"/>
      <link rel="icon" href="/Images/Logo/logo.png" sizes="any" />
      </head>
        <body>
          <Navigation/>
          <main>
            {children}
          </main>
        </body>
    </html>
  )
}

export default Rootlayout