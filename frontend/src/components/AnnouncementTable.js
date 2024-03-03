import { useState, useEffect } from 'react';
import { Table, Container, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';





const AnnouncementTable = () => {
    const [announcements, setAnnouncements] = useState([])
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
    }, []);

        async function deleteAnnouncement(announcementId) {
            try {
                await fetch(`http://localhost:8000/api/announce/delete/${announcementId}`, {
                    method: "DELETE",
                    })
                setAnnouncements((announcements.filter(announcement => announcement._id !== announcementId)));
            }
            catch (error) {
                console.error("Error deleting announcement:", error);
            }
        }
    return (
        <Container className="col8">
            <Table response hover>
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

                {/*     FIX DELETE BUTTON       */}
                        <Button variant={"btn"} type="submit">
                            <FaIcons.FaTrash onClick={() => deleteAnnouncement(announcement._id)}  style={{color: "#aaa"}} />
                        </Button>
                    </td>
                </tr>)}
                </tbody>
            </Table>

            <br />
            <Button className="mt-5" onClick={modalShow}>Launch Modal</Button>
            <Modal show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting Record Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure?</Modal.Body>
                <Modal.Footer>
                    <Button variant={"btn btn-outline-success"} onClick={modalClose}>Yes</Button>
                    <Button variant={"btn btn-outline-danger"} onClick={modalClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default AnnouncementTable;
