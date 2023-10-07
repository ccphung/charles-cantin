import Image from "next/image"
import './tarif.css'

const page = () => {
  return (<>
     <header>
        <div className="photo-header-container">
            <Image
                src="/images/logo/logo.png"
                width={200}
                height={150}
            />
            <Image
                src="/images/bebes/jonathan-borba-CgWTqYxHEkg-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/images/portrait/edward-cisneros-_H6wpor9mjs-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/images/mariage/marc-a-sporys-NO8Sj4dKE8k-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/images/grossesse/camylla-battani-son4VHt4Ld0-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/images/couple/carly-rae-hobbins-zNHOIzjJiyA-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/images/famille/nathan-dumlao-Wr3comVZJxU-unsplash.jpg"
                width={200}
                height={150}
            />
            <Image
                src="/images/bapteme/walter-gadea-ZesabV4krEE-unsplash.jpg"
                width={200}
                height={150}
            />
        </div>
    </header>
    <main>
        <div className="title-container">
            <h1>Séance photo : Tarifs et prestations</h1>
        </div>

    </main>


    <div>
        <ul>
            <li>
                <h3>«Juste moi » 130 euros </h3>
                <p>Séance pour une personne, en extérieur ou en studio</p>
            </li>

            <li>
                <div>« Pour deux » 195 euros</div>
                <p>Pour deux personnes, en extérieur ou en studio</p>
            </li>

            <li>
                <div>« Famille » 220 euros </div>
                <p>Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
                0 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)</p>
            </li>
            <li>
                <div>« Il était une fois » 160 euros</div>
                 <p>Photo de grossesse (À votre domicile, en extérieur ou en studio)</p>
            </li>

            <li>
            <Image
                    src="/images/bebes/jonathan-borba-CgWTqYxHEkg-unsplash.jpg"
                    width={400}
                    height={300}
                />
                <div>« Mon bébé » 100 euros</div>
                 <p>Photo d’enfant jusqu’à 3 ans (photo à domicile)</p>
            </li>

            <li>
                <div>«Juste moi » 130 euros </div>
                 <p>Séance pour une personne, en extérieur ou en studio</p>
            </li>

        </ul>
    </div>
    </>
  )
}

export default page