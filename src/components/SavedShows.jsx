/* eslint-disable no-whitespace-before-property */
import React, {useState, useEffect} from 'react'
import {Typography, Box} from '@mui/material'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {movieSplit} from '../utils/convert'
import {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import {doc, onSnapshot, updateDoc} from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'

export default function SavedShows() {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()

    const sliderLeft = () => {
        var sliderLeft = document.getElementById('slider')
        sliderLeft.scrollLeft = sliderLeft.scrollLeft - 500
    }

    const sliderRight = () => {
        var sliderLeft = document.getElementById('slider')
        sliderLeft.scrollLeft = sliderLeft.scrollLeft + 500
    }
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${
            user ?. email
        }`), (doc) => {
            setMovies(doc.data() ?. savedShows)
        })
    }, [user ?. email])

    const removeRef = doc(db, 'users', `${
        user ?. email
    }`)

    const deleteShow = (passeID) => {
        try {
            const result = movies ?. filter((item) => item ?. id !== passeID)
            updateDoc(removeRef, {savedShows: result})
        } catch {alert('error')}}
    return (
        <>
            <Typography className='text-white p-4'>My Show</Typography>
            <Box className='relative items-center flex group'>
                <MdChevronLeft className='bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer absolute z-10 group-hover:block hidden'
                    size={40}
                    onClick={sliderLeft}/>
                <Box id={'slider'}
                    className='h-full w-full overflow-x-scroll flex whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {
                    movies ?. map((movie, id) => (
                        <Box className='w-[160px] md:w-[240px] sm:w-[200px] cursor-pointer p-4'
                            key={id}>
                            <img className='w-full h-auto block'
                                src={
                                    `https://image.tmdb.org/t/p/w500/${
                                        movie ?. img
                                    }`
                                }
                                alt={
                                    movie ?. title
                                }/>
                            <Typography className='text-white absolute top-0 w-full opacity-0 hover:opacity-100 h-full hover:bg-black/60 '>
                                {
                                movieSplit(movie ?. title, 14)
                            } </Typography>
                            <Typography className='absolute text-gray top-5'
                                onClick={
                                    () => deleteShow(movie ?. id)
                            }>
                                <AiOutlineClose/>
                            </Typography>
                        </Box>
                    ))
                } </Box>
                <MdChevronRight className='bg-white rounded-full absolute opacity-50 hover:opacity-100 right-0 cursor-pointer group-hover:block hidden z-10'
                    size={40}
                    onClick={sliderRight}/>
            </Box>
        </>
    )
}
