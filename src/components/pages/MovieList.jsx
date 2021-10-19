import { Card, Col, Row } from 'antd'
import React from 'react'
import Preloader from '../../utils/Preloader'
import s from './MovieList.module.css'

const { Meta } = Card

const MovieList = ({ data, isFetching }) => {
    const { movies } = data

    if (isFetching) {
        return <div><Preloader /></div>
    }

    return (
        <>

            <Col xs={{ span: 16, offset: 5 }}>
                <Row>
                    {movies.map(item => (
                        <Col key={item.id} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Card
                                hoverable
                                className={s.card}
                                cover={<img alt={item.title} src={item.large_cover_image} />}
                            >
                                <Meta title={item.title} description={item.year} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>

        </>
    )
}

export default MovieList
