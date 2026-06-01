import {Col, Row} from 'react-bootstrap';
import RoomCard from './RoomCard.jsx';

function FloorSection({floor, rooms, onRoomClick}) {
    return (
        <section className="floor-section">
            <div className="floor-heading">
                <h2>{floor}</h2>
                <span/>
            </div>

            <Row className="rooms-grid g-3 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                {rooms.map((room) => (
                    <Col key={room.id}>
                        <RoomCard room={room} onClick={onRoomClick}/>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default FloorSection;
