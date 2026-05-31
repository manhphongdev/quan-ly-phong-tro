import { Modal, Button, Form } from 'react-bootstrap';

function VehicleModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thêm phương tiện</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="vehiclePlate">
            <Form.Label>Biển số</Form.Label>
            <Form.Control type="text" placeholder="Nhập biển số" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="vehicleType">
            <Form.Label>Loại phương tiện</Form.Label>
            <Form.Control type="text" placeholder="Nhập loại phương tiện" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="vehicleOwner">
            <Form.Label>Chủ xe</Form.Label>
            <Form.Control type="text" placeholder="Nhập tên chủ xe" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Đóng
        </Button>
        <Button variant="primary" onClick={onHide}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VehicleModal;
