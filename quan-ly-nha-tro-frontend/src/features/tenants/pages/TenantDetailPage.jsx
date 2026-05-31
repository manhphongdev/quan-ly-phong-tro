import React from 'react';
import { Card, Badge, Alert } from 'react-bootstrap';
import { ArrowLeft, Info } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockTenants } from './TenantsListPage';

function TenantDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();


    const baseTenant = mockTenants.find(t => t.id === parseInt(id));


    if (!baseTenant) {
        return <div className="p-5 text-center">Không tìm thấy cư dân</div>;
    }


    const getInitials = (name) => {
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return parts[parts.length - 2][0] + parts[parts.length - 1][0];
        }
        return name.substring(0, 2);
    };


    const tenant = {
        ...baseTenant,
        initials: getInitials(baseTenant.name),
        cccd: '0012' + Math.floor(10000000 + Math.random() * 90000000),
        dob: '15/05/1998',
        hometown: 'Hà Nội',
        emergencyName: 'Nguyễn Văn B',
        emergencyPhone: '0912.333.444'
    };

    return (
        <div className="tenant-detail-page p-4 p-md-5">

            <Alert className="d-flex align-items-center gap-2 mb-4 border-0" style={{ backgroundColor: '#e0e7ff', color: '#3730a3', borderRadius: '8px' }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center text-white" style={{ backgroundColor: '#4f46e5', width: '20px', height: '20px' }}>
                    <Info size={14} />
                </div>
                <span style={{ fontSize: '15px' }}>Quyền truy cập: <strong className="text-decoration-underline" style={{ cursor: 'pointer' }}>Quản lý</strong>. Bạn hiện đang ở chế độ <strong>CHỈ XEM</strong>. Một số thay đổi sẽ không thể thực hiện.</span>
            </Alert>

            <Card className="shadow-sm border-0" style={{ borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <Card.Body className="p-4 p-md-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div 
                            className="d-flex align-items-center fw-bold" 
                            style={{ cursor: 'pointer', fontSize: '18px', color: '#4f46e5' }}
                            onClick={() => navigate('/tenants')}
                        >
                            <ArrowLeft size={24} className="me-2" /> [Quay lại]
                        </div>
                        <span className="px-4 py-2 rounded-pill fw-semibold text-white" style={{ fontSize: '14px', backgroundColor: '#059669', letterSpacing: '0.05em' }}>
                            HỒ SƠ CƯ DÂN
                        </span>
                    </div>

                    <div className="row g-5">

                        <div className="col-12 col-lg-4">
                            <Card className="shadow-none h-100" style={{ borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-5 text-center">
                                    <div 
                                        className="d-flex align-items-center justify-content-center mb-4"
                                        style={{ width: '160px', height: '160px', borderRadius: '20px', backgroundColor: '#e0e7ff', color: '#4f46e5', fontSize: '48px', fontWeight: 'bold' }}
                                    >
                                        {tenant.initials}
                                    </div>
                                    <h4 className="fw-bold mb-2" style={{ color: '#0f172a', fontSize: '28px' }}>{tenant.name}</h4>
                                    <p className="text-muted mb-0" style={{ fontSize: '18px' }}>{tenant.role}</p>
                                </Card.Body>
                            </Card>
                        </div>


                        <div className="col-12 col-lg-8">

                            <div className="mb-5">
                                <h6 className="fw-bold mb-4" style={{ color: '#4f46e5', fontSize: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                    THÔNG TIN CÁ NHÂN
                                </h6>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <p className="text-muted mb-1" style={{ fontSize: '16px' }}>Họ và tên</p>
                                        <p className="fw-medium mb-0" style={{ fontSize: '20px', color: '#0f172a' }}>{tenant.name}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text-muted mb-1" style={{ fontSize: '16px' }}>Số CCCD</p>
                                        <p className="fw-medium mb-0" style={{ fontSize: '20px', color: '#0f172a' }}>{tenant.cccd}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text-muted mb-1" style={{ fontSize: '16px' }}>Số điện thoại</p>
                                        <p className="fw-medium mb-0" style={{ fontSize: '20px', color: '#0f172a' }}>{tenant.phone}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text-muted mb-1" style={{ fontSize: '16px' }}>Ngày sinh</p>
                                        <p className="fw-medium mb-0" style={{ fontSize: '20px', color: '#0f172a' }}>{tenant.dob}</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-5" style={{ borderColor: '#e2e8f0' }} />


                            <div className="mb-5">
                                <h6 className="fw-bold mb-4" style={{ color: '#4f46e5', fontSize: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                    THÔNG TIN CƯ TRÚ
                                </h6>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <p className="text-muted mb-1" style={{ fontSize: '16px' }}>Phòng đang ở</p>
                                        <p className="fw-bold mb-0" style={{ fontSize: '22px', color: '#4f46e5' }}>{tenant.room}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text-muted mb-1" style={{ fontSize: '16px' }}>Quê quán</p>
                                        <p className="fw-medium mb-0" style={{ fontSize: '20px', color: '#0f172a' }}>{tenant.hometown}</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-5" style={{ borderColor: '#e2e8f0' }} />


                            <div>
                                <h6 className="fw-bold mb-4" style={{ color: '#4f46e5', fontSize: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                    LIÊN HỆ KHẨN CẤP
                                </h6>
                                <div className="p-4 rounded" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                    <p className="mb-2" style={{ fontSize: '18px', color: '#475569' }}>
                                        Người thân: <strong style={{ color: '#0f172a' }}>{tenant.emergencyName}</strong>
                                    </p>
                                    <p className="mb-0" style={{ fontSize: '18px', color: '#475569' }}>
                                        SĐT: <strong style={{ color: '#0f172a' }}>{tenant.emergencyPhone}</strong>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TenantDetailPage;
