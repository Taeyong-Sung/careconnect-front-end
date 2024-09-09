// npm modules
import { useState } from "react";
import { useLocation } from "react-router-dom";

// css
import styles from "./NewAppointment.module.css";

//components
import DoctorAvailabilityModal from "../../components/DoctorAvailabilityModal/DoctorAvailabilityModal";
import DoctorInfo from "../../components/DoctorInfo/DoctorInfo";


const NewAppointment = (props) => {
  const location = useLocation();
  const doctor = location.state.doctor;
  const selectedDate = location.state.selectedDate;
  const selectedTime = location.state.selectedTime;

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const [appointmentFormData, setAppointmentFormData] = useState({
    appointmentDate: selectedDate,
    time: selectedTime,
    reason: "",
    mode: "In Person",
    doctor: doctor._id,
  });

  const handleClick = (newSelectedTime, newSelectedDate) => {
    setAppointmentFormData({
      ...appointmentFormData,
      appointmentDate: newSelectedDate,
      time: newSelectedTime,
    });
    handleClose();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddAppointment(appointmentFormData);
  };

  const handleChange = (evt) => {
    setAppointmentFormData({
      ...appointmentFormData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <main className={styles.container}>
      <DoctorAvailabilityModal
        open={open}
        handleClose={handleClose}
        doctor={doctor}
        handleClick={handleClick}
      />

      <form onSubmit={handleSubmit}>
        <DoctorInfo doctor={location.state.doctor} />
        <br /> <br />
        <label>
          Date: {new Date(appointmentFormData.appointmentDate).toDateString()}
        </label>
        <label>Time: {appointmentFormData.time}</label>
        <br />
        <span
          onClick={handleOpen}
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
        >
          View More Available Slots
        </span>
        <br />
        <input
          hidden
          type="date"
          name="appointmentDate"
          value={appointmentFormData.appointmentDate}
          onChange={handleChange}
        />
        <input
          hidden
          type="time"
          name="time"
          value={appointmentFormData.time}
          onChange={handleChange}
        />
        <label>Appointment Type</label>
        <select
          name="mode"
          value={appointmentFormData.mode}
          onChange={handleChange}
        >
          <option value="In Person">In Person</option>
          <option value="Phone Call">Phone Call</option>
        </select>
        <label>Reason for Visit</label>
        <textarea
          required
          type="text"
          name="reason"
          value={appointmentFormData.reason}
          onChange={handleChange}
        />
        <button type="submit">CREATE APPOINTMENT</button>
      </form>
    </main>
  );
};

export default NewAppointment;
