import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import createData from '../DinamicAxios/DinamicAxios'
import "../Section/Section.css"

const CreateData = () => {
  const [title, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [author, setSale] = useState('')
  const [img, setImg] = useState('')
  const navigate = useNavigate('')

  const createAllData = async () => {
    let data = {
      title: title,
      price: price,
      author: author,
      img: img,
    }
    let url = 'https://dbjsoninserver-production.up.railway.app/data'
    await createData(url, data)
      .then((res) => {
        if (res.status === 201) {
          alert("seccess")
          setLocation("")
          setPrice("")
          setSale("")
          setImg("")
          navigate("/table")
        }
      })
  }
  return (
    < div style={{ backgroundColor: 'rgb(246, 249, 228)' }}>
      <Container>
        <Row className='justify-content-center mt-1'>
          <Col xs={8}>
            <h1 style={{ textAlign: "center" }}>Admin panel</h1>
            <Form >
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='name'>title</Form.Label>
                <Form.Control type="text" placeholder="title" onChange={(e) => setLocation(e.target.value)} />
                {title.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='name'>price</Form.Label>
                <Form.Control type="text" placeholder="price" onChange={(e) => setPrice(e.target.value)} />
                {price.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='name'>author</Form.Label>
                <Form.Control type="text" placeholder="author" onChange={(e) => setSale(e.target.value)} />
                {author.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='name'>img</Form.Label>
                <Form.Control type="text" placeholder="img" onChange={(e) => setImg(e.target.value)} />
                {img.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
              </Form.Group>
              {title.length  < 2 ?
               <Button style={{width:"100%" }}variant="primary"> Submit </Button>:<Button style={{width:"100%"}} variant="primary" onClick={createAllData}>
              Submit
            </Button> 
          }
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default CreateData;