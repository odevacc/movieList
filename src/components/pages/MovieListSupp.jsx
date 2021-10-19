import { Pagination } from 'antd';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getMovies } from '../../store/movieReducer';
import MovieList from './MovieList';
import s from './MovieList.module.css'

const MovieListSupp = ({ data, getMovies, isFetching }) => {
    useEffect(() => {
        getMovies()
    }, [getMovies])

    const onChange = (page, pageSize) => {
        getMovies(pageSize, page)
    }

    return (
        <>
            <Pagination
                className={s.paginator}
                current={data.page_number}
                total={data.movie_count}
                pageSize={data.limit}
                onChange={onChange}
                pageSizeOptions={['12', '20', '40']}
            />
            <div className={s.MovieList}>
                <MovieList onChange={onChange} isFetching={isFetching} data={data} />
            </div>
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        data: state.movie.data,
        isFetching: state.movie.isFetching
    }
}

export default connect(mapStatetoProps, { getMovies })(MovieListSupp)
