import { Form, Col, Row, Button, Modal } from 'react-bootstrap';
import { Plus } from 'lucide-react';

function AddNewAssess({ isShow, handleClose }) {
    return (
        <Modal show={isShow} onHide={handleClose} size="lg" centered>
            <Modal.Header>
                <div className="d-flex align-items-center gap-3 mb-4">
                    <Plus size={22} className="text-secondary" />
                    <div>
                        <h5 className="fw-bold m-0" style={{ color: '#1e293b' }}>Thêm tài sản mới</h5>
                        <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>Nhập thông tin chi tiết về tài sản tại phòng ...</small>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="formAssetName">
                            <Form.Label className="fw-bold">Tên tài sản</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên tài sản..." />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formAssetCategory">
                            <Form.Label className="fw-bold">Loại tài sản</Form.Label>
                            <Form.Select>
                                <option>Chọn loại tài sản</option>
                                <option>Thiết bị điện</option>
                                <option>Đồ nội thất</option>
                                <option>Đồ gia dụng</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="serialNumber">
                            <Form.Label className="fw-bold">Số seri</Form.Label>
                            <Form.Control type="text" placeholder="Nhập số seri..." />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="purchaseDate">
                            <Form.Label className="fw-bold">Ngày mua</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="expirationDate">
                            <Form.Label className="fw-bold">Thời hạn bảo hành</Form.Label>
                            <Form.Control type="number" placeholder="Nhập thời hạn bảo hành... (tháng)" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="assessValue">
                            <Form.Label className="fw-bold">Giá trị đánh giá</Form.Label>
                            <Form.Control type="number" placeholder="Nhập giá trị tài sản (VND)." />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="notes">
                            <Form.Label className="fw-bold">Ghi chú</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Nhập ghi chú chi tiết về tài sản..." />
                        </Form.Group>
                    </Row>
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                <div className="d-flex justify-content-end mt-4">
                    <Button variant="secondary" onClick={handleClose}>Hủy</Button>
                    <Button variant="primary" className="ms-2">
                        Thêm tài sản
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>

    );
}

export default AddNewAssess;