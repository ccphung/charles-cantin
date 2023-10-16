"use client"
import { useEffect, useState } from "react"
import '../../public/styles/contact.css'
import Image from "react-bootstrap/Image"
import Events from "@/components/Events"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
  const [filteredEvent, setFilteredEvent] = useState([]);

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

    useEffect(() => {
      setFilteredEvent(Events.filter(val => val.category === selectedOption))
    ,[selectedOption]})

  return (<>
    <Container>
      <Row>
        <Col lg={4} md={6}>
        <Image
          className="card-img picture"
          src="/Images/Portrait/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg"
          alt="woman portrait"
        />
        </Col>


        <Col lg={6} md={6}>
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
                  <option value="" selected>Choisir le lieu... </option>
                  {filteredEvent.map(Events =>   
                  <option key={Events.id}> 
                      {Events.lieu}
                  </option>)}
                  </select>
                </div>

                {/* Select occasion */}
                <div class="form-outline mb-3" style={{display:displayOccOption}}>
                  <select class="form-select" name="event-option" id="event-option" required={requiredOcc} onChange={handleEventChange}>
                    <option value="" selected>Choisir l'événement</option>
                    {filteredEvent.map(Events =>   
                    <option key={Events.id}> 
                      {Events.lieu}
                    </option>)}
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
                    <p className="text-center">Prix à partir de:
                        {filteredEvent.map(Events =>     
                            <span className="selected-option" key={Events.id}>
                              <p>{Events.prix}</p></span>)}</p>
                </div>

              {/* Submit button  */}
                <div className="d-flex justify-content-center">
                <button type="submit" class="btn btn-block mb-4">Envoyer</button>
              </div>
          </form>
        </Col>
      </Row>
    </Container>
</>
  )
}

export default contact