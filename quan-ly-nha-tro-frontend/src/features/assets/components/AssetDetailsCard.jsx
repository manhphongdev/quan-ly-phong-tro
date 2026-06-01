import {Table} from 'react-bootstrap';

const assets = [
    {id: 1, name: 'Điều hòa Panasonic 12000BTU', status: 'Tốt'},
    {id: 2, name: 'Tủ lạnh Sharp 180L', status: 'Tốt'},
    {id: 3, name: 'Giường gỗ 1m8', status: 'Tốt'},
    {id: 4, name: 'Máy giặt LG 8kg', status: 'Cần bảo trì'},
    {id: 5, name: 'Bàn học gỗ', status: 'Tốt'},
];

function AssetDetailsCard() {
    return (
        <div className="w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="h6 fw-bold mb-0">Danh sách tài sản</h3>
                <span className="text-muted small">Tổng số: {assets.length} món</span>
            </div>

            <Table bordered responsive className="asset-list-table mb-0">
                <thead>
                    <tr>
                        <th>Tên tài sản</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset) => (
                        <tr key={asset.id}>
                            <td>{asset.name}</td>
                            <td className={asset.status === 'Tốt' ? 'text-success fw-bold' : 'text-warning fw-bold'}>
                                {asset.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default AssetDetailsCard;
