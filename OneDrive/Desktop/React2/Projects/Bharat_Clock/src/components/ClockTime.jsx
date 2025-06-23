function ClockTime() {
  let time = new Date();
  return <p className="fst-italic lead">This is Indian time right now : {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
}

export default ClockTime;

