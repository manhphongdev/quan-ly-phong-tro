import { Card, Col, Row, Badge } from 'react-bootstrap';
import { PlugZap, Armchair, Snowflake, Refrigerator, WashingMachine, Bed, Plus } from 'lucide-react';
function AssetDetailsCard() {
    return (
        <>
            {/* CỘT 1: THIẾT BỊ ĐIỆN */}
            <Col md={6} className="mb-4">
                <Card className="border-0 shadow-sm p-4 h-100" style={{ borderRadius: '8px' }}>
                    {/* Tiêu đề nhóm */}
                    <div className="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <PlugZap size={22} className="text-secondary" />
                            <h5 className="fw-bold m-0" style={{ color: '#1e293b' }}>Thiết bị điện</h5>
                        </div>
                        <Badge bg="light" text="dark" className="border px-2.5 py-1.5 fw-medium" style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe !important' }}>3 món</Badge>
                    </div>

                    {/* Danh sách các Item viết trực tiếp (Hardcode) */}
                    <div className="d-flex flex-column gap-4">
                        {/* Item 1: Máy điều hòa */}
                        <Row className="align-items-center g-2">
                            <Col xs={1} className="d-flex justify-content-start">
                                <Snowflake size={22} className="text-secondary" />
                            </Col>
                            <Col xs={8} className="ps-2">
                                <h6 className="fw-semibold m-0" style={{ color: '#1e293b' }}>Máy điều hòa</h6>
                                <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>Daikin Inverter 9000BTU - SN: DK19283</small>
                            </Col>
                            <Col xs={3} className="text-end">
                                <Badge bg="success-subtle" className="text-success fw-semibold px-2.5 py-1.5" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>Đang sử dụng</Badge>
                            </Col>
                        </Row>

                        {/* Item 2: Tủ lạnh */}
                        <Row className="align-items-center g-0">
                            <Col xs={1} className="d-flex justify-content-start">
                                <Refrigerator size={22} className="text-secondary" />
                            </Col>
                            <Col xs={8} className="ps-2">
                                <h6 className="fw-semibold m-0" style={{ color: '#1e293b' }}>Tủ lạnh</h6>
                                <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>Panasonic 188L - SN: PN44512</small>
                            </Col>
                            <Col xs={3} className="text-end">
                                <Badge bg="success-subtle" className="text-success fw-semibold px-2.5 py-1.5" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>Đang sử dụng</Badge>
                            </Col>
                        </Row>

                        {/* Item 3: Máy giặt */}
                        <Row className="align-items-center g-0">
                            <Col xs={1} className="d-flex justify-content-start">
                                <WashingMachine size={22} className="text-secondary" />
                            </Col>
                            <Col xs={8} className="ps-2">
                                <h6 className="fw-semibold m-0" style={{ color: '#1e293b' }}>Máy giặt</h6>
                                <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>LG Cửa trước 8kg - SN: LG88291</small>
                            </Col>
                            <Col xs={3} className="text-end">
                                <Badge bg="warning-subtle" className="text-warning fw-semibold px-2.5 py-1.5" style={{ backgroundColor: '#fef3c7', color: '#b45309' }}>Cần bảo trì</Badge>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>

            {/* CỘT 2: NỘI THẤT */}
            <Col md={6} className="mb-4">
                <Card className="border-0 shadow-sm p-4 h-100" style={{ borderRadius: '8px' }}>
                    {/* Tiêu đề nhóm */}
                    <div className="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom">
                        <div className="d-flex align-items-center gap-2">
                            <Armchair size={22} className="text-warning" style={{ color: '#d97706' }} />
                            <h5 className="fw-bold m-0" style={{ color: '#1e293b' }}>Nội thất</h5>
                        </div>
                        <Badge bg="light" text="dark" className="border px-2.5 py-1.5 fw-medium" style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe !important' }}>1 món</Badge>
                    </div>

                    <div className="d-flex flex-column gap-4">
                        {/* Item 1: Giường gỗ */}
                        <Row className="align-items-center g-0">
                            <Col xs={1} className="d-flex justify-content-start">
                                <Bed size={22} className="text-secondary" />
                            </Col>
                            <Col xs={8} className="ps-2">
                                <h6 className="fw-semibold m-0" style={{ color: '#1e293b' }}>Giường gỗ</h6>
                                <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>Giường Sồi Nga 1m6 × 2m - Kèm nệm</small>
                            </Col>
                            <Col xs={3} className="text-end">
                                <Badge bg="success-subtle" className="text-success fw-semibold px-2.5 py-1.5" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>Đang sử dụng</Badge>
                            </Col>
                        </Row>

                        {/* Ô trống viền đứt nét: Khu vực thêm nội thất mới */}
                        <div className="text-center py-4 px-3 mt-2 rounded border border-dashed d-flex flex-column align-items-center justify-content-center cursor-pointer" 
                            style={{ borderStyle: 'dashed', borderWidth: '1.5px', borderColor: '#cbd5e1', backgroundColor: '#fafafa' }}>
                            <div className="text-muted mb-2" style={{ border: '1px solid #cbd5e1', borderRadius: '50%', padding: '4px', display: 'inline-flex' }}>
                                <Plus size={18} />
                            </div>
                            <span className="text-muted small d-block">Khu vực này hiện chỉ có 1 tài sản.</span>
                            <span className="fw-semibold small" style={{ color: '#0f172a', textDecoration: 'underline', cursor: 'pointer' }}>Thêm nội thất mới</span>
                        </div>
                    </div>
                </Card>
            </Col>
        </>
    );
}

export default AssetDetailsCard;