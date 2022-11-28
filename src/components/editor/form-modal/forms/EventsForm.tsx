import * as React from 'react'
const { useState } = React


interface genericObjectIF {
  [key: string]: any
}
interface eventsFormPropsIF {
  setModal: React.Dispatch<string>
  cardDataFocus: genericObjectIF | null
  
}

const EventsForm = (props: eventsFormPropsIF) => {

  const { setModal } = props

  const [dateMode, setDateMode] = useState('')

  return (
    <div>
      <form className="events-form" id="events-form">
        <label>
          Title: 
          <input type="text"></input>
        </label>
        <label className="description-textarea">
          <span className="description-textarea-tile">Description:</span>
          <textarea rows={3} cols={100} style={{resize: 'none'}}></textarea>
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
          <button onClick={ (e) => { formOnSubmit(e, setModal) } } value="draft">Save As Draft</button>
          <button onClick={ (e) => { formOnSubmit(e, setModal) } } value="publish">Publish</button>
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

const formOnSubmit = (e: any, setModal: React.Dispatch<string>) => {

  e.preventDefault()

  formValidation()

  const submitType = e.target.value

  if (submitType === 'draft') {
    alert('This event will be saved as a draft')
  } else if (submitType === 'publish') {
    alert('This event will be published')
  }

  setModal('none')

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