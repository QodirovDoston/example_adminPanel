import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { useTranslation } from 'react-i18next';
import i18next from '../../i18n';

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Container>
        <Row className='justify-content-center mt-5'>
           <h2 className='justify-center sm:text-[43px] text-[19px] '>{t('text.salom')}</h2>
          <p className='sm:text-[23px] text-[10px]'>{t('text.text_p')}</p>
        </Row>
      </Container>
    </div>
  )
}

export default Home
