import React from 'react';
import { Button } from 'reactstrap';
import {
    Link,
} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="App">
                <div>
                    <h1 style={{ paddingTop: "200px", color: "black",fontFamily:"Lucida Console ,Courier New,monospace"}}>Project Management Tool</h1>
                </div>

                <div style={{ paddingTop: "100px" }}>
                    <Link to="/newTask"><Button color="warning" size="lg">Add Task</Button></Link>
                    <Link to="/currentTasks">
                        <Button color="primary" size="lg" style={{ marginLeft: "30px", marginRight: "30px" }}>Current Tasks</Button>
                    </Link>
                    <Link to="/completedTasks"><Button color="danger" size="lg">Complete Tasks</Button></Link>
                </div>
                <footer style={{ paddingTop: "200px", color: "black",fontFamily:"Lucida Console ,Courier New,monospace"}}> <small>&copy; Copyright 2020 Akash, All Rights Reserved</small> </footer>
            </div>
        </>

    );
}

export default Home;