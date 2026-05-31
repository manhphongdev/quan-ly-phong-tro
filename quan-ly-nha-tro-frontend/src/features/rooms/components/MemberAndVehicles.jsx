import { useState } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import MemberModal from './MemberModal';
import VehicleModal from './VehicleModal';

// Dữ liệu mẫu dựa trên hình ảnh image_9561e8.png
const members = [
  { id: 1, name: 'Nguyễn Văn An', role: 'CHỦ HỢP ĐỒNG', avatar: 'NA' },
  { id: 2, name: 'Trần Thị Hoa', role: 'THÀNH VIÊN', avatar: 'TH' },
];

const vehicles = [
  { id: 1, licensePlate: '29-A1 123.45', type: 'Xe máy (Air Blade)', owner: 'Văn An' },
  { id: 2, licensePlate: '30-B2 678.90', type: 'Xe đạp điện', owner: 'Thị Hoa' },
];

export default function MemberVehicleManagement() {
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showVehicleModal, setShowVehicleModal] = useState(false);

  return (
    <Container className="my-4">
      <div className="member-section mb-4">
        <div className="d-flex justify-content-start align-items-center mb-3">
          <h2>Quản lý thành viên ({members.length})</h2>
          <Button variant="primary" className="rounded-pill ms-3" onClick={() => setShowMemberModal(true)}>
            Thêm thành viên
          </Button>
        </div>
        <Row>
          {members.map(member => (
            <Col key={member.id} md={4} className="mb-3">
              <Card>
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <div className="avatar rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                    {member.avatar}
                  </div>
                  <div>
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.role}</p>
                  </div>
                  <div>
                    <Button variant="outline-secondary" size="sm" className="me-2">Sửa</Button>
                    <Button variant="outline-danger" size="sm">Xóa</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="vehicle-section">
        <div className="d-flex justify-content-start align-items-center mb-3">
          <h2 className="fw-bold">Quản lý phương tiện ({vehicles.length})</h2>
          <Button variant="primary" className="rounded-pill ms-3" onClick={() => setShowVehicleModal(true)}>
            Thêm phương tiện
          </Button>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Biển số</th>
                <th>Loại phương tiện</th>
                <th>Chủ sở hữu</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map(vehicle => (
                <tr key={vehicle.id}>
                  <td>{vehicle.licensePlate}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.owner}</td>
                  <td>
                    <Button variant="outline-secondary" size="sm" className="me-2">Sửa</Button>
                    <Button variant="outline-danger" size="sm">Xóa</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <MemberModal show={showMemberModal} onHide={() => setShowMemberModal(false)} />
      <VehicleModal show={showVehicleModal} onHide={() => setShowVehicleModal(false)} />
    </Container>
  );
}
