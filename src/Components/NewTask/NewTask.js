import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Row,
    Col,
    Button
} from 'reactstrap';
import {
    Link
} from 'react-router-dom';

import axios from '../../axios-data';

const NewTask = () => {
    let [MemberName, setMemberName] = useState('');
    let [Project, setProject] = useState('');
    let [TaskDetail, settaskDetail] = useState('');
    let [Deadline, setDeadline] = useState('');

    const dataToFirebase = () => {
        const data = {
            MemberName,
            Project,
            TaskDetail,
            Deadline
        }
        axios.post("/data.json", data)
            .then(response => {
                console.log(response); 
                window.location.reload(false); 
            })
            .catch(error => { console.log(error) });  
    }

    return (
        <div className="App">
            <div>
                <h1 style={{ color: "grey" }}>Add New Task</h1>
            </div>

            <div>
                <Form style={{ paddingTop: "300px", color: "grey" }}>
                    <Row style={{ width: "80%", marginLeft: "10%" }}>
                        <Col>
                            <FormGroup>
                                <Input type="text" placeholder="Member Name" onChange={(e) => setMemberName(e.target.value)}></Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input type="text" placeholder="Project" onChange={(e) => setProject(e.target.value)}></Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input type="text" placeholder="Task Detail" onChange={(e) => settaskDetail(e.target.value)}></Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input type="text" placeholder="Deadline" onChange={(e) => setDeadline(e.target.value)}></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>

                <Row style={{ width: "30%", marginLeft: "40%" }}>
                    <Col lg={4}>
                        <Button style={{ width: "150px" }} color="warning" size="lg" onClick={dataToFirebase}>Add</Button>
                    </Col>
                    <Col lg={4}>
                        <Link to="/">
                            <Button style={{ width: "150px" }} color="secondary" size="lg">Back</Button>
                        </Link>

                    </Col>
                </Row>

            </div>

        </div>
    )
}

export default NewTask;
