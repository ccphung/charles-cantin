"use client"
import { useEffect, useState } from "react"
import './contact.css'
import Image from "next/image"

const contact = () => {

	const handlePriceChange = (event) => {
		setSelectedOption(event.target.value);
	};

  const handlePlaceChange = (event) => {
		setSelectedPlace(event.target.value);
	};

  const handleEventChange = (event) => {
		setSelectedEvent(event.target.value);
	};

  const [selectedOption, setSelectedOption] = useState("")
  const [selectedEvent, setSelectedEvent] = useState("")
  const [selectedPlace, setSelectedPlace] = useState("")
  const [displayPlaceOption, setDisplayPlaceOption] = useState('none')
  const [displayOccOption, setDisplayOccOption] = useState('none')
  const [requiredPlace, setRequiredPlace] = useState(false)
  const [requiredOcc, setRequiredOcc] = useState(false)
  const [displayHome, setDisplayHome] = useState('none')
  const [displayOutside, setDisplayOutside] = useState('none')
  const [displayStudio, setDisplayStudio] = useState('none')


/* Display the option menu and add require */
  useEffect(() => {
    if(selectedOption !== "événement"){
      setDisplayPlaceOption('block')
      setRequiredPlace(true)
      setDisplayOccOption('none')
      setRequiredOcc(false)
      
    } else {
      setDisplayPlaceOption('none')
      setRequiredPlace(false)
      setDisplayOccOption('block')
      setRequiredOcc(true)
    }
    },[selectedOption]
    )

/* Baby option */
  useEffect(() => {
      if(selectedOption === "bébé"){
        setDisplayHome('block')
        setDisplayStudio('none')
        setDisplayOutside('none')
     }
    },[selectedOption]
    )

  /* couple, portrait and family option*/
  useEffect(() => {
      if(selectedOption === "couple" || selectedOption === "portrait" || selectedOption === "famille"){
        setDisplayHome('none')
        setDisplayStudio('block')
        setDisplayOutside('block')
      }
    },[selectedOption]
    )

  /* pregnancy option*/
  useEffect(() => {
    if(selectedOption === "grossesse") {
      setDisplayStudio('block')
      setDisplayHome('block')
      setDisplayOutside('block')
    }
  },[selectedOption]
  )

  return (<>
  <div className="d-flex justify-content-center mx-auto">
        <Image
          src="/images/portrait/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg"
          width={450}
          height={600}
          className="card picture"
          alt="woman portrait"/>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-8 p-3 card">
            <h2 className="text-center">Nous contacter</h2>
            <form   action="https://formspree.io/f/xeqbpbor" method="POST">
              {/* Lastname input */}
              <div className="row">
                <div class="form mb-3 col-6">
                  <input type="text" id="last-name" name="last-name" class="form-control" required/>
                  <label class="form-label" for="last-name">Nom</label>
                </div>
              {/* Firstame input */}
                <div class="form-outline mb-3 col-6">
                  <input type="text" id="first-name" name="first-name" class="form-control" required/>
                  <label class="form-label" for="first-name">Prénom</label>
                </div>
                </div>

              {/* Email input */}
                <div class="form-outline mb-3">
                  <input type="email" id="email" name="email" class="form-control" required/>
                  <label class="form-label" for="email">Adresse email</label>
                </div>

              {/* Select option */}
                <div class="form-outline mb-3">
                  <select class="form-select" name="price-option"  id="price-option" value={selectedOption} onChange={handlePriceChange} required>
                      <option value="" selected>Choisir la formule...</option>
                      <option value="portrait">Juste moi</option>
                      <option value="couple">Pour deux</option>
                      <option value="famille">Famille</option>
                      <option value="grossesse">Il était une fois</option>
                      <option value="bébé">Mon bébé</option>
                      <option value="événement">J'immortalise l'événement</option>
                  </select>
                </div>

                {/* Select place option */}
                <div class="form-outline mb-3" style={{display:displayPlaceOption}}>
                  <select class="form-select" name="place-option" id="place-option" required={requiredPlace} onChange={handlePlaceChange}>
                  <option value="" selected>Choisir le lieu...</option>
                  <option value="extérieur" style={{display:displayOutside}}>En extérieur</option>
                  <option value="studio" style={{display:displayStudio}}>En studio</option>
                  <option value="domicile" style={{display:displayHome}}>A votre domicile</option>
                  </select>
                </div>

                {/* Select occasion */}
                <div class="form-outline mb-3" style={{display:displayOccOption}}>
                  <select class="form-select" name="event-option" id="event-option" required={requiredOcc} onChange={handleEventChange}>
                  <option value="" selected>Choisir l'événement</option>
                  <option value="mariage">Mariage</option>
                  <option value="baptème">Baptème</option>
                  </select>
                </div>

                {/* Message input */}
                <div class="form-outline mb-3">
                  <textarea class="form-control"  name="message" id="message" rows="4"></textarea>
                  <label class="form-label" for="message">Message</label>
                </div>

                {/* Recap */}
                <div>
                  <div className="recap-text text-center">Récapitulatif</div>
                    <p className="text-center">Formule choisie: <span className="selected-option">{selectedOption}</span></p>
                    <p className="text-center" style={{display:displayPlaceOption}}>Lieu: <span className="selected-option">{selectedPlace}</span></p>
                    <p className="text-center" style={{display:displayOccOption}}>Evénement: <span className="selected-option">{selectedEvent}</span></p>
                </div>

              {/* Submit button  */}
              <div className="d-flex justify-content-center">
                <button type="submit" class="btn btn-block mb-4">Envoyer</button>
              </div>
          </form>
        </div>
    </div>
</div>
</>
  )
}

export default contact