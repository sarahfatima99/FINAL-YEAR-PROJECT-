import React, { useState, useReducer, useEffect } from 'react'
import FormFields from './FormFields'
import axios from 'axios';
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import './Form.css'
import TabsUnstyled, { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import MultichoiceAllVisible from './FormFieldTypes/MultichoiceAllVisible';
import SingleLineQues from './FormFieldTypes/SingleLineQues';


const Form = () => {
    const [formType, SetFormType] = useState([])

    const handleSelect = (e) => {
        console.log(e);
        console.log('hi')
        if (e=='Single Line Text'){
            SetFormType([...formType, { field_type: e ,field_jsx:<SingleLineQues/>}])
        }
        else if (e=='Multi Line Text'){
            SetFormType([...formType, { field_type: e ,field_jsx:<MultichoiceAllVisible/>}])
        }
     
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12' style={{ border: "2px solid rgb(220, 220, 220)", boxShadow: "rgba(240, 230, 230, 0.76)" }}>
                        <div className="mt-3" style={{ paddingBottom: "10px" }}>
                            <div className='d-flex flex-row justify-content-between'>
                                <h1 style={{ fontSize: "20px" }}>Hyperion / Create Form</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-main-body container-fluid">
                <div className='row'>

                    <div className="col-lg-9" style={{ paddingLeft: '0' }}>
                        <Tabs>
                            <div className='row '>
                                <div className='column side-panel'  >
                                    <div className="tools-side-bar">
                                        <div className="add-button">
                                            <DropdownButton
                                                key='end'
                                                drop='end'
                                                id={`dropdown-button-drop-end`}
                                                title="+"
                                                onSelect={handleSelect}
                                            >
                                                <div className='container-fluid'>
                                                    <div className='row'>
                                                        <div className='column'>
                                                            <Dropdown.Item eventKey="Single Line Text">Single Line Text</Dropdown.Item>
                                                        </div>
                                                        <div className='column'>
                                                            <Dropdown.Item eventKey="Multi Line Text">Multi Line Text</Dropdown.Item>
                                                        </div>

                                                    </div>
                                                    <div className='row'>
                                                        <Dropdown.Item eventKey="Email">Email </Dropdown.Item>
                                                        <Dropdown.Divider />
                                                        <Dropdown.Item eventKey="Password">Password</Dropdown.Item>
                                                    </div >
                                                </div>
                                            </DropdownButton>
                                        </div>
                                        <TabList>
                                            <div className='Tab-list'>
                                                {
                                                    formType.map((item, key) => {
                                                        return (
                                                            <Tab>
                                                                <div className="side-bar-content">
                                                                    <h2>{item.field_type}</h2>
                                                                </div>
                                                            </Tab>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </TabList>


                                    </div>

                                </div>

                                <div className='column form-area'>                           

                               {
                                   formType.map((item,key)=>{
                                       return(
                                        <TabPanel>
                                        <div className="panel-content">
                                            <h2>{item.field_jsx}</h2>
                                        </div>
                                    </TabPanel>
                                       )
                                   })
                               }
                                   
                           
                                    </div>

                            </div>


                        </Tabs>

                    </div>

                    <div className=" col-lg-3">
                        heelo
                    </div>
                </div>
            </div>












        </>)
}

export default Form
