import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
console.log(i18next);

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Container>
        <Row className='justify-content-center mt-5'>
           <h2 className='justify-center sm:text-[43px] text-[19px] '>{t('text.salom')}</h2>
          <p className='sm:text-[23px] text-[10px]   first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left'>{t('text.text_p')}</p>
        </Row>
      </Container>
    </div>
  )
}

export default Home
