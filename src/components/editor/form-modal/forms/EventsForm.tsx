import * as React from 'react'
import { genericObjectIF } from '../../../../types'
const { useState } = React

interface eventsFormPropsIF {
  setModalView: React.Dispatch<string | null>
  setCardDataFocus: React.Dispatch<genericObjectIF | null>
  cardDataFocus: genericObjectIF | null
}

const EventsForm = (props: eventsFormPropsIF) => {

  const { setModalView, setCardDataFocus, cardDataFocus } = props

  const [dateMode, setDateMode] = useState('')
  const [titleValue, setTitleValue] = useState( cardDataFocus ? cardDataFocus['title'] : '')
  const [descriptionValue, setDescriptionValue] = useState( cardDataFocus ? cardDataFocus['body'] : '')

  return (
    <div>
      <form className="events-form" id="events-form" onSubmit={ (e) => { formOnSubmit(e, setModalView, setCardDataFocus) } }>
        <label>
          Title: 
          <input type="text" value={titleValue} onChange={ (e) => { setTitleValue(e.target.value)} }></input>
        </label>
        <label className="description-textarea">
          <span className="description-textarea-tile">Description:</span>
          <textarea 
            className="editor-form-textarea" 
            rows={3} 
            cols={100} 
            style={{
              resize: 'none',
              fontFamily: 'Arial'
            }}
            value={descriptionValue}
            onChange={ (e) => { setDescriptionValue(e.target.value)} }
          ></textarea>
        </label>
        <div>
          <label>
            Select date type:
            <label style={{ fontWeight: 'normal' }}>
              Same day event
              <input type="radio" name="thisForOnlyOneAtATime" value="sameDay" onChange={(e) => { dateModeRadioOnChange(e, setDateMode) }}></input>
            </label>
            <label style={{ fontWeight: 'normal' }}>
              Multi day event
              <input type="radio" name="thisForOnlyOneAtATime" value="multiDay" onChange={(e) => { dateModeRadioOnChange(e, setDateMode) }}></input>
            </label>
          </label>
        </div>
        {
          dateMode === '' ? null : 
            dateMode === 'sameDay' ? sameDayForm : multiDayForm
        }
        <div className="form-submit-buttons-wrapper">
          <input type="submit" name="draft" value="Save As Draft"></input>
          <input type="submit" name="publish" value="Publish"></input>
        </div>
      </form>
    </div>
  )
}

const formValidation = () => {
  const form = document.getElementById('events-form')
  console.log('Validate that:')
  console.dir(form)
}

const dateModeRadioOnChange = (e: any, setState: React.Dispatch<string>) => {
  if (e.target === null) {
    return
  }

  const chosenDateMode = e.target.value
  setState(chosenDateMode)
}

const formOnSubmit = (
  e: any, 
  setModalView: React.Dispatch<string | null>, 
  setCardDataFocus: React.Dispatch<genericObjectIF | null>
) => {

  e.preventDefault()

  formValidation()

  const submitType = e.target.value

  if (submitType === 'draft') {
    alert('This event will be saved as a draft')
  } else if (submitType === 'publish') {
    alert('This event will be published')
  }

  setModalView(null)
  setCardDataFocus(null)
}

const sameDayForm = (
  <>
    <label>
      Date:
      <input type="date"></input>
    </label>
    <label>
      Start time:
      <input type="time"></input>
    </label>
    <label>
      End time:
      <input type="time"></input>
    </label>
  </>
)

const multiDayForm = (
  <>
    <label>
      Start date:
      <input type="date"></input>
    </label>
    <label>
      End date:
      <input type="date"></input>
    </label>
  </>
)

export default EventsForm