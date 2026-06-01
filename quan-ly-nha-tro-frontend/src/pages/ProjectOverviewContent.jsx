import React, { useState, useMemo } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Dropdown,
  Alert,
  Carousel
} from 'react-bootstrap';
import {
  Bell,
  Settings,
  Zap,
  Droplet,
  Wifi,
  Trash2
} from 'lucide-react';

// Mảng dữ liệu mẫu ban đầu (Mock Data Array)
const initialProjectsData = [
  {
    id: 'hola-1',
    name: 'Trọ Hola 1',
    subdivision: 'Trọ Hola 1 - Khu A',
    address: 'Số 15, Ngõ 45, Hòa Lạc, Thạch Thất, Hà Nội',
    totalRooms: 48,
    rentedRooms: 42,
    occupancyRate: '87.5%',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80',
    mapImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&auto=format&fit=crop&q=80',
    services: [
      { type: 'electricity', label: 'Tiền điện', price: '3.500đ / kWh' },
      { type: 'water', label: 'Tiền nước', price: '25.000đ / Khối' },
      { type: 'internet', label: 'Internet', price: '100.000đ / Phòng' },
      { type: 'trash', label: 'Rác & Vệ sinh', price: '50.000đ / Người' }
    ]
  },
  {
    id: 'hola-2',
    name: 'Trọ Hola 2',
    subdivision: 'Trọ Hola 2 - Khu B',
    address: 'Số 10, Ngõ 12, Hòa Lạc, Thạch Thất, Hà Nội',
    totalRooms: 60,
    rentedRooms: 52,
    occupancyRate: '86.7%',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&auto=format&fit=crop&q=80',
    mapImage: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=1200&auto=format&fit=crop&q=80',
    services: [
      { type: 'electricity', label: 'Tiền điện', price: '3.500đ / kWh' },
      { type: 'water', label: 'Tiền nước', price: '25.000đ / Khối' },
      { type: 'internet', label: 'Internet', price: '100.000đ / Phòng' },
      { type: 'trash', label: 'Rác & Vệ sinh', price: '50.000đ / Người' }
    ]
  },
  {
    id: 'cau-giay',
    name: 'Chung cư mini Cầu Giấy',
    subdivision: 'CCMN Cầu Giấy - Block A',
    address: 'Số 8, Ngõ 165, Cầu Giấy, Hà Nội',
    totalRooms: 32,
    rentedRooms: 28,
    occupancyRate: '87.5%',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&auto=format&fit=crop&q=80',
    mapImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&auto=format&fit=crop&q=80',
    services: [
      { type: 'electricity', label: 'Tiền điện', price: '4.000đ / kWh' },
      { type: 'water', label: 'Tiền nước', price: '30.000đ / Khối' },
      { type: 'internet', label: 'Internet', price: '120.000đ / Phòng' },
      { type: 'trash', label: 'Rác & Vệ sinh', price: '60.000đ / Người' }
    ]
  },
  {
    id: 'hola-3',
    name: 'Trọ Hola 3',
    subdivision: 'Trọ Hola 3 - Khu C',
    address: 'Số 25, Ngõ Hữu Nghị, Hòa Lạc, Thạch Thất, Hà Nội',
    totalRooms: 40,
    rentedRooms: 35,
    occupancyRate: '87.5%',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80',
    mapImage: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=1200&auto=format&fit=crop&q=80',
    services: [
      { type: 'electricity', label: 'Tiền điện', price: '3.500đ / kWh' },
      { type: 'water', label: 'Tiền nước', price: '25.000đ / Khối' },
      { type: 'internet', label: 'Internet', price: '100.000đ / Phòng' },
      { type: 'trash', label: 'Rác & Vệ sinh', price: '50.000đ / Người' }
    ]
  },
  {
    id: 'quan-9',
    name: 'Nhà trọ Cao cấp Quận 9',
    subdivision: 'Nhà trọ Q9 - Khu Nam',
    address: 'Đường Lê Văn Việt, Tăng Nhơn Phú A, Quận 9, TP. Hồ Chí Minh',
    totalRooms: 50,
    rentedRooms: 45,
    occupancyRate: '90.0%',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80',
    mapImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&auto=format&fit=crop&q=80',
    services: [
      { type: 'electricity', label: 'Tiền điện', price: '3.800đ / kWh' },
      { type: 'water', label: 'Tiền nước', price: '22.000đ / Khối' },
      { type: 'internet', label: 'Internet', price: '100.000đ / Phòng' },
      { type: 'trash', label: 'Rác & Vệ sinh', price: '40.000đ / Người' }
    ]
  }
];

export default function BuildingOverview() {
  // Mặc định tòa nhà đầu tiên 'hola-1' làm tòa nhà hiển thị ban đầu
  const [selectedProjectId, setSelectedProjectId] = useState('hola-1');

  // Lấy ra thông tin tòa nhà đang chọn dựa trên state id
  const selectedProject = useMemo(() => {
    return initialProjectsData.find((p) => p.id === selectedProjectId) || initialProjectsData[0];
  }, [selectedProjectId]);

  // Render pricing icon thích hợp
  const renderPricingIcon = (type) => {
    switch (type) {
      case 'electricity':
        return <Zap size={18} className="text-indigo" />;
      case 'water':
        return <Droplet size={18} className="text-indigo" />;
      case 'internet':
        return <Wifi size={18} className="text-indigo" />;
      case 'trash':
      default:
        return <Trash2 size={18} className="text-indigo" />;
    }
  };

  return (
    <div className="building-overview-container">
      {/* Nhúng mã CSS để đáp ứng các quy tắc bo góc và màu sắc của thiết kế */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .building-overview-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #1a1638;
          background-color: transparent;
        }

        /* Typography */
        .headline-md {
          font-size: 22px;
          font-weight: 600;
          color: #1a1638;
        }

        .eyebrow-text {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #6b7280;
        }

        /* Bo góc 4px cho nút bấm, ô nhập liệu */
        .rounded-4px {
          border-radius: 4px !important;
        }

        .form-control-custom {
          border: 1px solid #c7c4d8;
          border-radius: 4px !important;
          padding: 10px 14px;
          font-size: 14px;
          color: #1a1638;
          background-color: #fcfcfd !important;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        /* Bo góc 8px cho Card & Container lớn */
        .rounded-lg {
          border-radius: 8px !important;
        }

        /* Panel chính */
        .panel-custom {
          border: 1px solid #c7c4d8 !important;
          border-radius: 8px !important;
          background-color: white;
          box-shadow: none !important;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .panel-header-custom {
          padding: 20px 24px 10px 24px;
          border-bottom: none;
          background-color: white;
        }

        .panel-body-custom {
          padding: 10px 24px 24px 24px;
        }

        /* Thanh thông báo Chỉ Xem */
        .warning-banner-custom {
          background-color: #eef2ff !important;
          border: 1px solid #e0e7ff !important;
          color: #3525cd !important;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px !important;
          padding: 12px 18px !important;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Ô thống kê chỉ số */
        .stat-box-container {
          background-color: #f8f9fa;
          border: 1px solid #f3f2f7;
          border-radius: 8px !important;
          padding: 16px;
          text-align: center;
          transition: all 0.2s;
        }

        .stat-box-container:hover {
          border-color: #3525cd;
          background-color: rgba(53, 37, 205, 0.01);
        }

        .stat-box-num-blue {
          font-size: 26px;
          font-weight: 700;
          color: #3525cd;
        }

        .stat-box-num-green {
          font-size: 26px;
          font-weight: 700;
          color: #1f9254;
        }

        .stat-box-num-purple {
          font-size: 26px;
          font-weight: 700;
          color: #6366f1;
        }

        /* Bảng giá dịch vụ */
        .service-list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          border-bottom: 1px solid #f3f2f7;
        }

        .service-list-item:last-child {
          border-bottom: none;
        }

        .service-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: rgba(53, 37, 205, 0.08);
          color: #3525cd;
          border-radius: 50%;
          margin-right: 12px;
        }

        .service-details {
          display: flex;
          align-items: center;
        }

        .service-name {
          font-weight: 500;
          font-size: 14px;
          color: #4b5563;
        }

        .service-price {
          font-weight: 700;
          font-size: 14px;
          color: #1a1638;
        }

        /* Dropdown chuyển đổi toà nhà */
        .detail-topbar-dropdown .dropdown-toggle {
          font-size: 22px !important;
          font-weight: 700 !important;
          color: #1a1638 !important;
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          box-shadow: none !important;
        }

        .detail-topbar-dropdown .dropdown-toggle::after {
          vertical-align: middle;
          margin-left: 8px;
        }

        .icon-circle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #c7c4d8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4b5563;
          background-color: white;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }

        .icon-circle-btn:hover {
          background-color: #f3f4f6;
          color: #3525cd;
          border-color: #3525cd;
        }

        .badge-dot {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 8px;
          height: 8px;
          background-color: #d93025;
          border-radius: 50%;
        }

        .input-label-custom {
          font-size: 12px;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 6px;
        }

        /* Styling cho slide trình chiếu */
        .media-carousel-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 8px;
        }

        /* Tinh chỉnh điều khiển Carousel */
        .carousel-indicators [data-bs-target] {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 5px;
        }
      ` }} />

      <Container fluid className="px-0 py-2">
        {/* Header Row: Chứa Dropdown tòa nhà bên trái (đứng đầu hàng) & Icon hành động bên phải */}
        <Row className="align-items-center mb-3 gy-2">
          <Col xs="auto" className="d-flex align-items-center">
            {/* Dropdown danh sách tòa nhà đứng đầu hàng (không có nút Back nữa) */}
            <Dropdown
              onSelect={(id) => setSelectedProjectId(id)}
              className="detail-topbar-dropdown"
            >
              <Dropdown.Toggle>
                {selectedProject.name}
              </Dropdown.Toggle>
              <Dropdown.Menu className="rounded-8px shadow-sm">
                {initialProjectsData.map((proj) => (
                  <Dropdown.Item key={proj.id} eventKey={proj.id} active={proj.id === selectedProject.id}>
                    {proj.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          
          <Col className="d-flex justify-content-end align-items-center gap-3">
            {/* Icon thông báo bell */}
            <div className="icon-circle-btn">
              <Bell size={18} />
              <span className="badge-dot"></span>
            </div>
            
            {/* Icon cài đặt settings */}
            <div className="icon-circle-btn">
              <Settings size={18} />
            </div>
          </Col>
        </Row>

        {/* Thanh cảnh báo chế độ Chỉ Xem */}
        <Alert className="warning-banner-custom mb-4 rounded-8px">
          <span>Bạn hiện đang ở chế độ <strong>CHỈ XEM</strong>. Một số thay đổi sẽ không thể thực hiện.</span>
        </Alert>

        {/* Khu vực nội dung thông tin tòa nhà & bảng giá (Bootstrap Grid) */}
        <Row className="g-4 mb-4">
          {/* Cột trái: Thông tin toà nhà (8/12) */}
          <Col lg={8} md={12}>
            <Card className="panel-custom h-100">
              <div className="panel-header-custom">
                <h2 className="headline-md m-0">Thông tin toà nhà</h2>
              </div>
              
              <div className="panel-body-custom">
                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="input-label-custom">Tên phân khu</Form.Label>
                      <Form.Control
                        type="text"
                        readOnly
                        className="form-control-custom bg-light"
                        value={selectedProject.subdivision}
                        style={{ cursor: 'not-allowed' }}
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="input-label-custom">Địa chỉ</Form.Label>
                      <Form.Control
                        type="text"
                        readOnly
                        className="form-control-custom bg-light text-truncate"
                        value={selectedProject.address}
                        style={{ cursor: 'not-allowed' }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* 3 ô thống kê metrics dưới form */}
                <Row className="g-3">
                  <Col xs={12} md={4}>
                    <div className="stat-box-container">
                      <div className="eyebrow-text mb-2" style={{ fontSize: '11px' }}>Tổng số phòng</div>
                      <div className="stat-box-num-blue">{selectedProject.totalRooms}</div>
                    </div>
                  </Col>

                  <Col xs={12} md={4}>
                    <div className="stat-box-container">
                      <div className="eyebrow-text mb-2" style={{ fontSize: '11px' }}>Đang thuê</div>
                      <div className="stat-box-num-green">{selectedProject.rentedRooms}</div>
                    </div>
                  </Col>

                  <Col xs={12} md={4}>
                    <div className="stat-box-container">
                      <div className="eyebrow-text mb-2" style={{ fontSize: '11px' }}>Tỉ lệ lấp đầy</div>
                      <div className="stat-box-num-purple">{selectedProject.occupancyRate}</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>

          {/* Cột phải: Bảng giá dịch vụ (4/12) */}
          <Col lg={4} md={12}>
            <Card className="panel-custom h-100">
              <div className="panel-header-custom">
                <h2 className="headline-md m-0">Bảng giá dịch vụ</h2>
              </div>
              
              <div className="panel-body-custom">
                <div className="d-flex flex-column">
                  {selectedProject.services.map((service, index) => (
                    <div key={index} className="service-list-item">
                      <div className="service-details">
                        <div className="service-icon-box">
                          {renderPricingIcon(service.type)}
                        </div>
                        <span className="service-name">{service.label}</span>
                      </div>
                      <span className="service-price">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Hàng ảnh dưới cùng: Slide trình chiếu Carousel (Chiếm toàn bộ chiều rộng Col-12) */}
        <Row className="g-4">
          <Col xs={12}>
            <Card className="panel-custom border-0 bg-transparent mb-0 rounded-lg overflow-hidden shadow-sm">
              <Carousel interval={4000} controls={true} indicators={true} className="rounded-lg">
                <Carousel.Item>
                  <img
                    src={selectedProject.mapImage}
                    className="d-block w-100 media-carousel-img"
                    alt="Sơ đồ phân khu phối cảnh"
                  />
                  <Carousel.Caption style={{ background: 'rgba(26, 22, 56, 0.65)', borderRadius: '6px', padding: '12px', left: '10%', right: '10%', bottom: '20px' }}>
                    <h5 className="m-0 text-white fw-bold">Sơ đồ phân khu phối cảnh</h5>
                    <p className="m-0 small text-white-50 mt-1">{selectedProject.name} - Mặt bằng quy hoạch tổng thể</p>
                  </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                  <img
                    src={selectedProject.image}
                    className="d-block w-100 media-carousel-img"
                    alt="Ảnh thực tế toà nhà"
                  />
                  <Carousel.Caption style={{ background: 'rgba(26, 22, 56, 0.65)', borderRadius: '6px', padding: '12px', left: '10%', right: '10%', bottom: '20px' }}>
                    <h5 className="m-0 text-white fw-bold">Ảnh thực tế toà nhà</h5>
                    <p className="m-0 small text-white-50 mt-1">{selectedProject.name} - Kiến trúc ngoại thất hiện đại</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
