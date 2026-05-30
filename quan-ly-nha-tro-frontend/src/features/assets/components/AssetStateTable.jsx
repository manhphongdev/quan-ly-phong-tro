import { Table, Form } from 'react-bootstrap';
import { Tv } from 'lucide-react';  

function AssetStateTable(){
    return (
        <Table striped bordered hover className="mt-4 shadow-sm" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <thead >
                <tr>
                    <th>Tài sản</th>
                    <th>Trạng thái</th>
                    <th>Ghi chú</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >
                        <div className="d-flex align-items-center gap-2">
                            <Tv size={22} className="text-secondary" />
                            <div className="d-inline-block ps-2">
                                <h6 className="fw-semibold m-0" style={{ color: '#1e293b' }}>Tivi Samsung 43 inch</h6>
                                <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>SN: TVS43XYZ123</small>
                            </div>
                        </div>
                    </td>
                    <td>
                        <Form.Select>
                            <option>Chọn trạng thái</option>
                            <option>Tốt</option>
                            <option>Trung bình</option>
                            <option>Kém</option>
                        </Form.Select>
                    </td>
                    <td>
                        <Form.Control as="textarea" rows={2} placeholder="Nhập ghi chú chi tiết..."/>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default AssetStateTable;