import React from 'react'
import './FichaJugador.css'
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { BannerFicha } from '../../Components/Banner/BannerFicha';



export function FichaJugador() {
    return (
        <>      
        <div className='global-container'>
            <Header />
            <div className='interfaz-container'>
            <BannerFicha/>                                {/* AQUI VA EL BANNER 3 */}
                <div className='main-info'>

                </div>
            </div>
           
        </div>
        <Footer />
        </>

    )
}
