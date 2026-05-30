import { Container, Row, Col, Button } from 'react-bootstrap';
import { Save } from 'lucide-react';
import AssetStateTable from '../components/AssetStateTable';
function AssessStates() {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1 className="fw-bold">Kiểm tra Trạng thái Tài sản - Phòng 101 - Tòa ...</h1>
                </Col>
                <Col md={4} className="text-end">
                    <Button variant="dark" className="d-inline-flex align-items-center gap-2 px-3 py-2 fw-semibold" style={{ backgroundColor: '#0f172a', borderRadius: '6px' }}>
                        <Save size={18} /> Lưu kết quả kiểm tra
                    </Button>
                </Col>
            </Row>
            <Row>
                <AssetStateTable />
            </Row>
        </Container>
    );
}

export default AssessStates;