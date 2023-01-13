const Header = (props) => {
  return (
    <div>
      <p>
        {props.name}
        
      </p>
    </div>
  )

}
const Content = (props) => {
  return (
    <div>
      <p>
        {props.sis}
        {props.pisteet}
        
      </p>
    </div>
  )

}
const Kaikki = (props) => {
  return (
    <div>
      <p>
        {props.lause}
        {props.total}
        
      </p>
    </div>
  )

}
const App = () => {
  const nimi = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const lause = 'Number of exercises'
  return (
    <div>
      
      <Header name={nimi}/>
      <Content sis={part1+" "} pisteet={exercises1} />
      <Content sis={part2+" "} pisteet={exercises2} />
      <Content sis={part3+" "} pisteet={exercises3} />
      <Kaikki lause = {lause+" "} total= {exercises1 + exercises2 + exercises3}/>
      
      
    </div>
  )
}

export default App