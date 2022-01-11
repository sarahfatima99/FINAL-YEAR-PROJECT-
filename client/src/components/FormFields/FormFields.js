import React, { useState, useReducer, useEffect } from 'react'
import axios from 'axios'

import { SingleLine, RadioButton, SingleChoiceAllVisible, TextMultiLine } from './FormFieldTypes'


const FormFields = React.memo(({ form_id }) => {
  const [fieldList, setFieldList] = useState([])
  const [type, setType] = useState('')



  const handleChange = (e) => {
    e.preventDefault();
    setType(e.target.value)

  }


  const handleClick = e => {
    if (type == 'SINGLE_LINE_QUESTION') {
      console.log(type)
      setFieldList([...fieldList,
      {
        field_type: <SingleLine Ques_no={fieldList.length + 1} />,
        name: 'SLT'
      }
      ])
      Question_info('SLT', fieldList.length + 1)
    }

    else if (type == 'RADIO_BUTTON') {
      setFieldList([...fieldList,
      {
        field_type: <RadioButton Ques_no={fieldList.length + 1} />,
        name: 'RB'
      }])
      Question_info('RB', fieldList.length + 1)
    }


    else if (type == 'SINGLE_CHOICE_ALL_VISIBLE') {
      setFieldList([...fieldList,
      {
        field_type: <SingleChoiceAllVisible Ques_no={fieldList.length + 1} />,
        name: 'SCAV'
      }])
      Question_info('SCAV', fieldList.length + 1)

    }


    else if (type == 'TEXT_MULTIPLE_LINE') {


      setFieldList([
        ...fieldList,
        {
          field_type: <TextMultiLine Ques_no={fieldList.length + 1} />,
          name: 'TML'
        }])

      Question_info('TML', fieldList.length + 1)
    }


  }

  function Question_info(question_type, Ques_no) {
const form_id=localStorage.getItem('currentform')
    const Quest_data = {
      type: question_type,
      Ques_no: Ques_no,
      form_id: form_id,
      label:''
     }
  
    axios.post("http://localhost:9000/form/question",  Quest_data )
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message)
        }
        else {
          console.log("err")
        }

      })
  }



  return (
    <div>
      <form >
        <label for="questions type">Choose a question type:</label>

        <select value={type}
          onChange={handleChange}
        >
          <option value="">
            choose question type
          </option>
          <option value="SINGLE_LINE_QUESTION">
            Single line Question
          </option>
          <option value="RADIO_BUTTON">
            Radio buttons
          </option>
          <option value="SINGLE_CHOICE_ALL_VISIBLE">
            Single choice All visible
          </option>
          <option value="TEXT_MULTIPLE_LINE">
            Text multiple line
          </option>
        </select>

      </form>

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
  )
});
export default FormFields
