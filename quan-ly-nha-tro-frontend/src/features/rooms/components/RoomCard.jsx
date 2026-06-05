import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const statusStyles = {
    'Đang thuê': {
        cardClass: 'border-primary bg-primary-subtle',
        badgeBg: 'primary',
    },
    'Trống': {
        cardClass: 'border-success bg-success-subtle',
        badgeBg: 'success',
    },
    'Đang sửa': {
        cardClass: 'border-danger bg-danger-subtle',
        badgeBg: 'danger',
    },
};

function RoomCard({room, onClick}) {
    const statusStyle = statusStyles[room.status] ?? {
        cardClass: 'border-secondary',
        badgeBg: 'secondary',
    };

    return (
        <Card className={`room-card ${statusStyle.cardClass}`} onClick={() => onClick(room.id)}>
            <Card.Body>
                <div className="room-card-header">
                    <h3>Phòng {room.code}</h3>
                    <Badge pill bg={statusStyle.badgeBg} className="room-status-badge">
                        {room.status}
                    </Badge>
                </div>
            </Card.Body>
        </Card>
    );
}

export default RoomCard;
