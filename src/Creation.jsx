import React from 'react'
import InputLabel from './InputLabel'
import Button from './Button'
import Titre from './Titre'
import Images from './Images'

export default function Creation() {
  return (
    <div className='imgBgr p-3'>
      <div>
        <Images src="./src/images/Logo_site-removebg-preview.png" alt="Infinity" />
      </div>
      <div >
        <Titre style="font-black flex justify-center text-3xl mb-5 text-white" name="Inscrivez-vous" />
        <form action="">
          <InputLabel name="Nom et Prenom" />
          <InputLabel name="Nom d'utilisateur" />
          <InputLabel name="E-mail" />
          <InputLabel name="Mot de passe" />
          <InputLabel name="onfirmez le mot de passe" />
          <Button classButton="bg-purple-800 mt-5 text-white h-12 w-64 rounded-full font-black text-xl " name="Créer un compte" />
        </form>
      </div>
    </div>
  )
}
