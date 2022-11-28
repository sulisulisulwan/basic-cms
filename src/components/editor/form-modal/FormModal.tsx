import ReactDOM from 'react-dom'
import React from 'react'
import EventsForm from './forms/EventsForm'
import NewsForm from './forms/NewsForm'
import TextBlockForm from './forms/TextBlockForm'
import MediaUploaderForm from './forms/MediaUploaderForm'
import { formModalPropsIF } from '../../../types'

interface genericObjectIF {
  [key: string]: any
}

const loadForm = (formType: string, setModal: React.Dispatch<string>, cardDataFocus: genericObjectIF | null) => {

  const formsMap = new Map([
    ['events', <EventsForm setModal={setModal} cardDataFocus={cardDataFocus}/>],
    ['news', <NewsForm setModal={setModal} cardDataFocus={cardDataFocus}/>],
    ['textBlock', <TextBlockForm setModal={setModal}/>],
    ['mediaUploader', <MediaUploaderForm setModal={setModal}/>]

  ])

  return formsMap.get(formType)

}


const FormModal = (props: formModalPropsIF) => {

  const { type, setModal, cardDataFocus } = props

  const modalWrapper = (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-title-bar-wrapper">
          <div className="modal-title">Add {`${type}`}</div>
          <div className="modal-close-button-wrapper">
            <button className="modal-close-button" onClick={ () => { setModal('none') }}>X</button>
          </div>
        </div>
        { loadForm(type, setModal, cardDataFocus) } 
      </div>
    </div>
  )

  return ReactDOM.createPortal(modalWrapper, document.getElementById('modal-portal') as Element)
}

export default FormModal