import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
// Sử dụng lucide-react để lấy các icon giống trong ảnh
import { Plus } from 'lucide-react';
import { useState } from 'react';
import AddNewAssessForm from '../components/AddNewAssess';
import AssetDetailsCard from '../components/AssetDetailsCard';
function AssessDetail() {
    const [ isShow, setIsShow] = useState(false);
    const handleClose = () => setIsShow(false);
    const handleShow = () => setIsShow(true);
    return (
        <>
            <Container className="py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
                {/* Header Section */}
                <Row className="align-items-center mb-4">
                    <Col md={8}>
                        <Breadcrumb className="small mb-1">
                            <Breadcrumb.Item href="#" className="text-decoration-none text-muted">Bất động sản</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" className="text-decoration-none text-muted">Tòa nhà A</Breadcrumb.Item>
                            <Breadcrumb.Item active className="text-dark fw-semibold">Phòng 101</Breadcrumb.Item>
                        </Breadcrumb>
                        <h1 className="fw-bold m-0" style={{ color: '#0f172a', fontSize: '2rem' }}>Chi tiết tài sản phòng 101</h1>
                    </Col>
                    <Col md={4} className="text-end">
                        <Button variant="dark" onClick={handleShow} className="d-inline-flex align-items-center gap-2 px-3 py-2 fw-semibold" style={{ backgroundColor: '#0f172a', borderRadius: '6px' }}>
                            <Plus size={18} /> Thêm tài sản
                        </Button>
                    </Col>
                </Row>

                {/* Main Content Section */}
                <Row>
                    <AssetDetailsCard />
                </Row>
            </Container>
            <AddNewAssessForm isShow={isShow} handleClose={handleClose} />
        </>
    );
}

export default AssessDetail;