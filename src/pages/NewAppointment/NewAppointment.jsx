// npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom';


// css
import styles from './NewAppointment.module.css'

//components


const NewAppointment = (props) => {
  const location = useLocation();

  const [appointmentFormData, setAppointmentFormData] = useState({
    appointmentDate: '',
    time: '',
    reason: '',
    mode: 'In Person'
  })

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddAppointment(appointmentFormData)
  }

  const handleChange = evt => {
    setAppointmentFormData({...appointmentFormData, [evt.target.name]: evt.target.value})
  }

  return (
    < main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h3>Create an appointment with {location.state.doctor.name}</h3>
        <label>Date</label>
        <input 
        required
        type='date'
        name='appointmentDate'
        value={appointmentFormData.appointmentDate}
        onChange={handleChange}
        />
        <label>Time</label>
        <input 
        required
        type='time'
        name='time'
        value={appointmentFormData.time}
        onChange={handleChange}
        />
        <label>In-Person/Video</label>
        <select name='mode' value={appointmentFormData.mode} onChange={handleChange}> 
          <option value="In Person" >In Person</option>
          <option value="Phone Call" >Phone Call</option>          
        </select>
        <label>Reason for Visit</label>
        <textarea
          required
          type='text'
          name='reason'
          value={appointmentFormData.reason}
          onChange={handleChange}
        />
        <button type='submit'>CREATE APPOINTMENT</button>
      </form>
    </main>
  )
}

export default NewAppointment