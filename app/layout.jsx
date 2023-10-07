import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "../components/importBsJS";
import Nav from '@/components/Nav';

export const metadata = {
    title: "Charles Cantin Photographe",
    description: ''
}

const Rootlayout = ({children}) => {
  return (
    <html lang="fr">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Lustria&display=swap" rel="stylesheet"/>
      <link rel="icon" href="/images/logo/logo.png" sizes="any" />
      </head>
        <body>
          <ImportBsJS />
          <Nav/>
          <main>
            {children}
          </main>
        </body>
    </html>
  )
}

export default Rootlayout