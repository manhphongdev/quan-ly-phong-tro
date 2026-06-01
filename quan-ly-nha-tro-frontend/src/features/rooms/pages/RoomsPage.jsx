import {useMemo, useState} from 'react';
import {Search} from 'lucide-react';
import {Button, Form, InputGroup} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import FloorSection from '../components/FloorSection.jsx';
import roomsList from '../services/roomsList.js';
import '../rooms.css';

const roomFilters = ['Tất cả', 'Trống', 'Đang thuê', 'Đang sửa'];

function groupRoomsByFloor(rooms) {
    return rooms.reduce((floors, room) => {
        if (!floors[room.floor]) {
            floors[room.floor] = [];
        }

        floors[room.floor].push(room);
        return floors;
    }, {});
}

function RoomsPage() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('Tất cả');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRooms = useMemo(() => {
        const normalizedSearchTerm = searchTerm.trim().toLowerCase();

        return roomsList.filter((room) => {
            const matchesFilter = activeFilter === 'Tất cả' || room.status === activeFilter;
            const matchesSearch = !normalizedSearchTerm || room.code.toLowerCase().includes(normalizedSearchTerm);

            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchTerm]);

    const roomsByFloor = groupRoomsByFloor(filteredRooms);

    const handleRoomClick = (roomId) => {
        navigate(`/rooms/${roomId}`);
    };

    return (
        <div className="rooms-page">
            <div className="rooms-toolbar">
                <div className="rooms-filter-group">
                    {roomFilters.map((filter) => (
                        <Button
                            key={filter}
                            type="button"
                            className="rooms-filter-button"
                            variant={activeFilter === filter ? 'primary' : 'light'}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>

                <InputGroup className="rooms-search">
                    <InputGroup.Text>
                        <Search size={16}/>
                    </InputGroup.Text>
                    <Form.Control
                        type="search"
                        placeholder="Tìm số phòng..."
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </InputGroup>
            </div>

            {filteredRooms.length > 0 ? (
                Object.entries(roomsByFloor).map(([floor, rooms]) => (
                    <FloorSection key={floor} floor={floor} rooms={rooms} onRoomClick={handleRoomClick}/>
                ))
            ) : (
                <p className="rooms-empty">Không tìm thấy phòng phù hợp.</p>
            )}
        </div>
    );
}

export default RoomsPage;
