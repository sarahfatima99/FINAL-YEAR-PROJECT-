import React, { useState, useReducer } from 'react'
import './FromFields.css';
import { SingleLine, RadioButton, SingleChoiceAllVisible, TextMultiLine } from './FormFieldTypes';









function FormFields() {
 
  const [fieldList, setFieldList] = useState([])
  const [type, setType] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setType(e.target.value)
    console.log(type)


  }



  const handleClick = event => {
    console.log(type)
    event.preventDefault()




    if (type == 'SINGLE_LINE_QUESTION') {
      setFieldList([...fieldList,
      {
        field_type: <SingleLine />,
        name: 'SLT'
      }
      ])
    }

    else if (type == 'RADIO_BUTTON') {
      setFieldList([...fieldList,
      {
        field_type: <RadioButton />,
        name: 'RB'
      }])
    }
    else if (type == 'SINGLE_CHOICE_ALL_VISIBLE') {
      setFieldList([...fieldList,
      {
        field_type: <SingleChoiceAllVisible />,
        name: 'SCAV'
      }])
    }
    else if (type == 'TEXT_MULTIPLE_LINE') {
      setFieldList([
        ...fieldList,
        {
          field_type: <TextMultiLine />,
          name: 'TML'
        }])
    }

  }



  return (
    <>
    {/* <OpacityOverlay />
    <HeroContainer/>
        <StyledHeader links={navLinks} /> */}
    <div className='example'>
      <center>
      <div className='form-title'>
        
          <div className='header'>
        <input placeholder='Untitled form' className='form-name'></input>
        <input placeholder='add description' className='form-description'/>
        </div>
        </div>
        </center>
      <center>
      <form >
      
    
        
        <label className='nav'>Choose a question type:</label>
        <select className='subs' value={type} onChange={handleChange}>
          <option className='options' value="">
            select from here
          </option>
          <option className='options' value="SINGLE_LINE_QUESTION">
            Single line Question
          </option>
          <option className='options' value="RADIO_BUTTON">
            Radio buttons
          </option>
          <option className='options' value="SINGLE_CHOICE_ALL_VISIBLE">
            Single choice All visible
          </option>
          <option className='options' value="TEXT_MULTIPLE_LINE">
            Text multiple line
          </option>
        </select>

       
        
      
       
    
    
    <div style={{clear:"both"}}></div>
    

</form>
</center>
   

      {
        fieldList.map((item, key) => {
          console.log(key)
          return (
            <div>
              <br />
              {item.field_type}
              <br />
            </div>
          )

        })
      }

      <div style={{ textAlign: "center" }}>
        <button className="button add"
          type="button"
          onClick={handleClick}>
          Add
        </button>

      </div>

    </div>
    </> )
};

export default FormFields;
