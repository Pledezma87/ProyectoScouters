import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import "./Informe.css";

export function InformeJugador() {

    const [opcionActiva, setOpcionActiva] = useState("principales");
    const mostrarHabilidadesPrincipales = () => {
        setOpcionActiva("principales");
    };
    const mostrarHabilidadesTacticas = () => {
        setOpcionActiva("tacticas");
    };
    const mostrarHabilidadesFisicas = () => {
        setOpcionActiva("fisicas");
    };
    const mostrarNotasFinales = () => {
        setOpcionActiva("notas_finales");
    };
    const habilidadesPrincipales = [
        "Control del Balón",
        "Disparo",
        "Cabeza",
        "Asociación",
        "Pie Derecho",
        "Pie Izquierdo",
        "Pases Largos",
        "Dribling",
        "Reflejos",
        "Centros",
    ];
    const habilidadesTacticas = [
        "Anticipacion",
        "Colocacion",
        "Concentracion",
        "Contundencia",
        "Desdoble",
        "Desmarque",
        "Posicionamientos",
        "VisionDeJuego",
    ];
    const habilidadesFisicas = [
        "Agilidad",
        "Flexibilidad",
        "Fuerza",
        "Potencia",
        "Resistencia",
        "Salto",
        "Velocidad",
    ];

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
                <h1>INFORME DEL OJEADOR</h1>
            </div>
            <div className="horizontal-line">
                <hr />
            </div>

            <div className="header_nav1">
                <Link onClick={mostrarHabilidadesPrincipales} className="nav_menu-item1">
                    <span className="nav_skillsP">Skills Principales</span>
                </Link>
                <Link onClick={mostrarHabilidadesTacticas} className="nav_menu-item1">
                    <span className="nav_SkillsT">Skills Tácticas</span>
                </Link>
                <Link onClick={mostrarHabilidadesFisicas} className="nav_menu-item1">
                    <span className="nav_skillsF">Skills Físicas</span>
                </Link>
                <Link onClick={mostrarNotasFinales} className="nav_menu-item1">
                    <span className="nav_NotasF">Notas Finales</span>
                </Link>
            </div>

            <div className="maincontainer1">
                <div className="informe-fecha1">
                    <p>
                        <strong>Informe del jugador</strong>
                    </p>
                    <p>25 de Junio 2023</p>
                </div>

                <div className="imagen-nombre">
                    <div className="infofoto">
                        <div className="fotojugador">
                            <img src="https://images.pexels.com/photos/159555/soccer-football-athlete-player-159555.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="imagen"/>
                        </div>
                    </div>

                    <div className="infojugador1">
                        <div className="nombrejugador1">
                            <h1>9</h1>
                            <h1>
                                Pepe&nbsp;
                                <span>
                                    <strong>Pepas&nbsp;</strong>
                                </span>
                            </h1>
                        </div>
                        <div className="posicion-pierna">
                            <p>
                                <strong>DC</strong>
                            </p>
                            <p>Diestro</p>
                            <p>14 años</p>
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
                        <p>Promed.Eval.</p>
                        <p style={{ color: "lightgreen" }}>7.6</p>
                    </div>

                    <div className="separador"></div>

                    <div className="ant.eval">
                        <p>Ant.Eva</p>
                        <p style={{ color: "lightgreen" }}>7.1</p>
                    </div>

                    <div className="separador"></div>

                    <div className="fecha">
                        <p>Fecha</p>
                        <p>25/06/2023</p>
                    </div>
                </div>
                <div className="separadorskilldos"></div>
                <div className="separador"></div>

                {/* PRINCIPALES Habilidades del informe */}
                {opcionActiva === "principales" && (
                    <div className="mainskills">
                        <div className="skillname">
                            <h3>HABILIDADES PRINCIPALES</h3>
                            <h3 style={{ color: "lightgreen" }}>8.6</h3>
                        </div>
                        <div className="separadorskill"></div>
                        {habilidadesPrincipales.map((habilidad, index) => (
                            <div key={index} className="skill">
                                <p>{habilidad}</p>
                                <select className="rating-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
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
                            <h3 style={{ color: "lightgreen" }}>8.6</h3>
                        </div>
                        <div className="separadorskill"></div>
                        {habilidadesTacticas.map((habilidad, index) => (
                            <div key={index} className="skill">
                                <p>{habilidad}</p>
                                <select className="rating-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                        ))}
                    </div>
                )}
                {/* FISICAS Habilidades del informe */}
                {opcionActiva === "fisicas" && (
                    <div className="mainskills">
                        <div className="skillname">
                            <h3>HABILIDADES PRINCIPALES</h3>
                            <h3 style={{ color: "lightgreen" }}>8.6</h3>
                        </div>
                        <div className="separadorskill"></div>
                        {habilidadesFisicas.map((habilidad, index) => (
                            <div key={index} className="skill">
                                <p>{habilidad}</p>
                                <select className="rating-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
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
                                rows="4"
                                cols="80">
                            </textarea>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}