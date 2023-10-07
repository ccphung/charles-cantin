import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <>
   {/* Logo */}

    <div className="d-flex justify-content-between p-3 nav-index">
    
    <Link href="/" className="logo-link">
      <Image
        src="/images/logo/logo.png"
        height="150"
        width="150"
        className="p-4 logo "
        /> 
    </Link>
    
    {/* Bootstrap navbar */}
      <nav class="navbar navbar-expand-lg navbar-menu nav-index">
        <div class="container-fluid d-flex justify-content-end">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"    aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <div class="d-flex justify-content-end">
                  <li class="nav-item">
                  <Link className="link-nav" href="/">Accueil</Link>
                </li>
                </div>
                <div class="d-flex justify-content-end">
                  <li class="nav-item">
                  <Link className="link-nav" href="/galerie">Galerie</Link>
                </li>
                </div>
                <div class="d-flex justify-content-end">
                  <li class="nav-item">
                  <Link className="link-nav" href="/tarifs">Tarifs</Link>
                </li>
                </div>
                <div class="d-flex justify-content-end">
                  <li class="nav-item">
                  <Link className="link-nav" href="/contact">Contact</Link>
                </li>
                </div>
              </ul>
              </div>
          </div>
      </nav>
    </div>
  </>
  )
}

export default Nav