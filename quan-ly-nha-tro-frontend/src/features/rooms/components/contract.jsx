import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import { CreditCard, MapPin, Download, RefreshCcw } from 'lucide-react';

const ContractDetailsCard = () => {
  const [reminderEnabled, setReminderEnabled] = useState(true);

  return (
    <Container fluid className="p-4 bg-light">
      

      <Row>
        <Col md={8}>
            <Card className="mb-4 shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between text-muted text-uppercase small mb-2">
            <div>NGÀY BẮT ĐẦU</div>
            <div>NGÀY KẾT THÚC</div>
            <div>THỜI HẠN CÒN LẠI</div>
          </div>
          <div className="d-flex justify-content-between mb-3 fw-bold fs-4">
            <div>01/01/2024</div>
            <div>01/01/2025</div>
            <div className="text-primary">245 ngày</div>
          </div>
          <Form.Group className="d-flex align-items-center justify-content-between border-top pt-3">
            <Form.Label className="m-0 text-muted">
              Tự động gửi mail nhắc gia hạn trước 1 tháng
            </Form.Label>
            <Form.Check
              type="switch"
              id="reminder-switch"
              checked={reminderEnabled}
              onChange={() => setReminderEnabled(!reminderEnabled)}
            />
          </Form.Group>
        </Card.Body>
      </Card>
          <Row>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center mb-3">
                    <CreditCard className="me-2 text-primary" size={20} />
                    Tiền đặt cọc
                  </Card.Title>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-3 fw-bold">5.000.000 đ</div>
                    <select className="form-select w-auto">
                      <option>Chưa thu</option>
                      <option>Đã thu</option>
                    </select>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center mb-3">
                    <MapPin className="me-2 text-primary" size={20} />
                    Tạm trú
                  </Card.Title>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="text-muted">Đã đăng ký</div>
                    <div className="d-flex align-items-center gap-2 text-primary">
                      <span className="small">Xem mẫu</span>
                      <Download size={18} />
                      <span className="small">Tải</span>
                    </div>
                  </div>
                  <div className="text-muted small mb-1">Minh chứng đã duyệt</div>
                  <div className="position-relative border rounded p-1 mb-3">
                    <Image
                      src="/path/to/cropped-building-image.png" // Replace with your image source
                      alt="Building Proof"
                      fluid
                      className="rounded"
                    />
                    <div className="position-absolute bottom-0 end-0 p-2 text-danger small text-end" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', textDecoration: 'underline overline' }}>
                      ĐÃ<br/>NHẬN
                    </div>
                  </div>
                  <Button variant="outline-primary" size="sm" className="d-flex align-items-center w-100 justify-content-center">
                    <RefreshCcw className="me-2" size={16} />
                    Thay đổi minh chứng
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column align-items-center p-3">
              <Card.Title className="w-100 text-start text-dark mb-3">
                Xem hợp đồng
              </Card.Title>
              <div className="position-relative w-100 border rounded flex-grow-1 d-flex justify-content-center align-items-center">
                <Image
                  src="/path/to/building-image.png" // Replace with your image source
                  alt="Contract Building Preview"
                  fluid
                  className="rounded"
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
                <div className="position-absolute text-muted fs-6 fw-light text-center" style={{ top: '30%', left: '10%', right: '10%' }}>
                  HỢP ĐỒNG MẪU
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContractDetailsCard;