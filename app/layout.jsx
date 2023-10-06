import './globals.css'

export const metadata = {
    title: "Charles Cantin Photographe",
    description: ''
}

const Rootlayout = ({children}) => {
  return (
    <html lang="fr">
        <body>
          <main>
              {children}
          </main>
        </body>

    </html>
  )
}

export default Rootlayout