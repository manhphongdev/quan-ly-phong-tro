import React, { useState, useMemo } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Alert,
  InputGroup
} from 'react-bootstrap';
import {
  CarFront,
  Bike,
  Car,
  Search,
  Info
} from 'lucide-react';

// Custom SVG icon for Motorcycle (Xe máy) to ensure 100% version compatibility
const MotorcycleIcon = ({ size = 22, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="5" cy="18" r="3" />
    <circle cx="19" cy="18" r="3" />
    <path d="M12 18V13l-3-3H6.5l-2.5 3v5" />
    <path d="M19 18v-4l-3-4H9.5" />
    <path d="M12 12V9c0-1.1.9-2 2-2h2.5" />
  </svg>
);

// Mảng dữ liệu mẫu phương tiện (Mock Vehicle Data Array)
const initialVehiclesData = [
  {
    stt: 1,
    licensePlate: '29-A1 123.45',
    type: 'Xe máy',
    name: 'Honda Air Blade',
    owner: 'Nguyễn Văn An (101)'
  },
  {
    stt: 2,
    licensePlate: '30-B2 678.90',
    type: 'Xe đạp điện',
    name: 'Pega',
    owner: 'Trần Thị Hoa (101)'
  },
  {
    stt: 3,
    licensePlate: '34-L1 999.99',
    type: 'Xe máy',
    name: 'Yamaha Exciter',
    owner: 'Lê Văn Luyện (103)'
  },
  {
    stt: 4,
    licensePlate: '17-H5 555.55',
    type: 'Xe máy',
    name: 'Honda Vision',
    owner: 'Phạm Minh Thắng (105)'
  },
  {
    stt: 5,
    licensePlate: '15-K1 888.88',
    type: 'Xe máy',
    name: 'Honda SH',
    owner: 'Hoàng Gia Bảo (201)'
  }
];

export default function VehiclesManagement() {
  const [vehicles, setVehicles] = useState(initialVehiclesData);
  const [searchQuery, setSearchQuery] = useState('');

  // Bộ lọc tìm kiếm theo biển số xe động
  const filteredVehicles = useMemo(() => {
    if (!searchQuery.trim()) return vehicles;
    return vehicles.filter((v) =>
      v.licensePlate.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [vehicles, searchQuery]);

  // Thống kê động dựa trên mảng dữ liệu
  const stats = useMemo(() => {
    const total = vehicles.length;
    const motorbikes = vehicles.filter(v => v.type === 'Xe máy').length;
    const cars = vehicles.filter(v => v.type === 'Ô tô').length;
    const bicycles = vehicles.filter(v => v.type === 'Xe đạp' || v.type === 'Xe đạp điện').length;

    return { total, motorbikes, cars, bicycles };
  }, [vehicles]);

  return (
    <div className="vehicles-page-container">
      {/* Khai báo Stylesheet để bảo đảm quy chuẩn thiết kế bo góc và màu sắc */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .vehicles-page-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #1a1638;
          background-color: transparent;
        }

        .headline-md {
          font-size: 20px;
          font-weight: 700;
          color: #1a1638;
        }

        /* Bo góc 4px cho nút bấm, ô nhập liệu */
        .rounded-4px {
          border-radius: 4px !important;
        }

        .form-control-custom {
          border: 1px solid #c7c4d8;
          border-radius: 4px !important;
          padding: 8px 12px 8px 36px;
          font-size: 14px;
          color: #1a1638;
          width: 240px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-control-custom:focus {
          border-color: #3525cd;
          box-shadow: 0 0 0 3px rgba(53, 37, 205, 0.1);
          outline: none;
        }

        /* Bo góc 8px cho Card & Container lớn */
        .rounded-lg {
          border-radius: 8px !important;
        }

        /* Custom alert banner */
        .alert-custom {
          background-color: #eef2ff !important;
          border: 1px solid #e0e7ff !important;
          color: #3525cd !important;
          border-radius: 8px !important;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px !important;
        }

        /* Thẻ thống kê */
        .metric-card {
          border: 1px solid #c7c4d8 !important;
          border-radius: 8px !important;
          background-color: #ffffff;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          min-height: 85px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .metric-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(53, 37, 205, 0.04) !important;
        }

        .metric-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 8px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Phối màu icon theo ảnh mẫu */
        .bg-icon-purple {
          background-color: rgba(53, 37, 205, 0.08);
          color: #3525cd;
        }

        .bg-icon-gray {
          background-color: #f3f4f6;
          color: #6b7280;
        }

        .bg-icon-green {
          background-color: #e6f7ed;
          color: #1f9254;
        }

        .bg-icon-red {
          background-color: #fce8e6;
          color: #d93025;
        }

        .metric-title {
          font-size: 12px;
          font-weight: 500;
          color: #6b7280;
          margin-bottom: 2px;
        }

        .metric-value {
          font-size: 18px;
          font-weight: 700;
          color: #1a1638;
          margin: 0;
        }

        /* Bảng dữ liệu */
        .table-card {
          border: 1px solid #c7c4d8 !important;
          border-radius: 8px !important;
          background-color: #ffffff;
          overflow: hidden;
          margin-top: 24px;
        }

        .table-header {
          padding: 20px 24px;
          border-bottom: 1px solid #f3f2f7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .search-wrapper {
          position: relative;
        }

        .search-icon-inside {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          pointer-events: none;
          z-index: 5;
        }

        .custom-table {
          margin: 0;
          font-size: 14px;
        }

        .custom-table th {
          background-color: #fcfcfd !important;
          color: #4b5563 !important;
          font-weight: 600 !important;
          font-size: 13px !important;
          text-transform: uppercase !important;
          padding: 16px 24px !important;
          border-bottom: 1px solid #eef2ff !important;
          border-top: none !important;
        }

        .custom-table td {
          padding: 16px 24px !important;
          vertical-align: middle !important;
          border-bottom: 1px solid #f3f2f7 !important;
        }

        .custom-table tr:last-child td {
          border-bottom: none !important;
        }

        .license-plate-cell {
          font-weight: 700;
          color: #3525cd;
        }

        .owner-cell {
          font-weight: 700;
          color: #111827;
        }
      ` }} />

      <Container fluid className="px-0 py-2">
        {/* 1. Thanh cảnh báo chế độ Chỉ Xem */}
        <Alert className="alert-custom mb-4">
          <Info size={18} className="flex-shrink-0" />
          <span>Quyền truy cập: <strong>Quản lý</strong>. Bạn hiện đang ở chế độ <strong>CHỈ XEM</strong>. Một số thay đổi sẽ không thể thực hiện.</span>
        </Alert>

        {/* 2. Hàng thống kê loại xe */}
        <Row className="g-3 mb-4">
          {/* Card 1: Tổng số xe */}
          <Col xl={3} lg={3} md={6} xs={12}>
            <div className="metric-card">
              <div className="metric-icon-box bg-icon-purple">
                <CarFront size={22} />
              </div>
              <div>
                <div className="metric-title">Tổng số xe</div>
                <h4 className="metric-value">{stats.total} xe</h4>
              </div>
            </div>
          </Col>

          {/* Card 2: Xe máy */}
          <Col xl={3} lg={3} md={6} xs={12}>
            <div className="metric-card">
              <div className="metric-icon-box bg-icon-gray">
                <MotorcycleIcon size={22} />
              </div>
              <div>
                <div className="metric-title">Xe máy</div>
                <h4 className="metric-value">{stats.motorbikes} xe</h4>
              </div>
            </div>
          </Col>

          {/* Card 3: Ô tô */}
          <Col xl={3} lg={3} md={6} xs={12}>
            <div className="metric-card">
              <div className="metric-icon-box bg-icon-green">
                <Car size={22} />
              </div>
              <div>
                <div className="metric-title">Ô tô</div>
                <h4 className="metric-value">{stats.cars} xe</h4>
              </div>
            </div>
          </Col>

          {/* Card 4: Xe đạp / Xe điện */}
          <Col xl={3} lg={3} md={6} xs={12}>
            <div className="metric-card">
              <div className="metric-icon-box bg-icon-red">
                <Bike size={22} />
              </div>
              <div>
                <div className="metric-title">Xe đạp / Xe điện</div>
                <h4 className="metric-value">{stats.bicycles} xe</h4>
              </div>
            </div>
          </Col>
        </Row>

        {/* 3. Khu vực Bảng danh sách phương tiện */}
        <Card className="table-card">
          <div className="table-header">
            <h2 className="headline-md m-0">Danh sách phương tiện</h2>
            
            {/* Ô tìm kiếm nhanh biển số xe */}
            <div className="search-wrapper">
              <Search size={16} className="search-icon-inside" />
              <Form.Control
                type="text"
                placeholder="Tìm biển số..."
                className="form-control-custom"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Bảng dữ liệu của React-Bootstrap */}
          <Table hover responsive className="custom-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>STT</th>
                <th>Biển số xe</th>
                <th>Loại xe</th>
                <th>Tên xe</th>
                <th>Chủ sở hữu (Phòng)</th>
              </tr>
            </thead>
            <tbody>
              {filteredVehicles.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">
                    Không tìm thấy phương tiện nào khớp với từ khóa tìm kiếm.
                  </td>
                </tr>
              ) : (
                filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.stt}>
                    <td>{vehicle.stt}</td>
                    <td className="license-plate-cell">{vehicle.licensePlate}</td>
                    <td>{vehicle.type}</td>
                    <td>{vehicle.name}</td>
                    <td className="owner-cell">{vehicle.owner}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  );
}
