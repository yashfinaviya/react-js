import { useEffect, useState } from "react";
import { Col, Row, Table, Form, Container, Button } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import './hcrud.css'

const getLocalData = () => {
    return JSON.parse(localStorage.getItem("Patientdata")) || []
}
const Hospital = () => {
    const intialState = {
        id: "",
        fname: "",
        age: "",
        height: "",
        weight: "",
        past: "",
        drname: "",
        bloodgroup: "",
        doj: "",
        contact: "",
        gender: "",
    }
    const [inputForm, setInputForm] = useState(intialState);
    const [isEdit, setIsEdit] = useState(false);
    const [storage, setStorage] = useState(getLocalData());

    const handelChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            let updateData = storage.map((patient) => {
                if (patient.id == inputForm.id) {
                    return inputForm
                } else {
                    return patient;
                }
            });
            setStorage(updateData);
            setIsEdit(false);
        } else {
            let id = Math.floor(Math.random() * 10000)
            setStorage([...storage, { ...inputForm, id }])
        }


        setInputForm(intialState)

    }

    const handelDelete = (id) => {
        let updateData = storage.filter((patient) => patient.id != id)
        // console.log(updateData);
        setStorage(updateData)
    }

    const handelEdit = (id) => {
        let patients = storage.find((patient) => patient.id == id)
        setInputForm(patients)
        setIsEdit(true);
    }
    // console.log("Storage ==> ", storage);
    useEffect(() => {
        localStorage.setItem("Patientdata", JSON.stringify(storage));
    }, [storage]);
    return (
        <>
            <Container>
                <Table>
                    <Row>
                        <Form onSubmit={handelSubmit}>
                            <h2 className="mb-5 title">~~ Patient Detail</h2>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    FullName :
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" name="fname" value={inputForm.fname} onChange={handelChanged} />
                                </Col>
                                <Form.Label column sm="2">
                                    Age :
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" name="age" value={inputForm.age} onChange={handelChanged} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    Height (in semi) :
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" name="height" value={inputForm.height} onChange={handelChanged} />
                                </Col>
                                <Form.Label column sm="2">
                                    Weight (in Kg) :
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" name="weight" value={inputForm.weight} onChange={handelChanged} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    Past Treatment:
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Check type="checkbox" label={"Yes"} name="past" value={"Yes"} onChange={handelChanged} />
                                    <Form.Check type="checkbox" label={"No"} name="past" value={"No"} onChange={handelChanged} />
                                </Col>
                                <Col sm="2">

                                </Col>
                                <Form.Label column sm="2">
                                    Past dr. Name :
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" name="drname" value={inputForm.drname} onChange={handelChanged} />
                                </Col>

                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    Blood Group :
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Select aria-label="Default select example" name="bloodgroup" onChange={handelChanged}>
                                        <option>-- Select Blood Group --</option>
                                        <option value="A+">A+</option>
                                        <option value="A">A</option>
                                        <option value="B+">B+</option>
                                        <option value="B">B</option>
                                        <option value="O+">O+</option>
                                        <option value="O">O</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB">AB</option>
                                    </Form.Select>
                                </Col>
                                <Form.Label column sm="2">
                                    Date of Joining :
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="date" name="doj" value={inputForm.doj} onChange={handelChanged} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="2">
                                    Contact :
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" name="contact" value={inputForm.contact} onChange={handelChanged} />
                                </Col>
                                <Form.Label column sm="2">
                                    Gender :
                                </Form.Label>
                                <Col sm="1">
                                    <Form.Check type="radio" label={"Male"} name="gender" value={"Male"} onChange={handelChanged} />
                                </Col>
                                <Col sm="1" className="me-2">
                                    <Form.Check type="radio" label={"Female"} name="gender" value={"Female"} onChange={handelChanged} />
                                </Col>
                                <Col sm="1">
                                    <Form.Check type="radio" label={"Other"} name="gender" value={"Other"} onChange={handelChanged} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column sm="5">
                                </Form.Label>
                                <Col sm="4">
                                    <Button type="submit" className="button~">{isEdit ? "Update" : "Add"} Register</Button>
                                </Col>
                            </Form.Group>
                        </Form>


                        {/* 2nd Row */}
                        <Row className="rw2 mt-5">
                            <h2 className="text-center fw-bold mt-4 title">~~ View Patient</h2>
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Full Name</th>
                                        <th>Age</th>
                                        <th>Height</th>
                                        <th>Weight</th>
                                        <th>Past Treatment</th>
                                        <th>Past dr. Name :</th>
                                        <th>BloodGroup</th>
                                        <th>date of Joining</th>
                                        <th>Contact</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        storage.map((patient) => (

                                            <tr>
                                                <td>{patient.id}</td>
                                                <td>{patient.fname}</td>
                                                <td>{patient.age}</td>
                                                <td>{patient.height}</td>
                                                <td>{patient.weight}</td>
                                                <td>{patient.past}</td>
                                                <td>{patient.drname}</td>
                                                <td>{patient.bloodgroup}</td>
                                                <td>{patient.doj}</td>
                                                <td>{patient.contact}</td>
                                                <td>{patient.gender}</td>
                                                <td>
                                                    <Button onClick={() => handelEdit(patient.id)}>
                                                        <FaEdit />
                                                    </Button> ||
                                                    <Button onClick={() => handelDelete(patient.id)} variant="danger">
                                                        <FaTrashAlt />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>
                        </Row>
                    </Row>
                </Table>
            </Container>
        </>
    )
}
export default Hospital;