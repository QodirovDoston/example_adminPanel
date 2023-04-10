import React from 'react'
import { Container, Row } from 'react-bootstrap'

// import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
console.log(i18next);

const Home = () => {
  // const { t } = useTranslation()
  return (
    <div>
      <Container>
        <Row className='justify-content-center mt-5'>
           <h2 className='justify-center sm:text-[43px] text-[19px] mb-6 '>Hello  My name's Doston</h2>
          <p className='sm:text-[23px] text-[10px]   first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left'>Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum. Men omega bilan muammoga duch kelmoqdaman! Siz har qanday suyuqlik uchun qanday hamkasblarni to'lashga tayyor ekanligingizni bilmoqchimisiz? siz hech narsa uchun pul to'lashingiz shart emas, lekin siz qo'rqoqlikning maksimal miqdorini va echimning maksimal qadr-qimmatini to'lashingiz kerakmi? Men biror narsa aytishni, biror narsa qilishni yomon ko'raman. Hurmatli janob. Uilyamson, siz yomonroq bo'lish istagidan qaytdingiz, siz Xarvi, Lorensga borishdan oldin sizga kerak bo'lgan eng katta og'riqni engillashtiradigan ixtirochi bo'lishni xohlaysizmi? Men Xudoga qasam ichaman, Xudoga qasam ichaman, men haqiqiy shoshilish azobidan mast bo'laman. Hammasi joyida, haha. Advokat hech alohida tana turi bor, irqchilik shikoyat bir xil ongli ravishda xabardor bo'lishi kerak, shuning uchun.",
  </p>
        </Row>
      </Container>
    </div>
  )
}

export default Home
