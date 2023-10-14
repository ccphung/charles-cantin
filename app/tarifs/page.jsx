import Image from "next/image"
import './tarif.css'
import Link from "next/link"

const page = () => {
  return (<>
     <header>
        <div className="photo-header-container">
            <Image
                src="/Images/Bapteme/walter-gadea-ZesabV4krEE-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/Images/Bebes/jonathan-borba-CgWTqYxHEkg-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/Images/Portrait/edward-cisneros-_H6wpor9mjs-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/Images/Mariage/marc-a-sporys-NO8Sj4dKE8k-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/Images/Grossesse/camylla-battani-son4VHt4Ld0-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/Images/Couple/carly-rae-hobbins-zNHOIzjJiyA-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/Images/Famille/nathan-dumlao-Wr3comVZJxU-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/Images/Logo/logo.png"
                width={200}
                height={150}
            />
        </div>
    </header>
    <main>
        <div className="title-container">
            <h2>Séance photo : Tarifs et prestations</h2>
        </div>

        <section className="row">

            {/* Portrait */}
            <div className="col-md-6 col-sm-12 col-lg-4">
                <div class="card m-3">
                    <Image class="card-img-top" src="/Images/Portrait/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">«Juste moi » <span className="colored-text">130 euros</span> </h5>
                        <p class="card-text">Séance pour une personne, en extérieur ou en studio</p>
                        <Link href="\contact"><button className="btn">Nous contacter</button></Link>
                    </div>
                </div>
            </div>


            {/* Couple */}
            <div className="col-md-6 col-sm-12 col-lg-4">
                <div class="card m-3">
                    <Image class="card-img-top" src="/Images/Couple/candice-picard-vLENm-coX5Y-unsplash.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">« Pour deux »<span className="colored-text"> 195 euros</span></h5>
                        <p class="card-text">Pour deux personnes, en extérieur ou en studio</p>
                        <Link href="\contact"><button className="btn">Nous contacter</button></Link>
                    </div>
                </div>
            </div>


            {/* Family */}
            <div className="col-md-6 col-sm-12 col-lg-4">
                <div class="card m-3">
                    <Image class="card-img-top" src="/Images/Famille/kadyn-pierce-L203i9Xi_XE-unsplash.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">« Famille » <span className="colored-text">220 euros</span></h5>
                        <p class="card-text">Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
                            0 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)</p>
                        <Link href="\contact"><button className="btn">Nous contacter</button></Link>
                    </div>
                </div>
            </div>
                        
            {/* Pregnancy */}
            <div className="col-md-6 col-sm-12 col-lg-4">
                <div class="card m-3">
                    <Image class="card-img-top" src="/Images/Grossesse/kelly-sikkema-IE8KfewAp-w-unsplash.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">« Il était une fois » <span className="colored-text">160 euros</span></h5>
                        <p class="card-text">Photo de grossesse (À votre domicile, en extérieur ou en studio)</p>
                        <Link href="\contact"><button className="btn">Nous contacter</button></Link>
                    </div>
                </div>
            </div>

            {/* Baby */}
            <div className="col-md-6 col-sm-12 col-lg-4">
                <div class="card m-3">
                    <Image class="card-img-top" src="/Images/Bebes/yuri-tasso-RjCs9ywcnz8-unsplash.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">« Mon bébé » <span className="colored-text">100 euros</span></h5>
                        <p class="card-text">Photo d’enfant jusqu’à 3 ans (photo à domicile)</p>
                        <Link href="\contact"><button className="btn">Nous contacter</button></Link>
                    </div>
                </div>
            </div>

            {/* Evenement */}
            <div className="col-md-6 col-sm-12 col-lg-4">
                <div class="card m-3">
                    <Image class="card-img-top" src="/Images/Bapteme/josh-applegate-mjn1LcoU1Cw-unsplash.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">« J’immortalise l’événement » <span className="colored-text">sur mesure</span></h5>
                        <p class="card-text">Prestation de mariage ou baptême sur devis</p>
                        <Link href="\contact"><button className="btn">Nous contacter</button></Link>
                    </div>
                </div>
            </div>
        </section>
    </main>

    </>
  )
}

export default page