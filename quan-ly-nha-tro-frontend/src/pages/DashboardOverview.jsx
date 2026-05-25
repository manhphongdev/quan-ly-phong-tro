import { Badge, Button, Card, ListGroup, Stack } from 'react-bootstrap';

const stats = [
    {
        label: 'Tổng phòng',
        value: '48',
        change: '+6 phòng mới',
        tone: 'blue',
    },
    {
        label: 'Đang thuê',
        value: '42',
        change: '87.5% lấp đầy',
        tone: 'green',
    },
    {
        label: 'Doanh thu tháng',
        value: '126.8M',
        change: '+12% so với tháng trước',
        tone: 'purple',
    },
    {
        label: 'Hóa đơn chờ thu',
        value: '9',
        change: 'Cần nhắc thanh toán',
        tone: 'orange',
    },
];

const upcomingTasks = [
    '3 hợp đồng sắp hết hạn trong 30 ngày',
    '5 phòng cần kiểm tra tài sản định kỳ',
    '9 hóa đơn chưa thanh toán',
];

const recentInvoices = [
    { tenant: 'Nguyễn Minh Anh', room: 'A102', amount: '3.200.000đ', status: 'Đã thu' },
    { tenant: 'Trần Quốc Bảo', room: 'B204', amount: '4.100.000đ', status: 'Chờ thu' },
    { tenant: 'Lê Thu Hà', room: 'C301', amount: '3.750.000đ', status: 'Quá hạn' },
];

function DashboardOverview() {
    return (
        <div className="dashboard-page">
            <section className="dashboard-hero">
                <div>
                    <p className="eyebrow">Tổng quan vận hành</p>
                    <h1>Xin chào, quản lý nhà trọ</h1>
                    <p>
                        Theo dõi tình trạng phòng, cư dân, hợp đồng và doanh thu trong một màn hình.
                    </p>
                </div>
                <Button type="button" className="primary-action">
                    Tạo hóa đơn
                </Button>
            </section>

            <section className="stats-grid" aria-label="Chỉ số tổng quan">
                {stats.map((stat) => (
                    <Card className={`stat-card ${stat.tone}`} key={stat.label}>
                        <Card.Body>
                            <p>{stat.label}</p>
                            <strong>{stat.value}</strong>
                            <Badge>{stat.change}</Badge>
                        </Card.Body>
                    </Card>
                ))}
            </section>

            <section className="dashboard-grid">
                <Card className="panel">
                    <Card.Body>
                        <div className="panel-header">
                            <div>
                                <p className="eyebrow">Việc cần chú ý</p>
                                <h2>Nhắc việc hôm nay</h2>
                            </div>
                        </div>
                        <ListGroup as="ul" className="task-list">
                            {upcomingTasks.map((task) => (
                                <ListGroup.Item as="li" key={task}>{task}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card className="panel">
                    <Card.Body>
                        <div className="panel-header">
                            <div>
                                <p className="eyebrow">Thanh toán</p>
                                <h2>Hóa đơn gần đây</h2>
                            </div>
                        </div>
                        <Stack gap={3} className="invoice-list">
                            {recentInvoices.map((invoice) => (
                                <div className="invoice-row" key={`${invoice.room}-${invoice.tenant}`}>
                                    <div>
                                        <strong>{invoice.tenant}</strong>
                                        <span>Phòng {invoice.room}</span>
                                    </div>
                                    <div>
                                        <strong>{invoice.amount}</strong>
                                        <span>{invoice.status}</span>
                                    </div>
                                </div>
                            ))}
                        </Stack>
                    </Card.Body>
                </Card>
            </section>
        </div>
    );
}

export default DashboardOverview;
