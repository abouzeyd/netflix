/* eslint-disable no-whitespace-before-property */
import React, {useState, useEffect} from 'react'
import {Box, Button, Stack, Typography} from '@mui/material'
import axios from 'axios';
import {request} from '../request'
import {movieSplit} from '../utils/convert'

export default function Header() {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(request.requestPopular).then((data) => setMovies(data.data.results)).catch((error) => console.log('error'))
    }, []);


    return (
        <Stack className='w-full h-[550px] text-white'>
            <Box className='absolute w-full h-[550px] bg-gradient-o-r from-black'/>
            <Box className='w-full h-full'>
                <img src={
                        `https://image.tmdb.org/t/p/original/${
                            movie ?. backdrop_path
                        }`
                    }
                    alt={
                        movie ?. title
                    }
                    className='h-full w-full object-cover'/>
            </Box>
            <Box className='absolute top-[20%] w-full p-4 md:p-8'>
                <Typography className='text-xl md:text-4xl mb-3'>
                    {
                    movie ?. title
                }</Typography>
                <Box>
                    <Button variant='contained' className='bg-white text-black'>Play</Button>
                    <Button variant='outlined' color='inherit' className='ml-5 bg-black '>Watch later</Button>
                </Box>
                <Typography className='mt-5 text-gray text-sm'>Release:{
                    movie ?. release_date
                }</Typography>
                <Typography className='w-full md:max-w-[50%] xl:max-w-[35%] lg:max-w-[75%] text-gray-200'>
                    {
                    movieSplit(movie ?. overview, 150)
                }</Typography>
            </Box>
        </Stack>
    )
}
