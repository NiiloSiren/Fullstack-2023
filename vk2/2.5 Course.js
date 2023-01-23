const Course = ({courses}) => {
    return(
      <div>
            {courses.map(part =>
            
            <><Header name={part.name} /><Content parts={part.parts} /><Yht parts={part.parts}/></>
            
          )}
            
      </div>
    )
  }
  
  const Header = ({name}) => {
    return(
        <h2>{name}</h2>
    )
  }
  
  const Content = ({parts}) => {
    return(
        
        <div>
        {parts.map(part => 
          <Parts id={part.id} name={part.name} exercises={part.exercises} /> 
        )}
        </div>
    
          )
  }
  
    const Parts = ({name,exercises,id}) => {
        return(
        <p>{name} {exercises}</p>
        )
    }
  
  const Yht = ({parts}) => {
        return(
        <div>
          <h4>
        {"Combined: "+(parts.map(s => s.exercises)).reduce( (a,p) => a+p)}
        </h4>
        </div>
        )
  }
  

export default Course
