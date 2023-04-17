/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-undef */
import React, {useState} from 'react'
import {Stack, Typography, Box} from '@mui/material'
import {movieSplit} from '../utils/convert'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {db} from '../firebase'
import {UserAuth} from '../context/AuthContext'
import {doc, arrayUnion, updateDoc} from 'firebase/firestore'


export default function Movie({movie}) {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)

    const {user} = UserAuth()
    const moviesId = doc(db, 'users', `${
        user ?. email
    }`)

    const saveShows = async () => {
        if (user ?. email) {
            setLike(!like)
            setSaved(!saved)
            await updateDoc(moviesId, {
                savedShows: arrayUnion(
                    {
                        id: movie ?. id,
                        title: movie ?. title,
                        img: movie ?. backdrop_path
                    }
                )
            })
        } else {
            alert("Veuillez svp vous connectez avant de donner votre avis")
        }
    }


    return (
        <Stack>
            <Box className='w-[160px] md:w-[240px] sm:w-[200px] cursor-pointer p-4'>
                <img className='w-full h-auto block'
                    src={
                        `https://image.tmdb.org/t/p/w500/${
                            movie ?. backdrop_path
                        }`
                    }
                    alt={
                        movie ?. title
                    }/>
                <Typography className='text-white absolute top-0 w-full opacity-0 hover:opacity-100 h-full hover:bg-black/60 '>
                    {
                    movieSplit(movie ?. title, 14)
                }
                    <Typography onClick={saveShows}>
                        {
                        like ? <FaHeart className='top-4 absolute text-gray-300 '/> : <FaRegHeart/>
                    } </Typography>
                </Typography>

            </Box>
        </Stack>
    )
}
