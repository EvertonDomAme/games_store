import './Styles.css';

export default function AboutLogo() {
  const str = 'Everton Oliveira * FullStack Developer * '
  return(
    <div className="circle">
      <div className="logo"></div>
      <div className="text">
        <p>{ str.split("").map(
        (char, i) => 
        <span key={i} style={{transform: `rotate(${i*8.7}deg)`}} >{char}</span>) }</p>
      </div>
    </div>
  )
}