// css
import styles from './Landing.module.css'

//components
import DoctorCard from '../../components/DoctorCard/DoctorCard'

const Landing = (props) => {
  return (
    <>
    <main className={styles.container}>
      <header>
        <h1>Search Doctor</h1>
        </header>
      <section className={styles.search}>
          <input
        name="query"
        type="text"
        autoComplete="off"
        value=""
        placeholder='Cardiologist'
      />
      <input
        name="query"
        type="text"
        autoComplete="off"
        value=""
        placeholder='Symptoms'
      />
      <input
        name="query"
        type="text"
        autoComplete="off"
        value=""
        placeholder='Location'
      />
        </section>
    </main>
        <section className={styles.div}>
          {props.doctors.map(doctor => (
            <DoctorCard key={doctor._id} doctor = {doctor}/>
          ))}   
        </section>
        </>
  )
}

export default Landing
