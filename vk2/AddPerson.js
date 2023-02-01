const AddPerson = ({HandleName,HandleNumber,newName,newNumber,addPerson}) => {
    return(
<form onSubmit={addPerson}>
      Name:
      <input  value={newName} onChange={HandleName} /> 
        <p></p> 

        Number:
      <input value={newNumber} onChange={HandleNumber} /> 
        <p></p>
          <button type="submit">add</button>
      </form>
      )}
export default AddPerson
