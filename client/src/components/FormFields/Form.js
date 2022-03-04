import React, { useState, useReducer, useEffect } from 'react'
import './Form.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import MultichoiceAllVisible from './FormFieldTypes/MultichoiceAllVisible';
import SingleLineQues from './FormFieldTypes/SingleLineQues';
import Phone from './FormFieldTypes/Phone'
import Email from './FormFieldTypes/Email'
import TextMultiLine from './FormFieldTypes/TextMultiLine';
import Slider from './FormFieldTypes/Slider'
import DropDown from './FormFieldTypes/DropDown';
import FileUpload from './FormFieldTypes/FileUpload';
import Date from './FormFieldTypes/Date'
import Ratings from './FormFieldTypes/Ratings';
import PictureChoice from './FormFieldTypes/PictureChoice';
import YesNo from './FormFieldTypes/YesNo';

import { FaAlipay } from "react-icons/fa";
const Form = () => {

    const Descriptive = [
        'Single Line text', 'Multi Line Text',
        'Email', 'Phone',
        'Website', 'Date']

    const Choice = [
        'Multiple Choice', 'Single Choice',
        'Drop Down (Single Choice)', 'Drop Down (Multi Choice)',
        'Picture Choice', 'Slider', 'Yes/No', 'Ratings']

    const File_Upload = ['Picture Choice', 'File Upload']
    const Contact = ['Email', 'Phone', 'Website']
    const General = ['Single Line text', 'Multi Line text', 'File Upload', 'Multiple Choice',]
    const [formType, SetFormType] = useState([])

    const handleSelect = (e) => {
        if (e == 'Single Line text') {
            SetFormType([...formType, { field_type: e, field_jsx: <SingleLineQues /> , color:"pink"}])
        }
        else if (e == 'Multiple Choice') {
            SetFormType([...formType, { field_type: e, field_jsx: <MultichoiceAllVisible />, color:"orange" }])
        }
        else if (e == 'Phone') {
            SetFormType([...formType, { field_type: e, field_jsx: <Phone />, color:"#8b94d9" }])
        }
        else if (e == 'Email') {
            SetFormType([...formType, { field_type: e, field_jsx: <Email />, color:"green" }])
        }
        else if (e == "Multi Line Text") {
            SetFormType([...formType, { field_type: e, field_jsx: <TextMultiLine />, color:"yellow" }])
        }
        else if (e == "Slider") {
            SetFormType([...formType, { field_type: e, field_jsx: <Slider />, color:"#32a889" }])
        }
        else if (e == "Drop Down (Single Choice)") {
            SetFormType([...formType, { field_type: e, field_jsx: <DropDown /> , color:"#8988a8"}])
        }
        else if (e == 'Drop Down (Multi Choice)') {
            SetFormType([...formType, { field_type: e, field_jsx: <DropDown /> ,color:"#a89888"}])
        }
        else if (e == 'Picture Choice') {
            SetFormType([...formType, { field_type: e, field_jsx: <PictureChoice /> ,color:"#b37978"}])
        }
        else if (e == 'Yes/No') {
            SetFormType([...formType, { field_type: e, field_jsx: <YesNo />,color:"#b37899" }])
        }
        else if (e == 'Ratings') {
            SetFormType([...formType, { field_type: e, field_jsx: <Ratings /> ,color:"#3a4163"}])
        }
        else if (e == "File Upload") {
            SetFormType([...formType, { field_type: e, field_jsx: <FileUpload /> ,color:"#523a63"}])
        }
        else if (e == 'Date') {
            SetFormType([...formType, { field_type: e, field_jsx: <Date />, color:"#69384b"}])
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
                            <div className='row forms-views '>
                                <div className='column side-panel'  >
                                    <div className="tools-side-bar">
                                        <div className="add-button">
                                            <DropdownButton
                                                key='end'
                                                drop='end'
                                                id={`dropdown-button-drop-end`}
                                                title="+"
                                                onSelect={handleSelect}>
                                                <div className='container-fluid'>
                                                    <div className='row row1'>
                                                        <div className='column'>
                                                            <h1 className='headings descriptive'>Descriptive Fields</h1>
                                                            {
                                                                Descriptive.map((item) => {
                                                                    return (
                                                                        <Dropdown.Item className='drop-down-item-row1' style={{backgroundColor:item.color}}
                                                                            eventKey={item}>
                                                                            {item}
                                                                        </Dropdown.Item>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <div className='column'>
                                                            <h1 className='headings choice'>Choice</h1>
                                                            {
                                                                Choice.map((item) => {
                                                                    return (
                                                                        <Dropdown.Item className='drop-down-item-row1'
                                                                        style={{backgroundColor:item.color}}
                                                                            eventKey={item}>
                                                                            {item}
                                                                        </Dropdown.Item>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <div className='column'>
                                                            <h1 className='headings upload'>Upload</h1>
                                                            {
                                                                File_Upload.map((item) => {
                                                                    return (
                                                                        <Dropdown.Item className='drop-down-item-row1'
                                                                        style={{backgroundColor:item.color}}
                                                                            eventKey={item}>
                                                                            {item}
                                                                        </Dropdown.Item>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className='row row1'>
                                                        <div className='column drop-down-item-row2 general-items'>
                                                            <h1 className='headings general'>General</h1>
                                                            {
                                                                General.map((item) => {
                                                                    return (
                                                                        <Dropdown.Item
                                                                        style={{backgroundColor:item.color}}
                                                                            eventKey={item}>
                                                                            {item}
                                                                        </Dropdown.Item>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <div className='column drop-down-item-row2 contact-items'>
                                                            <h1 className='headings contact'>Contact</h1>
                                                            {
                                                                Contact.map((item) => {
                                                                    return (
                                                                        <Dropdown.Item
                                                                        
                                                                            eventKey={item}>
                                                                            {item}
                                                                        </Dropdown.Item>
                                                                    )
                                                                })
                                                            }
                                                        </div>


                                                    </div>
                                                </div>
                                            </DropdownButton>
                                        </div>
                                        <div className='column'>
                                            <TabList>
                                                <div className='Tab-list'>
                                                    {

                                                        formType.map(
                                                            (item, key) => {
                                                                return (
                                                                    <Tab>
                                                                        <div className="side-bar-content" style={{backgroundColor:item.color}} >
                                                                        <h2>   {key+1 }. <span> 
                                                                            {item.field_type}</span></h2>
                                                                        </div>
                                                                    </Tab>)
                                                            })
                                                    }
                                                </div>
                                            </TabList>
                                        </div>
                                    </div>
                                </div>
                                <div className='column form-area'>
                                    {
                                        formType.map((item, key) => {
                                            return (
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
