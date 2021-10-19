import React, { useState } from 'react'
import { Col, Select } from 'antd'

const { Option } = Select
const order_by = ['any', 'desc', 'asc']

const MovieParams = () => {
    const [opt, setOpt] = useState(order_by[0])
    const handleChange = (e) => {
        console.log(e)
        setOpt(e)
    }
    return (
        <Col offset={12}>
            <Select style={{ width: 100 }}
                onChange={handleChange}
                defaultValue={opt}>
                {order_by.map(opt => (
                    <Option key={opt} value={opt}>
                        {opt}
                    </Option>
                ))}
            </Select>
        </Col>
    )
}

export default MovieParams
