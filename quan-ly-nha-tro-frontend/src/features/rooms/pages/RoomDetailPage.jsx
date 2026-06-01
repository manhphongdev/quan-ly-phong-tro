

import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {Badge, Button, Card, Container, Tab, Tabs} from 'react-bootstrap';
import {ArrowLeft} from 'lucide-react';
import AssetDetailsCard from '../../assets/components/AssetDetailsCard.jsx';
import Contract from '../components/contract.jsx';
import MemberAndVehicles from '../components/MemberAndVehicles.jsx';
import roomsList from '../services/roomsList.js';

const statusVariants = {
    'Đang thuê': 'primary',
    'Trống': 'success',
    'Đang sửa': 'danger',
};

function RoomDetailPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const room = roomsList.find((item) => item.id === Number(id));

    if (!room) {
        return <Navigate to="/rooms" replace/>;
    }

    return (
        <Container fluid className="room-detail-page p-0">
            <Card className="mb-4 shadow-sm">
                <Card.Body className="d-flex flex-column flex-md-row justify-content-between gap-3">
                    <div>
                        <Button
                            variant="link"
                            className="d-inline-flex align-items-center gap-2 p-0 mb-3 text-decoration-none"
                            onClick={() => navigate('/rooms')}
                        >
                            <ArrowLeft size={18}/>
                            Quay lại danh sách phòng
                        </Button>
                        <div className="text-muted fw-semibold mb-1">{room.floor}</div>
                        <h1 className="h3 fw-bold mb-0">Phòng {room.code}</h1>
                    </div>

                    <div className="d-flex align-items-start">
                        <Badge pill bg={statusVariants[room.status] ?? 'secondary'} className="px-3 py-2">
                            {room.status}
                        </Badge>
                    </div>
                </Card.Body>
            </Card>

            <Card className="shadow-sm">
                <Card.Body>
                    <Tabs defaultActiveKey="assets" className="mb-4">
                        <Tab eventKey="assets" title="Tài sản">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2 className="h4 fw-bold mb-0">Tài sản trong phòng</h2>
                            </div>

                            <AssetDetailsCard/>
                        </Tab>

                        <Tab eventKey="members" title="Thành viên & Phương tiện">
                            <MemberAndVehicles/>
                        </Tab>

                        <Tab eventKey="contract" title="Hợp đồng & tạm trú">
                            <Contract/>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default RoomDetailPage;
