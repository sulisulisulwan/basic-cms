import ReactDOM from 'react-dom'
import React from 'react'
import EventsForm from './forms/EventsForm'
import NewsForm from './forms/NewsForm'
import TextBlockForm from './forms/TextBlockForm'
import MediaUploaderForm from './forms/MediaUploaderForm'
import { formModalPropsIF, genericObjectIF } from '../../../types'

const loadForm = (
  formType: string, 
  setModalView: React.Dispatch<string | null>, 
  setCardDataFocus: React.Dispatch<genericObjectIF | null>, 
  cardDataFocus: genericObjectIF | null
) => {

  const formsMap = new Map([
    ['events', <EventsForm setModalView={setModalView} setCardDataFocus={setCardDataFocus} cardDataFocus={cardDataFocus}/>],
    ['news', <NewsForm setModalView={setModalView} setCardDataFocus={setCardDataFocus} cardDataFocus={cardDataFocus}/>],
    ['textBlock', <TextBlockForm setModalView={setModalView}/>],
    ['mediaUploader', <MediaUploaderForm setModalView={setModalView}/>]

  ])

  return formsMap.get(formType)

}


const FormModal = (props: formModalPropsIF) => {

  const { type, setModalView, setCardDataFocus, cardDataFocus } = props

  const modalWrapper = (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-title-bar-wrapper">
          <div className="modal-title">Add {`${type}`}</div>
          <div className="modal-close-button-wrapper">
            <button className="modal-close-button" onClick={() => closeModal(setModalView, setCardDataFocus)}>X</button>
          </div>
        </div>
        { loadForm(type, setModalView, setCardDataFocus, cardDataFocus) } 
      </div>
    </div>
  )

  return ReactDOM.createPortal(modalWrapper, document.getElementById('modal-portal') as Element)
}

const closeModal = (
  setModalView: React.Dispatch<string | null>, 
  setCardDataFocus: React.Dispatch<genericObjectIF | null>
) => {
  setModalView(null)
  setCardDataFocus(null)
}

export default FormModal