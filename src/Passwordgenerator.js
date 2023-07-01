import React,{useState} from 'react'

const Passwordgenerator = () => {
    const numbers = '0123456789'
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"
    const [password, setPassword] = useState('')
    const[upper,setUpper]=useState(false);
    const[lower,setLower]=useState(false);
    const[number,setNumber]=useState(false);
    const[characters,setCharacters]=useState(false);
    const[length,setLength]=useState(0);

    const submitHandler=(e)=>{
      if(length==0){
        alert("length cant be null");
      }
if(!upper&&!lower&&!number&&!characters){
  alert("none selected");
}
let characterList = ''
console.log(e.target.value)
if (lower) {
  characterList = characterList + lowerCaseLetters
}

if (upper) {
  characterList = characterList + upperCaseLetters
}

if (number) {
  characterList = characterList + numbers
}

if (characters) {
  characterList = characterList + specialCharacters
}

setPassword(createPassword(characterList))
    }

    const createPassword = (characterList) => {
      let password = ''
      const characterListLength = characterList.length
  
      for (let i = 0; i < length; i++) {
        const characterIndex = Math.floor(Math.random() * characterListLength)
        password = password + characterList.charAt(characterIndex)
      }
      return password
    }


  return (
    <div>
      <h1>{password}</h1>
          <label for="length">Length</label>
    <input type="text" id="length" onChange={(e) => setLength(parseInt(e.target.value))} value={length}></input><br/>
    <input type="checkbox" id="upper" value="upper" checked={upper}
              onChange={(e) => setUpper(e.target.checked)}></input>
    <label for="upper">Upper</label><br/>
    <input type="checkbox" id="lower" value="lower"  checked={lower} onChange={(e) => setLower(e.target.checked)}></input>
    <label for="lower">Lower</label><br/>
    <input type="checkbox" id="characters" value="characters" checked={characters} onChange={(e) => setCharacters(e.target.checked)}></input>
    <label for="characters">charcters</label><br/>
    <input type="checkbox" id="Numbers" value="Numbers" checked={number} onChange={(e) => setNumber(e.target.checked)}></input>
    <label for="Numbers">Numbers</label><br/>
    <button  onClick={submitHandler}>Generate</button>
    </div>
  )
}

export default Passwordgenerator;
