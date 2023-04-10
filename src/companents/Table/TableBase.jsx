import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import '../Table/TableBase.css'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';

const TableBase = () => {
  const { t } = useTranslation()

  const [name, setName] = useState([])
  const [value, SetValue] = useState("")
  const getAllData = () => {
    axios.get('https://dbjsoninserver-production.up.railway.app/data')
      .then((data) => {
        setName(data?.data)
      })
  }
  const delete_func = (id) => {
    axios.delete(`https://dbjsoninserver-production.up.railway.app/data/${id}`)
      .then((res) => {
        alert(res.statusText)
        setName(name.filter((el) => el.id !== id))
      })
  }
  const edite_func = (id) => {
    axios.edikkjte(`https://dbjsoninserver-production.up.railway.app/data/${id}`)
      .then((res) => {
        alert(res.statusText)
      })
  }
  useEffect(() => {
    getAllData()
  }, [])
  return (
    < div >
      <Container >
        <div className='justify-between '>
          <Row className='justify-content-center mt-5'>
            <Col xs={10} sm={12}>
              <Form.Group className=" justify-content-center mb-[-40px]">
                <div className='text-[16px]'>{t("text.search")}</div>
                <Form.Control placeholder="Search" onChange={(e) => SetValue(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
        </div>

        <div className='container'>
          <Row className=''>
            {name.filter((res) => {
              console.log(res.title);
              return res.title.toLocaleLowerCase() === "" ? value : res.title.toLocaleLowerCase().includes(value)
            })
              .map((data) => {
                return (
                  <>
                  <Col >
                    <tbody>
                      <tr className=' mt-9' >
                        <div className='bg-blue-200 mt-6 w-[320px] h-[320px] rounded-[30px] mb-[1px]' key={data.id}>
                          <div className=' flex-wrap m-9'>
                            <th className='' >#:</th>
                            <td  >{data.id}</td>
                            <h r />
                            <th >title: </th>
                            <td  >{data.title}</td>
                            <h r />
                            <th >price: </th>
                            <td  >{data.price}</td>
                            <h r />
                            <th >author: </th>
                            <td >{data.author}</td>
                            <h r />
                            <th  >img:
                            </th>
                            <img className='w-[90px] h-[90px]' src={data.img} alt="" />
                            <div className="flex gap-3 mt-2 ">
                              <button className='bg-blue-500 text-white w-20 h-8 rounded-3xl' onClick={() => delete_func(data.id)}>delet</button>
                              <Link to={`/table/editetable/${data.id}`}>
                                <button className='bg-blue-500 text-white w-20 h-8 rounded-3xl' onClick={() => edite_func(data.id)}>Edite</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </Col>
                  </>
                )
              })}
          </Row>
        </div>
      </Container>
    </div>
  )
}
export default TableBase;