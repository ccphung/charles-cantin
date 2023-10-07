import Image from "next/image";

const Nav = () => {
  return (
    <>
   {/* Logo */}
    <div className="d-flex justify-content-between p-3 nav-index">
      <Image
        src="/images/logo/logo.png"
        height="150"
        width="150"
        className="p-4 logo "
        />

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
                  <a class="nav-link" href="#">Accueil</a>
                </li>
                </div>
                <div class="d-flex justify-content-end">
                  <li class="nav-item">
                  <a class="nav-link" href="#">Galerie</a>
                </li>
                </div>
                <div class="d-flex justify-content-end">
                  <li class="nav-item">
                  <a class="nav-link" href="#">Tarifs</a>
                </li>
                </div>
                <div class="d-flex justify-content-end">
                  <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
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