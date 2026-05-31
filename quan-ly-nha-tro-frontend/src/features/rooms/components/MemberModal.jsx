import { Modal, Button, Form } from 'react-bootstrap';

function MemberModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thêm thành viên</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="memberName">
            <Form.Label>Tên thành viên</Form.Label>
            <Form.Control type="text" placeholder="Nhập tên thành viên" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="memberRole">
            <Form.Label>Vai trò</Form.Label>
            <Form.Select>
              <option>Chủ hợp đồng</option>
              <option>Thành viên</option>
            </Form.Select>
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

export default MemberModal;