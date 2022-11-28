import ReactDOM from 'react-dom'
import React from 'react'
import EventsForm from './forms/EventsForm'
import NewsForm from './forms/NewsForm'
import TextBlockForm from './forms/TextBlockForm'
import MediaUploaderForm from './forms/MediaUploaderForm'
import { formModalPropsIF } from '../../../types'

const loadForm = (formType: string) => {

  const formsMap = new Map([
    ['events', <EventsForm/>],
    ['news', <NewsForm/>],
    ['textBlock', <TextBlockForm/>],
    ['mediaUploader', <MediaUploaderForm/>]

  ])

  return formsMap.get(formType)

}


const FormModal = (props: formModalPropsIF) => {

  const { type, setModal } = props

  const modalWrapper = (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-close-button-wrapper">
          <button className="modal-close-button" onClick={ () => { setModal('none') }}>X</button>
        </div>
        { loadForm(type) } 
      </div>
    </div>
  )

  return ReactDOM.createPortal(modalWrapper, document.getElementById('modal-portal') as Element)
}

export default FormModal