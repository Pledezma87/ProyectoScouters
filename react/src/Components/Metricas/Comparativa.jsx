import React, { useContext, useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { PlayerMetricsContext } from '../../Context/Context';
import { PlayersContext } from '../../Context/Context';
import './RadarChart.css';

export const CompararJugadores = () => {
    const { playerMetricsData } = useContext(PlayerMetricsContext);
    const { data } = useContext(PlayersContext);
    const name = data.find(item => item.jugador && item.jugador.Nombre);
    console.log(name.jugador.Nombre);

    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [selectedName, setSelectedName] = useState([]);
    const [physicalSkillsDatasets, setPhysicalSkillsDatasets] = useState([]);
    const [mainSkillsDatasets, setMainSkillsDatasets] = useState([]);
    const [tacticalSkillsDatasets, setTacticalSkillsDatasets] = useState([]);
    const tacticalSkillsLabels = ["Anticipacion", "Colocacion", "Concentracion", "Contundencia", "Desdoble", "Desmarque", "VisionDeJuego", "Posicionamientos"];
    const physicalSkillLabels = ["Agilidad", "Flexibilidad", "Fuerza", "Potencia", "Resistencia", "Salto", "Velocidad"];
    const mainSkillsLabels = ["Asociacion", "Cabeza", "Centros", "ControlDelBalon", "Disparo", "Dribling", "PasesLargos", "PieDerecho", "PieIzquierdo", "Reflejos"];
    const [showCharts, setShowCharts] = useState(false);

    useEffect(() => {
        if (selectedPlayers.length < 2) {
            setPhysicalSkillsDatasets([]);
            setMainSkillsDatasets([]);
            setTacticalSkillsDatasets([]);
            return;
        }

        const getSkillsDataForPlayer = (playerId, skillType) => {
            const playerData = playerMetricsData.find((player) => player.PlayerId === playerId);
            return playerData ? playerData[skillType][0] || null : null;
        };


        const playerColors = ["rgba(141, 168, 232, 0.753)", "rgba(103, 224, 176, 0.689)", "rgba(226, 0, 0, 0.4)", "rgba(226, 207, 0, 0.4)"];

        const createSkillDatasets = (selectedPlayers, playerColors, skillLabels, skillType) => {
            return selectedPlayers.map((selectedPlayerId, index) => {
                const data = skillLabels.map((label) => {
                    const skillData = getSkillsDataForPlayer(selectedPlayerId, skillType);
                    return skillData ? skillData[label] || 0 : 0;
                });

                return {
                    label: selectedPlayerId,
                    backgroundColor: playerColors[index % playerColors.length],
                    borderColor: playerColors[index % playerColors.length].replace("0.4", "1"),
                    pointBackgroundColor: "rgba(54, 162, 235, 1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(54, 162, 235, 1)",
                    data: data,
                };
            });
        };

        const tacticalSkillsDatasets = createSkillDatasets(
            selectedPlayers,
            playerColors,
            tacticalSkillsLabels,
            "SkillsTacticas"
        );
        setTacticalSkillsDatasets(tacticalSkillsDatasets);

        const physicalSkillsDatasets = createSkillDatasets(
            selectedPlayers,
            playerColors,
            physicalSkillLabels,
            "SkillsFisicas"
        );
        setPhysicalSkillsDatasets(physicalSkillsDatasets);

        const mainSkillsDatasets = createSkillDatasets(
            selectedPlayers,
            playerColors,
            mainSkillsLabels,
            "SkillsPrincipales"
        );
        setMainSkillsDatasets(mainSkillsDatasets);

    }, [selectedPlayers, playerMetricsData]);

    const chartOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057',
                },
            },
        },
        scales: {
            r: {
                min: 0,
                max: 10,
                stepSize: 1,
                pointLabels: {
                    color: '#495057',
                },
                grid: {
                    color: '#ebedef',
                },
                angleLines: {
                    color: '#ebedef',
                },
            },
        },
    };

    const handlePlayerSelect = (selectedPlayerId) => {
        setSelectedPlayers((prevSelectedPlayers) =>
            prevSelectedPlayers.includes(selectedPlayerId)
                ? prevSelectedPlayers.filter((id) => id !== selectedPlayerId)
                : [...prevSelectedPlayers, selectedPlayerId]
        );
    };

    const handleCompareButtonClick = () => {
        if (selectedPlayers.length < 2) {
            alert('Selecciona al menos dos jugadores para comparar.');
            return;
        }
        setShowCharts(true);
    };

    if (playerMetricsData.length < 2) {
        return <p>Asegúrate de tener al menos dos jugadores para comparar.</p>;
    }

    return (
        <div className='ll'>
            <div>
                <button onClick={() => setShowCharts(false)}>Seleccionar Jugadores</button>
            </div>

            {showCharts && selectedPlayers.length >= 2 ? (
                <div className="chartsContainer">
                    <div className="tacticasRadar">
                        <h3>Habilidades Tácticas</h3>
                        <Chart
                            type="radar"
                            data={{ labels: tacticalSkillsLabels, datasets: tacticalSkillsDatasets }}
                            options={chartOptions}
                            style={{ position: 'relative', width: '80%' }}
                        />
                    </div>
                    <div className="fisicasRadar">
                        <h3>Habilidades Físicas</h3>
                        <Chart
                            type="radar"
                            data={{ labels: physicalSkillLabels, datasets: physicalSkillsDatasets }}
                            options={chartOptions}
                            style={{ position: 'relative', width: '80%' }}
                        />
                    </div>
                    <div className="principalesRadar">
                        <h3>Habilidades Principales</h3>
                        <Chart
                            type="radar"
                            data={{ labels: mainSkillsLabels, datasets: mainSkillsDatasets }}
                            options={chartOptions}
                            style={{ position: 'relative', width: '80%' }}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Selecciona al menos dos jugadores para comparar.</h2>
                    <ul>
                        {playerMetricsData.map((player) => (
                            <button
                                key={player.PlayerId}
                                className="playerButton"
                                onClick={() => handlePlayerSelect(player.PlayerId)}
                            >
                                {player.PlayerId}
                            </button>
                        ))}
                    </ul>
                    <button onClick={handleCompareButtonClick}>Comparar</button>
                </div>
            )}
        </div>
    );
};