import {Card, Container} from "react-bootstrap";
import { useEffect, useState } from 'react'
import * as IoIcons from 'react-icons/io';

const priorityColors = {
    "High": "darkred",
    "Medium": "darkorange",
    "Low": "#333"
};


function DisplayAnnouncements() {
    const [announcements, setAnnouncements] = useState([]);
    const [show, setShow] = useState(false);

    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);

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
                console.log(_response.announcements);

            } else {
                console.log(_response.error);
            }

        }
        getAnnouncements();
    }, []);


    const priorityColors = {
        "High": "darkred",
        "Medium": "darkorange",
        "Low": "#333"
    };


    return(
        <Container className="mt-5">
            <div>Announcement</div>
            <hr className="mb-5" style={{width: "300px"}}/>
            {announcements.filter(announcement => announcement.display === true).map((announcement) =>
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
        </Container>
    )
}

export default DisplayAnnouncements;