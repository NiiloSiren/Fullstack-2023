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
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      
      <Header name={course}/>
      <Content sis={parts[0].name+" "} pisteet={parts[0].exercises} />
      <Content sis={parts[1].name+" "} pisteet={parts[1].exercises} />
      <Content sis={parts[2].name+" "} pisteet={parts[2].exercises} />
      
    </div>
  )
}

export default App