import React from 'react'
import Button from './Button'
import Titre from './Titre'
import Images from './Images'

export default function Accueil() {
    return (
        <div className="imgBgr p-5 h-{auto} w-{auto} ">
            <Images src="./src/images/Logo_site-removebg-preview.png" alt="Infinity" />
            <Titre style="lemon-regular drop-shadow-xl text-8xl font-black flex justify-center text-white" name="Infinity" />
            <Titre style="font-black mb-36 drop-shadow-xl text-5xl text-white font-Merriweather flex justify-center" name="energy" />
            <Titre style="font-black flex justify-center text-xl text-white" name="Une solution pour vos energie solaire" />
            <Button classButton="bg-purple-800 mb-4 mt-10 text-white h-12 w-64 rounded-full font-black text-xl " name="Commencer" />
        </div>
    )
}
