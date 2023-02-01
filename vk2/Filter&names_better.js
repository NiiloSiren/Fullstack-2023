
const Filter = ({persons,input}) => {
  return(
    <>
  
    
    {input ?
    
      persons
        .filter(nimi => nimi.name.toUpperCase().includes(input.toUpperCase()))
        .map(nimi => {
          return <p> {nimi.name} {nimi.number}</p>
        })

    : persons.map(nimi => {
      return <p> {nimi.name} {nimi.number}</p>
    })
       
    }

  </> 
)
}

export default Filter
