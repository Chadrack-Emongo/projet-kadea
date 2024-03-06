import React from 'react'
import Titre from './Titre'
import Images from './Images'
import Button from './Button'
import InputLabel from './InputLabel'


export default function Connecter() {
    return (
        <div className='p-5'>
            <div>
                <Images src="./src/images/Logo_site-removebg-preview.png" alt="Infinity" />
            </div>
            <div className=''>
            <Titre style="font-black flex justify-center text-3xl mb-5 text-white" name="Connectez-vous" />
                <form action="">
                    <InputLabel name="Nom d-utilisateur" />
                    <InputLabel name="Mot de passe" />
                    <Button classButton="bg-purple-800 mt-[80px] mb-[40px] text-white h-12 w-64 rounded-full font-black text-xl " name="Créer un compte" />
                </form>
            </div>
        </div>
    )
}
