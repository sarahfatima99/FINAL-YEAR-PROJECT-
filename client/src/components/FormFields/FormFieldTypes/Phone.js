import React from 'react'
import Button from '@mui/material/Button';
// import PhoneInput from 'react-phone-number-input'

export default function Phone() {
  return (
    <div>
         <div className='form-type container'>
                <span className='ques_no'>1.</span>
                <input type="text" className='input-ques' placeholder="Enter Question Text" />
                <textarea type="textarea" className='input-ques description' placeholder="Enter Question Description (optional)" />
                <input type="textarea" disabled className='ans-disabled' placeholder="type contact no" />
                <Button style={{marginTop:"30px", marginLeft:"40px", padding:"8px", fontSize:"18px", color:"#68c5c5", borderColor:"#68c5c5"}} variant="outlined">Ok</Button>
          </div>
    </div>
  )
}
