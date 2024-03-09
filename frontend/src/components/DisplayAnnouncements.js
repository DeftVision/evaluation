import { Container, ListGroup } from "react-bootstrap";
import { useEffect, useState } from 'react'
import * as IoIcons from 'react-icons/io';



function DisplayAnnouncements() {
    const [announcements, setAnnouncements] = useState([]);
    const [display, setDisplay] = useState([]);
    const [show, setShow] = useState(true);


    async function getAnnouncements() {
        const response = await fetch('http://localhost:8000/api/announce/announcements', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const _response = await response.json();
        if(response.ok && _response.announcements) {
            setAnnouncements(_response.announcements);
        } else {
            console.log(_response.error);
        }
    }


    useEffect(() => {
        async function getAnnouncements() {
            const response = await fetch('http://localhost:8000/api/announce/announcements', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const _response = await response.json();
            if(response.ok && _response.announcements) {
                setAnnouncements(_response.announcements);
            } else {
                console.log(_response.error);
            }
        }
        getAnnouncements();
    }, [announcements.display]);


    const priorityColors = {
        "High": "darkred",
        "Medium": "darkorange",
        "Low": "#333"
    };


    return(
        <Container className="mt-5">
            <div>Announcement</div>
            <hr className="mb-5" style={{width: "300px"}}/>

            {announcements.map((announcement) => <ListGroup key={announcement._id} variant={"flush"}>
                {announcement.display &&
                    <ListGroup.Item>
                        <div style={{color: priorityColors[announcement.priority]}}><IoIcons.IoIosMegaphone />{" "}Priority: {announcement.priority}</div>
                        <div>Subject: {announcement.subject}</div>
                        <div className="text-truncate">{announcement.content}</div>
                    </ListGroup.Item>}
            </ListGroup>)}
        </Container>
    )
}

export default DisplayAnnouncements;

/*
*        {announcements.filter(announcement => announcement.display === true).map((announcement) =>
                <Card key={announcements._id} className="mt-5 shadow"
                      style={{display: "flex", flexDirection: "column"}}>
                    <Card.Body>
                        <Card.Title>
                            <Card.Subtitle>
                                <IoIcons.IoIosMegaphone style={{color: priorityColors[announcement.priority]}}/>
                                {" "}Priority: {announcement.priority}
                            </Card.Subtitle><br/>
                            <Card.Subtitle>Subject: {announcement.subject}</Card.Subtitle>
                        </Card.Title>
                            <Card.Text>
                                <p className="text-truncate">{announcement.content}</p>
                            </Card.Text>
                    </Card.Body>
                </Card>)}
* */