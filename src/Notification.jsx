/* eslint-disable react/prop-types */
const Notification = ({heading, paragraph, headingColor}) => {
  return (
    <section className="notification">
        <h1 style={{color: headingColor}}>{heading}</h1>
        <p>{paragraph}</p>
    </section>
  )
}

export default Notification