import React from 'react'
import Images from './Images'
import Titre from './Titre'
import Icones from './Icones'
import Icones2 from './Icones2'

export default function Ajouter() {
  return (
    <div>
      <div className='flex justify-between h-24 p-5 bg-slate-200'>
        <Icones src="src/images/Logo_site-removebg-preview.png" alt="infinity" />
        <Titre style="lemon-regular text-3xl font-black flex justify-center text-purple-900" name="Infinity" />
        <Icones src="src/images/menu-icon-24.png" alt="menu" />
      </div>
      <div className='imgcentre h-80'>
        <div className='m-  '>
          <Titre style="flex justify-center lemon-regular drop-shadow-xl text-4xl font-black flex justify-center text-white " name="La solution à" />
        </div>
        <Titre style="flex justify-center lemon-regular drop-shadow-xl text-4xl font-black flex justify-center text-white" name="l'obscurité" />
      </div>
      <div className='flex bg-white h-[330px]  justify-between p-8'>
        <div className='bg-white drop-shadow-xl mt-12 h-48 '>
          <Titre style="lemon-regular text-xl font-black flex justify-center text-purple-900" name="Ajouter un client" />
          <Icones2 src="src/images/Add_Circle_Plus_Download_icon-icons.com_67898.png" alt="add" />
        </div>
        <div className='bg-white drop-shadow-xl mt-12 h-48'>
          <Titre style="lemon-regular text-xl font-black flex justify-center text-purple-900" name="Voir la liste" />
          <Icones2 src="src/images/pngtree-checklist-flat-violet-color-rounded-vector-icon-select-check-note-vector-picture-image_9728911.png" alt="liste" />
        </div>
      </div>
    </div>
  )
}
