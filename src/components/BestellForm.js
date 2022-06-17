import React, {useState} from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import { send } from 'emailjs-com';

import './BestellForm.css'


function BestellForm() {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(1);
    const [toSend, setToSend] = useState({
        from_count: {count},
        to_name: '',
        message: '',
        reply_to: '',
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function onChange(value) {
        console.log('Captcha value:', value);
    }

    return (
        <>
          <Button className="bestell-button" variant="primary" onClick={handleShow}>
            Versandtkostenfrei bestellen
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Bestellung</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form method="POST" action="https://getform.io/f/aa766a92-ff6c-4647-be09-e189d0caa7f3">
                <Form.Group className="mb-3" controlId="formBasicAnzahlBuecher">
                  <Form.Label></Form.Label>
                  <p className="mb-3 d-flex align-items-baseline">
                    Hier mit bestelle ich <Form.Control name="Anzahl" value={count} onChange={(e) => setCount(e.target.value)} style={{margin: "0 0.5em", width: "4em"}} type="number" min="1" max="100" /> Exemplar(e).
                  </p>
                  <p>Kosten: { count * 12.90 }  EUR (Versant kostenfrei)</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  {/* <Form.Label>Anschrift</Form.Label> */}
                  <Form.Control required type="email" placeholder="Email" name="Email"/>
                  <Form.Control placeholder="Strasse" name="Strasse"/>
                  <div className="d-flex">
                    <Form.Control required style={{width: "50%"}} placeholder="PLZ" name="PLZ"/>
                    <Form.Control required  style={{width: "50%"}} placeholder="Ort" name="Ort"/>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check style={{fontSize: "0.8em"}} required type="checkbox" label="Allgemeine Geschäftsbedingungen und Datenschutzrichtlinien habe ich gelesen und akzeptiert." name="check"/>
                </Form.Group>
                <Button className="bestell-button" variant="primary" type="submit">
                  Bestellung absenden
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </>
    );
}



export default BestellForm
