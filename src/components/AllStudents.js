import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function AllStudents(props) {
  let navigate = useNavigate();
  let handleDelete = (i) => {
    let newArray = [...props.data.students];
    newArray.splice(i, 1);
    props.data.setStudents(newArray);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {props.data.students.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.a}</td>
                <td>{e.b}</td>
                <td>{e.c}</td>
                <td>{e.d}</td>
                <td>{e.e}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(i)}>
                    Delete
                  </Button>
                  <span>&nbsp; &nbsp;</span>
                 
                  {/* <Button variant='primary' onClick={()=>{
                                            navigate('/edit-student/'+i)
                                        }}>Edit</Button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default AllStudents;
