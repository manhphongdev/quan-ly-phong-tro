import React, { useState, useMemo } from 'react';
import { Card, Table, Badge, Form, InputGroup, Pagination, Alert } from 'react-bootstrap';
import { Search, Eye, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const mockTenants = [
    { id: 1, name: 'Nguyễn Văn An', room: 'P.101', phone: '0987.123.456', role: 'CHỦ HỢP ĐỒNG' },
    { id: 2, name: 'Trần Thị Hoa', room: 'P.101', phone: '0987.654.321', role: 'THÀNH VIÊN' },
    { id: 3, name: 'Lê Văn Luyện', room: 'P.103', phone: '0333.111.222', role: 'CHỦ HỢP ĐỒNG' },
    { id: 4, name: 'Phạm Minh Thắng', room: 'P.105', phone: '0912.000.111', role: 'CHỦ HỢP ĐỒNG' },
    { id: 5, name: 'Hoàng Gia Bảo', room: 'P.201', phone: '0977.888.999', role: 'CHỦ HỢP ĐỒNG' },
    { id: 6, name: 'Lê Thị Thu', room: 'P.201', phone: '0911.222.333', role: 'THÀNH VIÊN' },
    { id: 7, name: 'Vũ Đức Minh', room: 'P.203', phone: '0988.777.666', role: 'CHỦ HỢP ĐỒNG' },
    { id: 8, name: 'Ngô Thanh Vân', room: 'P.203', phone: '0909.123.987', role: 'THÀNH VIÊN' },
    { id: 9, name: 'Đặng Ngọc Ngọc', room: 'P.205', phone: '0933.444.555', role: 'CHỦ HỢP ĐỒNG' },
    { id: 10, name: 'Phan Thanh Giản', room: 'P.301', phone: '0944.555.666', role: 'CHỦ HỢP ĐỒNG' },
    { id: 11, name: 'Hồ Chí Tường', room: 'P.301', phone: '0955.666.777', role: 'THÀNH VIÊN' },
    { id: 12, name: 'Lý Tiểu Long', room: 'P.303', phone: '0966.777.888', role: 'CHỦ HỢP ĐỒNG' },
    { id: 13, name: 'Mai Phương Thúy', room: 'P.303', phone: '0977.888.999', role: 'THÀNH VIÊN' },
    { id: 14, name: 'Trần Đại Quang', room: 'P.305', phone: '0988.999.000', role: 'CHỦ HỢP ĐỒNG' },
    { id: 15, name: 'Đinh La Thăng', room: 'P.305', phone: '0999.000.111', role: 'THÀNH VIÊN' },
];

function TenantsListPage() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    const filteredTenants = useMemo(() => {
        return mockTenants.filter(tenant => 
            tenant.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);


    const totalPages = Math.ceil(filteredTenants.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTenants = filteredTenants.slice(indexOfFirstItem, indexOfLastItem);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="tenants-list-page p-4">
            <Alert className="d-flex align-items-center gap-2 mb-4 border-0" style={{ backgroundColor: '#e0e7ff', color: '#3730a3', borderRadius: '8px' }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center text-white" style={{ backgroundColor: '#4f46e5', width: '20px', height: '20px' }}>
                    <Info size={14} />
                </div>
                <span style={{ fontSize: '15px' }}>Quyền truy cập: <strong className="text-decoration-underline" style={{ cursor: 'pointer' }}>Quản lý</strong>. Bạn hiện đang ở chế độ <strong>CHỈ XEM</strong>. Một số thay đổi sẽ không thể thực hiện.</span>
            </Alert>

            <style>
                {`
                    .tenant-row {
                        cursor: pointer;
                        transition: background-color 0.2s;
                    }
                    .tenant-row:hover {
                        background-color: #f1f5f9;
                    }
                    .tenant-row .action-icon {
                        transition: color 0.2s, transform 0.2s;
                    }
                    .tenant-row:hover .action-icon {
                        color: #4f46e5 !important;
                        transform: scale(1.15);
                    }
                `}
            </style>

            <Card className="shadow-sm" style={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <Card.Body className="p-0">
                    <div className="d-flex justify-content-between align-items-center p-4 p-md-5 border-bottom" style={{ borderBottom: '2px solid #e2e8f0' }}>
                        <h5 className="fw-bold m-0" style={{ color: '#0f172a', fontSize: '24px' }}>Danh sách cư dân</h5>
                        
                        <div style={{ width: '500px' }}>
                            <InputGroup>
                                <InputGroup.Text className="bg-white border-end-0 rounded-start-pill ps-4 py-3" style={{ borderColor: '#cbd5e1' }}>
                                    <Search size={22} className="text-muted" />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Tìm tên cư dân..."
                                    className="border-start-0 shadow-none rounded-end-pill bg-white py-3"
                                    style={{ fontSize: '16px', borderColor: '#cbd5e1' }}
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <Table hover responsive className="m-0 align-middle">
                        <thead className="bg-light" style={{ backgroundColor: '#f8fafc' }}>
                            <tr>
                                <th className="fw-bold py-4 px-4" style={{ fontSize: '18px', color: '#475569', width: '8%', borderBottom: '2px solid #e2e8f0', borderTop: '2px solid #e2e8f0' }}>STT</th>
                                <th className="fw-bold py-4 px-4" style={{ fontSize: '18px', color: '#475569', width: '25%', borderBottom: '2px solid #e2e8f0', borderTop: '2px solid #e2e8f0' }}>Họ và tên</th>
                                <th className="fw-bold py-4 px-4" style={{ fontSize: '18px', color: '#475569', width: '15%', borderBottom: '2px solid #e2e8f0', borderTop: '2px solid #e2e8f0' }}>Phòng ở</th>
                                <th className="fw-bold py-4 px-4" style={{ fontSize: '18px', color: '#475569', width: '20%', borderBottom: '2px solid #e2e8f0', borderTop: '2px solid #e2e8f0' }}>Số điện thoại</th>
                                <th className="fw-bold py-4 px-4" style={{ fontSize: '18px', color: '#475569', width: '20%', borderBottom: '2px solid #e2e8f0', borderTop: '2px solid #e2e8f0' }}>Vai trò</th>
                                <th className="fw-bold py-4 px-4 text-end" style={{ fontSize: '18px', color: '#475569', width: '12%', borderBottom: '2px solid #e2e8f0', borderTop: '2px solid #e2e8f0' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTenants.length > 0 ? currentTenants.map((tenant, index) => (
                                <tr key={tenant.id} className="tenant-row" onClick={() => navigate(`/tenants/${tenant.id}`)} style={{ cursor: 'pointer' }}>
                                    <td className="py-4 px-4 text-muted fw-bold" style={{ fontSize: '17px', borderBottom: '1px solid #e2e8f0' }}>
                                        {indexOfFirstItem + index + 1}
                                    </td>
                                    <td className="py-4 px-4 fw-bold" style={{ color: '#0f172a', fontSize: '17px', borderBottom: '1px solid #e2e8f0' }}>{tenant.name}</td>
                                    <td className="py-4 px-4 fw-bold" style={{ color: '#4f46e5', fontSize: '17px', borderBottom: '1px solid #e2e8f0' }}>{tenant.room}</td>
                                    <td className="py-4 px-4 fw-bold text-dark" style={{ fontSize: '17px', borderBottom: '1px solid #e2e8f0', letterSpacing: '0.5px' }}>{tenant.phone}</td>
                                    <td className="py-4 px-4" style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        {tenant.role === 'CHỦ HỢP ĐỒNG' ? (
                                            <span className="px-4 py-2 rounded fw-semibold d-inline-block" style={{ backgroundColor: '#5b21b6', color: '#ffffff', fontSize: '13px', letterSpacing: '0.05em' }}>
                                                CHỦ HỢP ĐỒNG
                                            </span>
                                        ) : (
                                            <span className="px-4 py-2 rounded fw-semibold d-inline-block" style={{ backgroundColor: '#e2e8f0', color: '#475569', fontSize: '13px', letterSpacing: '0.05em' }}>
                                                THÀNH VIÊN
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-4 text-end" style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <div className="d-inline-flex text-dark">
                                            <Eye size={24} className="action-icon" strokeWidth={2} />
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-5 text-muted" style={{ fontSize: '15px' }}>
                                        Không tìm thấy cư dân nào phù hợp.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>


                    {totalPages > 1 && (
                        <div className="d-flex justify-content-end p-4 border-top">
                            <Pagination className="mb-0">
                                <Pagination.Prev 
                                    onClick={() => handlePageChange(currentPage - 1)} 
                                    disabled={currentPage === 1}
                                />
                                {[...Array(totalPages)].map((_, idx) => (
                                    <Pagination.Item 
                                        key={idx + 1} 
                                        active={idx + 1 === currentPage}
                                        onClick={() => handlePageChange(idx + 1)}
                                    >
                                        {idx + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next 
                                    onClick={() => handlePageChange(currentPage + 1)} 
                                    disabled={currentPage === totalPages}
                                />
                            </Pagination>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default TenantsListPage;
