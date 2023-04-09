import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import "../Section/Section.css"

const EditeData = () => {
    const [title, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [sale, setSale] = useState('')
    const [img, setImg] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);

const getOne =(id)=>{
    axios.get(`https://dbjsoninserver-pro65duction.up.railway.app/data/${id}`).then((data)=>{
      console.log(data?.data.name );
        setLocation(data?.data.location)
        setPrice(data?.data.price)
        setSale(data?.data.sale)
        setImg(data?.data.img)
    })
}
useEffect(() => {
    getOne(id)
}, [id])
    const editeData_func = () => {
        let obj={
            title: title,
            price: price,
            sale: sale,
            img: img,
        }
        axios.put(`https://dbjsoninserver-production.up.railway.app/data/${id}`, obj).then((res) => {
            alert(res.statusText)
            navigate('/table')
        })
    }
  return (
    < div style={{ backgroundColor: 'rgb(246, 249, 228)' }}>
    <Container>
      <Row className='justify-content-center mt-1'>
        <Col xs={8}>
          <h1 style={{ textAlign: "center" }}>Edite page</h1>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='name'>title</Form.Label>
              <Form.Control value={title}  type="text" placeholder="title" onChange={(e) => setLocation(e.target.value)} />
              {title.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='name'>price</Form.Label>
              <Form.Control value={price}  type="text" placeholder="price" onChange={(e) => setPrice(e.target.value)} />
              {price.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='name'>sale</Form.Label>
              <Form.Control  value={sale} type="text" placeholder="sale" onChange={(e) => setSale(e.target.value)} />
              {sale.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='name'>img</Form.Label>
              <Form.Control value={img}  type="text" placeholder="img" onChange={(e) => setImg(e.target.value)} />
              {img.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"green"}}>success</p>}
            </Form.Group>
            {title.length  < 2 ?
             <Button style={{width:"100%" }}variant="primary"> Submit </Button>:<Button style={{width:"100%"}} variant="primary" onClick={editeData_func}>
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

export default EditeData
