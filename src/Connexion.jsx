import React from 'react'
import Images from './Images'
import Titre from './Titre'
import Button from './Button'

export default function Connexion() {
    return (
        <div className='imgBgr p-5'>
            <div>
                <Images src="./src/images/Logo_site-removebg-preview.png" alt="Infinity" />
            </div>
            <div className='mb-36'>
                <Titre style="font-black flex justify-center text-3xl mb-5 text-white" name="Inscrivez-vous" />
                <Button classButton="bg-purple-800 text-white h-12 w-64 rounded-full font-black text-xl " name="Créer un compte" />
            </div>
            <div className='mb-16'>
                <Titre style="font-black flex justify-center mb-5 text-3xl text-white" name="Connectez-vous" />
                <Button classButton="bg-purple-800 text-white h-12 w-64 rounded-full font-black text-xl " name="Se connecter" />
            </div>
        </div>
    )
}
