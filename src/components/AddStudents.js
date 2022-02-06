import React,{useContext,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

import {useFormik} from 'formik';
import * as yup from'yup' 
// import {StudentContext} from '../App'

function AddStudents(props) {

    // let context = useContext(StudentContext)

    let navigate = useNavigate();
   
    


    //using axios
    let handleSubmit = (values)=>{

        let a=values.name;
        let b= values.email;
        let c = values.mobile;
        let d=values.from;
        let e= values.to;

           let newData = {a,b,c,d,e };
           let newArray = [...props.data.students];
           console.log(newData);
           newArray.push(newData);
           props.data.setStudents(newArray);
              
              console.log(props.data.students);
                navigate('/all-students')
            
    }

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            mobile:'',
            to:'',
            from:''
        },
        validationSchema: yup.object({
            name:yup.string().required('Required'),
            email:yup.string().email('Invalid Email').required('Required'),
            mobile:yup.string().matches(/^\d{10}$/,"Mobile number not valid").required('Required'),
            to:yup.string(),
            from:yup.string()
        }),
        onSubmit:values=>{
            console.log(values)
            handleSubmit(values)
        }
    
    })

    return <div>
        <h1>Add Student</h1>
        <form onSubmit ={formik.handleSubmit}>
        <div className='form-group'>
            <label for='name'>Name</label>
            <input
            id="name"
            name='name'
            type='text'
            className='form-control'
            placeholder='Enter Name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name?<div style={{color:'red'}}>{formik.errors.name}</div>:null}
        </div>

        <div className='form-group'>
            <label for='name'>Email</label>
            <input
            id="email"
            name='email'
            type='email'
            className='form-control'
            placeholder='Enter email'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email?<div style={{color:'red'}}>{formik.errors.email}</div>:null}
        </div>

        

        <div className='form-group'>
            <label for='name'>Mobile</label>
            <input
            id="mobile"
            name='mobile'
            type='text'
            className='form-control'
            placeholder='Enter Mobile'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile?<div style={{color:'red'}}>{formik.errors.mobile}</div>:null}
        </div>

        <div className='form-group'>
            <label for='to'>From</label>
            <input
            id="from"
            name='from'
            type='text'
            className='form-control'
            placeholder='Enter From'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.from}
            />
            {formik.touched.from && formik.errors.from?<div style={{color:'red'}}>{formik.errors.from}</div>:null}
        </div>
        <div className='form-group'>
            <label for='to'>Password</label>
            <input
            id="to"
            name='to'
            type='text'
            className='form-control'
            placeholder='Enter To'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.to}
            />
            {formik.touched.to && formik.errors.to?<div style={{color:'red'}}>{formik.errors.to}</div>:null}
        </div>
        
        <div className='form-group'>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
        
        </form>
    </div>
}

export default AddStudents


{/* <Form>

<Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
</Form.Group>

<Form.Group className="mb-3" >
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Class</Form.Label>
    <Form.Control type="text" placeholder="Class" onChange={(e)=>setCls(e.target.value)}/>
</Form.Group>

<Button variant="primary" onClick={handleSubmit}>
    Submit
</Button>
</Form> */}