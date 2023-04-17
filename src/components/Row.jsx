/* eslint-disable no-whitespace-before-property */
import React, {useState, useEffect} from 'react'
import {Stack, Typography, Box} from '@mui/material'
import axios from 'axios'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


export default function Row({title, fetchURL, rowID}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((data) => setMovies(data ?. data ?. results)).catch((error) => console.log('error', error))
    }, [fetchURL])

    const sliderLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const sliderRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <Stack>
            <Typography className='text-white p-4'>
                {title}</Typography>
            <Box className='relative items-center flex group'>
                <MdChevronLeft className='bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer absolute z-10 group-hover:block hidden'
                    size={40}
                    onClick={sliderLeft}/>
                <Box id={
                        'slider' + rowID
                    }
                    className='h-full w-full overflow-x-scroll flex whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {
                    movies ?. map((movie, id) => {
                        return (
                            <Movie movie={movie}
                                key={id}/>
                        )
                    })
                } </Box>
                <MdChevronRight className='bg-white rounded-full absolute opacity-50 hover:opacity-100 right-0 cursor-pointer group-hover:block hidden z-10'
                    size={40}
                    onClick={sliderRight}/>
            </Box>
        </Stack>
    )
}
