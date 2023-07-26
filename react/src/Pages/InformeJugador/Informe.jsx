import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import "./Informe.css";
import axios from "axios";

export function InformeJugador() {
    const [opcionActiva, setOpcionActiva] = useState("principales");
    const mostrarOpcionActiva = (opcion) => {
        setOpcionActiva(opcion)
    };

    const url = "http://localhost:8000/informs";
    const handleSubmitInforme = () => {
        const data = {
            // PlayerId: '', // Aquí puedes establecer el ID del jugador si tienes esa información disponible
            SkillsPrincipales: skillsPrincipales,
            SkillsTacticas: skillsTacticas,
            SkillsFisicas: skillsFisicas,
            Texto: notasFinales,
            // MediaInforme: 0, // Puedes calcular la media aquí si tienes esa lógica implementada
        };
        axios.post(url, data)
            .then(response => {
                // Manejar la respuesta si es exitosa
                console.log('Respuesta del servidor:', response.data);
            })
            .catch(error => {
                // Manejar el error si la solicitud falla
                console.error('Error en la solicitud:', error);
            });
    };

    const [skillsPrincipales, setSkillsPrincipales] = useState({
        ControlDelBalon: 0,
        Disparo: 0,
        Cabeza: 0,
        Asociacion: 0,
        PieDerecho: 0,
        PieIzquierdo: 0,
        PasesLargos: 0,
        Dribling: 0,
        Reflejos: 0,
        Centros: 0,
    });

    const handlePrincipalChange = (habilidad, valor) => {
        setSkillsPrincipales((prevSkills) => ({
            ...prevSkills,
            [habilidad]: valor,
        }));
    };

    const [skillsTacticas, setSkillsTacticas] = useState({
        Anticipacion: 0,
        Colocacion: 0,
        Concentracion: 0,
        Contundencia: 0,
        Desdoble: 0,
        Desmarque: 0,
        Posicionamientos: 0,
        VisionDeJuego: 0,
    })
    const handleTacticalChange = (habilidad, valor) => {
        setSkillsTacticas((prevSkills) => ({
            ...prevSkills,
            [habilidad]: valor,
        }));
    };

    const [skillsFisicas, setSkillsFisicas] = useState({
        Agilidad: 0,
        Flexibilidad: 0,
        Fuerza: 0,
        Potencia: 0,
        Resistencia: 0,
        Salto: 0,
        Velocidad: 0,
    })
    const handleFisicasChange = (habilidad, valor) => {
        setSkillsFisicas((prevSkills) => ({
            ...prevSkills,
            [habilidad]: valor,
        }));
    };

    const [notasFinales, setNotasFinales] = useState('');

    const handleNotasFinalesChange = (event) => {
        setNotasFinales(event.target.value);
    };

    // Función para calcular el promedio de habilidades
    const calcularPromedioHabilidades = (habilidades) => {
        const valores = Object.values(habilidades);
        const suma = valores.reduce((acc, valor) => acc + valor, 0);
        const promedio = suma / valores.length;
        return promedio;
    };
    // Calcular los promedios usando la función reutilizable
    const promedioHabilidadesPrincipales = calcularPromedioHabilidades(skillsPrincipales);
    const promedioHabilidadesTacticas = calcularPromedioHabilidades(skillsTacticas);
    const promedioHabilidadesFisicas = calcularPromedioHabilidades(skillsFisicas);

    return (
        <div className="informe-container-jugador">
            <Link to="/" className="header_Informe">
                <div className="header_close1">
                    <div className="icon_close1">
                        <Link to="/InterfazJugadores">
                            <HighlightOffOutlinedIcon className="informe-close-icon" />
                        </Link>
                    </div>
                </div>
            </Link>
            <div className="informeOjeador1">
                <h1>INFORME</h1>
            </div>
            <div className="horizontal-line1">
                <hr />
            </div>

            <div className="header_nav1">
                <Link
                    onClick={() => mostrarOpcionActiva("principales")}
                    className={`nav_menu-item1 ${opcionActiva === "principales" ? "nav-menu-item-active" : ""}`}
                >
                    <span className="nav_skillsP">Skills Principales</span>
                </Link>
                <Link
                    onClick={() => mostrarOpcionActiva("tacticas")}
                    className={`nav_menu-item1 ${opcionActiva === "tacticas" ? "nav-menu-item-active" : ""}`}
                >
                    <span className="nav_SkillsT">Skills Tácticas</span>
                </Link>
                <Link
                    onClick={() => mostrarOpcionActiva("fisicas")}
                    className={`nav_menu-item1 ${opcionActiva === "fisicas" ? "nav-menu-item-active" : ""}`}
                >
                    <span className="nav_skillsF">Skills Físicas</span>
                </Link>
                <Link
                    onClick={() => mostrarOpcionActiva("notas_finales")}
                    className={`nav_menu-item1 ${opcionActiva === "notas_finales" ? "nav-menu-item-active" : ""}`}
                >
                    <span className="nav_NotasF">Notas Finales</span>
                </Link>
            </div>

            <div className="maincontainer1">
                <div className="separador1"/>
                <div className="imagen-nombre">
                    <div className="infofoto">
                        <div className="fotojugador">
                            <img src="https://images.pexels.com/photos/159555/soccer-football-athlete-player-159555.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="imagen" />
                        </div>
                    </div>
                    <div className="infojugador1">
                        <div className="nombrejugador1">
                            <h1>POSICION</h1>
                            <h1>
                                Pepe&nbsp;
                                <span>
                                    <strong>Pepas&nbsp;</strong>
                                </span>
                            </h1>
                        </div>
                        <div className="posicion-pierna">
                            <p>
                                <strong>Naciolanidad</strong>
                            </p>
                            <p>Diestro</p>
                            <p>14 años</p>
                        </div>
                        <div className="informe-fecha1">
                            25 de Junio 2023
                        </div>
                    </div>
                </div>
                {/* DATOS del partido */}
                <div className="descripcion-partido">
                    <div className="partido">
                        <p>
                            <strong>Partido</strong>
                        </p>
                        <p>vs perros</p>
                    </div>

                    <div className="separador"></div>

                    <div className="promedio">
                        <strong><p>Promed.Eval.</p></strong>
                        <p style={{ color: "lightgreen" }}>7.6</p>
                    </div>

                    <div className="separador"></div>

                    <div className="ant.eval">
                        <strong> <p>Ant.Eva</p></strong>
                        <p style={{ color: "lightgreen" }}>7.1</p>
                    </div>

                    <div className="separador"></div>

                    <div className="fecha">
                        <strong> <p>Fecha</p></strong>
                        <p>25/06/2023</p>
                    </div>
                </div>
                <div className="separadorskilldos"></div>
                <div className="separador"></div>

                {/* PRINCIPALES Habilidades del informe */}
                {opcionActiva === 'principales' && (
                    <div className="mainskills">
                        <div className="skillname">
                            <h3>HABILIDADES PRINCIPALES</h3>
                            <h3 style={{ color: "lightgreen" }}>{promedioHabilidadesPrincipales.toFixed(1)}</h3>
                        </div>
                        <div className="separadorskill" />
                        {Object.keys(skillsPrincipales).map((habilidad, index) => (
                            <div key={index} className="skill">
                                <p>{habilidad}</p>
                                <select
                                    className="rating-select"
                                    value={skillsPrincipales[habilidad]}
                                    onChange={(e) => handlePrincipalChange(habilidad, parseInt(e.target.value))}>
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                )}

                {/* TACTICAS Habilidades del informe */}
                {opcionActiva === "tacticas" && (
                    <div className="mainskills">
                        <div className="skillname">
                            <h3>HABILIDADES TACTICAS</h3>
                            <h3 style={{ color: "lightgreen" }}>{promedioHabilidadesTacticas.toFixed(1)}</h3>
                        </div>
                        <div className="separadorskill"></div>
                        {Object.keys(skillsTacticas).map((habilidad, index) => (
                            <div key={index} className="skill">
                                <p>{habilidad}</p>
                                <select className="rating-select"
                                    value={skillsTacticas[habilidad]}
                                    onChange={(e) => handleTacticalChange(habilidad, parseInt(e.target.value))}>
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                )}

                {/* FISICAS Habilidades del informe */}
                {opcionActiva === "fisicas" && (
                    <div className="mainskills">
                        <div className="skillname">
                            <h3>HABILIDADES FISICAS</h3>
                            <h3 style={{ color: "lightgreen" }}>{promedioHabilidadesFisicas.toFixed(1)}</h3>
                        </div>
                        <div className="separadorskill"></div>
                        {Object.keys(skillsFisicas).map((habilidad, index) => (
                            <div key={index} className="skill">
                                <p>{habilidad}</p>
                                <select className="rating-select"
                                    value={skillsFisicas[habilidad]}
                                    onChange={(e) => handleFisicasChange(habilidad, parseInt(e.target.value))}>
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                )}

                {/* NOTAS FINALES del informe  */}
                {opcionActiva === "notas_finales" && (
                    <div className="mainskills">
                        <div className="anotaciones-container">
                            <textarea
                                placeholder="Escribe aqui tus anotaciones..."
                                rows="6"
                                cols="80"
                                value={notasFinales}
                                onChange={handleNotasFinalesChange}>
                            </textarea>
                        </div>
                        {/* Botón para enviar el informe completo */}
                        <button className='button-informecompleto' onClick={handleSubmitInforme}>Enviar Informe Completo</button>
                    </div>
                )}
            </div>
        </div>
    );
}