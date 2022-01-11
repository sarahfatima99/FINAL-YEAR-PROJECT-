import React, { useState, useReducer } from 'react'
import './FromFields.css';
import { SingleLine, RadioButton, SingleChoiceAllVisible, TextMultiLine } from './FormFieldTypes';
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light";
import background from "../../images/back.jpg";
import tw from "twin.macro";
import styled from "styled-components";


const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-green-600 hover:border-gray-700 hover:text-green-800`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-400 hover:text-blue-500`}
  }
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-purple-100 opacity-25`;

const navLinks = [
  <NavLinks key={1}>
    <NavLink href="#">
      Home
    </NavLink>
    <NavLink href="#">
      ContactUs
    </NavLink>
    <NavLink href="#">
      Templates
    </NavLink>
    <NavLink to="/signup">
      AboutUs
    </NavLink>
  </NavLinks>,
  <NavLink  >
    <PrimaryLink  href="/signup">
      Log in
    </PrimaryLink>
    <PrimaryLink style={{marginLeft:"10px"}}  href="/createform">
       Create Form
    </PrimaryLink>
  </NavLink>
];

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
