import React, { useEffect, useState } from 'react'
import './apidesign.css'
import Select from 'react-select'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import {statuscode} from '../StatusCodes.js'
function Apidesign() {
    const [select, setselect] = useState("") 
    const [server, setserver] = useState("") 
    const [views, setview] = useState("no result..!") 
    const [heading, setheading] = useState([])
    const [datas, setdatas] = useState("")
    const [status, setStatus] = useState("")
    const [statusmain, setStatusmain] = useState({code:"",discription:""})
    // const columns = views[0] && Object.keys(views[0])

    function handlechange(e){
        setselect(e.value)
        console.log(e.value)
    }

    useEffect(() => {
        setview("no result...!")
        setdatas("")
        setStatus("")
        // console.log(statuscode)
    }, [select])

    
    
    
    function btnclicked(){
       
        if(select=='Get'){
            axios.get(server).then((data)=>{
                console.log(data)
                setview(data.data)
                setStatus(data.status)
                // setheading(Object.keys(data.data.data[0]))
            }).catch((error) => {
                setview(error.message)
                setStatus(error.response.status)
                // setview(error)
                // if( error.response ){
                //     console.log(error.response.data); // => the response payload 
                // }
            })
        }
        else if(select=='Post'){
            console.log(server+","+datas)
            axios.post(server,datas).then((data)=>{
                setview(data)
                setStatus(data.status)
            }).catch((error) => {
                console.log(error.message)
                setview(error.message)
                setStatus(error.response.status)

                // setview(error)
                // if( error.response ){
                //     console.log(error.response.data); // => the response payload 
                // }
            })
        }

        else if(select=='Put'){
            console.log(server+","+datas)
            axios.put(server,datas).then((data)=>{
                setview(data)
                setStatus(data.status)
            }).catch((error) => {
                console.log(error.message)
                setview(error.message)
                setStatus(error.response.status)
                // setview(error)
                // if( error.response ){
                //     console.log(error.response.data); // => the response payload 
                // }
            })
        }
        else if(select=='Delete'){
            console.log(server+","+datas)
            axios.delete(server,datas).then((data)=>{
                setview(data)
                setStatus(data.status)
            }).catch((error) => {
                console.log(error.message)
                setview(error.message)
                setStatus(error.response.status)

                // setview(error)
                // if( error.response ){
                //     console.log(error.response.data); // => the response payload 
                // }
            })
        }
        
    }

    useEffect(() => {
        statuscode.filter(column=>{
            if(column.code==status){
            // console.log(column.code)
            console.log("st"+column)
                return column
            }
        }).map((obj)=>{
            console.log("obj"+obj.code)
            setStatusmain({code:obj.code,discription:obj.discription})
        })
    }, [status])
    

    function datahandlechange(e){
            // var ugly = e.target.value;
            // var obj = JSON.parse(ugly);
            // var pretty = JSON.stringify(obj, undefined, 4);
            // e.target.value = pretty;
        setdatas(JSON.parse(e.target.value))
        console.log(e.target.value)
    }
    function inputserver(e){
        setserver(e.target.value);
    }
    const options = [
        { value: 'Post', label: 'Post' },
        { value: 'Get', label: 'Get' },
        { value: 'Put', label: 'Put' },
        { value: 'Delete', label: 'Delete' },

      ]
  return (
      <>
    <div className='apidesign'>
        <Select options={options} onChange={handlechange}/>
        <input type="text" onChange={inputserver}/>
        {/* <Button variant='Warning'>Check</Button> */}
        <Button variant="warning" className='buttondesign' onClick={btnclicked}>Check</Button>
        
    </div>

    {/* {views.map((view)=>{
        return(
            columns.map((obj)=>{
                console.log(view[obj])
        return (
            <h1 key={view.obj}>{obj}</h1>
        )
    }))})} */}
    <div className={select!='Get' ? "textareas" : "textareasdisable"}>
        <input type="text" name="" placeholder='enter the data here...!' onChange={datahandlechange}/>
    </div>
    <div className="result">
        <h1>
            Result</h1>
            <div className='statuscode'>
                <h4 className='statuscodeh4'>status code : {statusmain.code}  -  {statusmain.discription}</h4>

                </div>
            <div className="resultmain">
                <pre>{JSON.stringify(views, null, 2)}</pre></div></div>    
    </>
  )
}

export default Apidesign