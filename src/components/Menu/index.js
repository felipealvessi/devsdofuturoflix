import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Devs do Futuro Logo" />
            </a>

            <Button className="ButtonLink" href="/cadastro/video">
                Adicionar um Vídeo
            </Button>
        </nav>
    )
}

export default Menu