import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input'
import './FromFields.css'
import Button from '@mui/material/Button';
import { borderColor } from '@mui/system';

export default function MultichoiceAllVisible() {

    const [optionList,setOptionsList]=useState([])

    const handleKeyDown=(e)=>{

        if (e.key == 'Enter') {
        console.log(e.target.value)
        setOptionsList([...optionList,
                        {
                            name: e.target.value
                        }])
            
                        e.target.value = ""
                        console.log(optionList)
                      }
                }

  return (
    <div>            
        <div className='form-type container'>
        <span className='ques_no'>1.</span>
        <input type="text" className='input-ques' placeholder="Enter Question Text" />
        <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" />
    
       { 
        optionList.map((item, key) => {
                            return (
                               
                                <input type="textarea"  className='ans-disabled' placeholder={key,item.name} onKeyDown={handleKeyDown} />)
                        }
                        )
                        }
     
        
     <input type="textarea"  className='ans-disabled' placeholder='enter your ans' onKeyDown={handleKeyDown} />
        <Button style={{marginTop:"30px", marginLeft:"40px", padding:"8px", fontSize:"18px", color:"#68c5c5", borderColor:"#68c5c5"}} variant="outlined">Ok</Button>
        </div>
    </div>
  )
}

























































































// import React, { useState } from 'react'
// import './FromFields.css'
// import axios from 'axios'


// export const MultchoiceAllVisible = (props) => {
//     const [question, setQuestion] = useState()
//     const [options, setOptions] = useState([])
//     const list = [{ name: 'yoo' }, { name: 'hii' }, { name: 'yoo' }]
//     const [optionsList, setOptionsList] = useState([])
//     const [label, setLabel] = useState()
//     const [editable, setEditable] = useState(true)
//     const [count, setCount] = useState(true);
//     const [ques_id,setQues_id]=useState()
//     const handleChange = e => {
//         setLabel(e.target.value)
//     }



//     const handleClick = e => {
//         e.preventDefault()

//         setEditable(!editable)
//         if (editable && label) {
//             setQuestion(props.Ques_no)
//             update_ques_text()
//         }
//     }

//     const update_ques_text = () => {

//         const quest_no = props.Ques_no
//         const form_id = localStorage.getItem('currentform')
//         const Ques_data = {
//             Ques_no: quest_no,
//             label: label,
//             form_id: form_id
//         }
//         axios.post("http://localhost:9000/form/question", Ques_data)
    
//             .then((res) => {
//                 // console.log(res.data.Question_id, "hello")
//                 setQues_id(res.dara.Question_id)
//                 if (res.data.message) {
//                     console.log(res.data.message)
//                 }
//                 else {
//                     console.log("err",res.data.message)
//                 }

//             })

//     }

//     const handleKeyDown = e => {
//         if (e.key == 'Enter') {
//             // setOptions(false)

//             setOptionsList([...optionsList,
//             {
//                 name: e.target.value
//             }])

//             e.target.value = ""
//             console.log(optionsList)
//         }

//     }
//     return (
//         <div>
//             <center>
//             <form onSubmit={e => e.preventDefault()} >

//                 {
//                     editable ?
//                         <input type="textarea" rows="44" style={{margin:"5px"}}
//                             cols="15"
//                             value={label}
//                             placeholder="Enter your Question "
//                             onChange={handleChange}
//                         /> :
//                         <lable>
//                             {label}
//                         </lable>
//                 }


//                 {
//                     optionsList != null ?

//                         optionsList.map((item, key) => {
//                             return (
//                                 <div style={{display:"flex",alignItems:"center" ,justifyContent:"space-around"}}>
//                                     <input type="checkbox"
//                                         id="css"
//                                         name="fav_language"
//                                         value="CSS" />
//                                     <label  for="css">
//                                         {item.name}
//                                     </label>
//                                     <br />
//                                 </div>)
//                         }) : null
//                 }
               
//                 {
//                     options ?
//                     <center>
//                         <input  style={{margin:"5px" ,textAlign:"center"}} type="textarea" placeholder='Enter Options'
//                             rows="44"
//                             cols="15"
//                             onKeyDown={handleKeyDown}
//                         /> 
//                         </center>:
//                         null
//                 }
//                 {/* <button onClick={() => setOptions(true)}>Add Options</button> */}
//                 <button style={{textAlign:"right"}}className='button'  onClick={handleClick}>
//                     {
//                         editable ?
//                             <p  style={{margin:"5px",textAlign:"right"}} > Done</p> :
//                             <p  style={{margin:"5px",textAlign:"right"}}>  Edit Question</p>
//                     }



//                 </button>
//             </form>
//             </center>
//         </div>
//     )
// }