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
    /*const [iconColor, setIconColor] = useState(null);*/


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


    /*      {announcement.priority === "High" ? <IoIcons.IoIosMegaphone style={{color: "darkred"}}/> : <IoIcons.IoIosMegaphone style={{color: "darkorange"}}/>}
    *
    *       switch (priorityColor) {
                case "High":
                    return (<IoIcons.IoIosMegaphone style={{color: "darkred"}}/>);
                case "Medium":
                    return (<IoIcons.IoIosMegaphone style={{color: "darkorange"}}/>);
                case "Low":
                    return (<IoIcons.IoIosMegaphone style={{color: "#333"}}/>);
                default:
                    return (<IoIcons.IoIosMegaphone style={{color: "black"}}/>);
            }
    *
    *
    *
    *  */

    const priorityColors = {
        "High": "darkred",
        "Medium": "darkorange",
        "Low": "#333"
    };


    return(
        <Container className="mt-4">
            {announcements.map((announcements) =>
                <Card key={announcements._id} className="mt-5 shadow"
                      style={{display: "flex", flexDirection: "column"}}>
                    <Card.Body>
                        <Card.Title>
                            <Card.Subtitle>
                                <IoIcons.IoIosMegaphone style={{color: priorityColors[announcements.priority]}} />
                                {" "}Priority: {announcements.priority}
                            </Card.Subtitle><br/>
                            <Card.Subtitle>Subject: {announcements.subject}</Card.Subtitle>
                        </Card.Title>
                        <Card.Text>
                            <p className="text-truncate">{announcements.content}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>)}
        </Container>
    )
}

export default DisplayAnnouncements;