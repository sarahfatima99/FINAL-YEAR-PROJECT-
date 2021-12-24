import React, { useState, useReducer } from 'react'
import './FromFields.css'
import  {SingleLine, RadioButton, SingleChoiceAllVisible, TextMultiLine } from './FormFieldTypes'

 function FormFields() {
  // const [fieldList, setFieldList] = useState([])
  const [type, setType] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setType(e.target.value)
    console.log(type)


  }



  const handleClick = event => {
    console.log(type)
    event.preventDefault()}





    // if(type=='SINGLE_LINE_QUESTION'){
    //   setFieldList([...fieldList,{field_type:<SingleLine/>,name:'SLT'}  ])
    // }

    // else if(type=='RADIO_BUTTON'){
    //   setFieldList([...fieldList,{field_type:<RadioButton/>,name:'RB'}])
    // }
    // else if(type=='SINGLE_CHOICE_ALL_VISIBLE'){
    //   setFieldList([...fieldList,{field_type:<SingleChoiceAllVisible/>,name:'SCAV'}])
    // }
    // else if(type=='TEXT_MULTIPLE_LINE'){
    //   setFieldList([...fieldList,{field_type:<TextMultiLine/>,name:'TML'}])
    // }
  

//     switch (type) {
//       case 'SINGLE_LINE_QUESTION':

//         setFieldList([...fieldList,{field_type:<SingleLine/>,name:'SLT'}  ])
    
//       case 'RADIO_BUTTON':
// console.log('yoo')
     
//         setFieldList([...fieldList,{field_type:<RadioButton/>,name:'RB'}])

//       case 'SINGLE_CHOICE_ALL_VISIBLE':

  
//         setFieldList([...fieldList,{field_type:<SingleChoiceAllVisible/>,name:'SCAV'}])

//       case 'TEXT_MULTIPLE_LINE':
//       console.log('bhai ')
        
//         setFieldList([...fieldList,{field_type:<TextMultiLine/>,name:'TML'}])

//       default:
//         console.log('hi')
//         setFieldList([...fieldList])

//     }

//     console.log(type)
//     setType('')
//   }
  // console.log(fieldList)
  



  const feildList = [{ field_type: <SingleLine />, name: "SLT" }, { field_type: <RadioButton />, name: "RB" }, { field_type: <SingleChoiceAllVisible />, name: "SLAV" }, { field_type: <TextMultiLine />, name: "TML" }]


  return (
    <div>
      <form >
        <label for="questions type">Choose a question type:</label>

        <select value={type} onChange={handleChange}>
          <option value="">choose question type</option>
          <option value="SINGLE_LINE_QUESTION">Single line Question</option>
          <option value="RADIO_BUTTON">Radio buttons</option>
          <option value="SINGLE_CHOICE_ALL_VISIBLE">Single choice All visible</option>
          <option value="TEXT_MULTIPLE_LINE">Text multiple line</option>
        </select>

      </form>


      {/* {state.single_line}
     {state.radio_button}
     {state.single_choice_all}
     {state.text_multiline} */}



      {
        feildList.map((item, key) => {
         
          return (
            <div>
              <br/>
              {item.field_type}
              <br/>
              </div>
          )
          
        })
      }

      <div>
        <button className="button add" type="button">Add</button>

      </div>

    </div>
  )
}

export default FormFields
