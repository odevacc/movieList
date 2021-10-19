import { Carousel, Col, Image } from 'antd'
import React from 'react'

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '200px',
    textAlign: 'center',
    background: '#364d79',
    borderRadius: '8px'
  };

const MovieSlider = ({data}) => {
    const {movies} = data
    return (
        <Col offset={8} span={8}>
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}><Image width={280} height={350} src={movies[0].large_cover_image}/></h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        </Col>
    )
}

export default MovieSlider
