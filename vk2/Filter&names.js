
const Filter = ({persons,input}) => {
  return(
  persons.map(nimi => {
    
    
    if ( input === '')
    return <p> {nimi.name} {nimi.number} </p>
    else {
        var muut = nimi.name.toUpperCase().split('');
        var kirjain = input.toUpperCase().split('');
        if ( muut[kirjain.length-1] === kirjain[kirjain.length-1] && muut[kirjain.length-2] === kirjain[kirjain.length-2]
          && muut[kirjain.length-3] === kirjain[kirjain.length-3] && muut[0] === kirjain[0]
          ) {
            return <p> {nimi.name} {nimi.number} </p> 
          } 
            
    }
  }
))
}

export default Filter
