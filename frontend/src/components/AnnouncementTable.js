import { useState, useEffect } from 'react';
import { Table, Container, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';





const AnnouncementTable = () => {
    const [announcements, setAnnouncements] = useState([])
    const [announcementCount, setAnnouncementCount] = useState(0);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(null);

    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);


    /*      GET ANNOUNCEMENTS    */
    useEffect(() => {
        async function getAnnouncements() {
            const response = await fetch("http://localhost:8000/api/announce/announcements", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const _response = await response.json();

            if (response.ok && _response.announcements) {
                setAnnouncements(_response.announcements);
            } else {
                console.log(_response.error);
            }
        }
        getAnnouncements();
    }, [announcementCount]);

    return (
        <Container>
            <Table responsive hover>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Audience</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {announcements.map((announcement) => <tr key={announcement._id}>
                    <td>{announcement.display ?  <FaIcons.FaGlasses style={{color: "#0b8c2f"}}/> : <FaIcons.FaGlasses style={{color: "#cfcccc"}}/>}</td>
                    <td>{announcement.name}</td>
                    <td>{announcement.subject}</td>
                    <td>{announcement.audience}</td>
                    <td>
                        <Button as={Link} to={`/editannouncement/${announcement._id}`} variant={"btn"}>
                            <FaIcons.FaEdit style={{color: "dodgerblue"}} />
                        </Button>

                        {/*DELETE BUTTON*/}
                        <Button variant={"btn"} type="submit" onClick={modalShow}>
                            <FaIcons.FaTrash style={{color: "#aaa"}}  />
                        </Button>
                    </td>
                </tr>)}
                </tbody>
            </Table>

            <br />

            <Modal show={show} onHide={modalClose} size="sm">
                <Modal.Body closeButton>Deleting record; are you Sure?</Modal.Body>
                <Modal.Footer>
                    <Button variant={"btn btn-outline-success"} onClick={modalClose}>Yes</Button>
                    <Button variant={"btn btn-outline-danger"} onClick={modalClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default AnnouncementTable;
