import React, { useContext, useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { PlayerMetricsContext } from '../../Context/Context';
import './RadarChart.css';
import { Button, Icon, Typography, Box } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { HeaderComparativo } from '../Header/HeaderComparativo';

export const CompararJugadores = () => {
  const { playerMetricsData } = useContext(PlayerMetricsContext);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [physicalSkillsDatasets, setPhysicalSkillsDatasets] = useState([]);
  const [mainSkillsDatasets, setMainSkillsDatasets] = useState([]);
  const [tacticalSkillsDatasets, setTacticalSkillsDatasets] = useState([]);
  const tacticalSkillsLabels = ["Anticipacion", "Colocacion", "Concentracion", "Contundencia", "Desdoble", "Desmarque", "VisionDeJuego", "Posicionamientos"];
  const physicalSkillLabels = ["Agilidad", "Flexibilidad", "Fuerza", "Potencia", "Resistencia", "Salto", "Velocidad"];
  const mainSkillsLabels = ["Asociacion", "Cabeza", "Centros", "ControlDelBalon", "Disparo", "Dribling", "PasesLargos", "PieDerecho", "PieIzquierdo", "Reflejos"];
  const [showCharts, setShowCharts] = useState(false);
  const [showPlayerList, setShowPlayerList] = useState(false);
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);

  const isPlayerSelected = (playerId) => {
    return selectedPlayers.includes(playerId);
  };

  const handleShowPlayerList = () => {
    setShowPlayerList((prevShowPlayerList) => !prevShowPlayerList);
  };

  const handlePlayerSelect = (selectedPlayerId) => {
    if (isPlayerSelected(selectedPlayerId)) {
      setSelectedPlayers((prevSelectedPlayers) =>
        prevSelectedPlayers.filter((id) => id !== selectedPlayerId)
      );
    } else {
      if (selectedPlayers.length < 2) {
        setSelectedPlayers((prevSelectedPlayers) => [...prevSelectedPlayers, selectedPlayerId]);
      } else {
        // Si ya hay dos jugadores seleccionados, ignorar la selección
        return;
      }
    }
  };

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: {
            size: 10,
          },
        },
      },
    },
    scales: {
      r: {
        min: 0,
        max: 10,
        stepSize: 1,
        pointLabels: {
          color: '#fff',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#ebedef',
        },
        angleLines: {
          color: '#ebedef',
        },
      },
    },
  });

  useEffect(() => {
    setShowCharts(selectedPlayers.length >= 2);
  }, [selectedPlayers]);

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

    const playerColors = ["rgba(60, 142, 242, 0.533)", "rgba(175, 52, 52, 0.702)"];

    const tacticalSkillsDatasets = selectedPlayers.map((selectedPlayerId, index) => {
      const data = tacticalSkillsLabels.map((label) => {
        const skillData = getSkillsDataForPlayer(selectedPlayerId, "SkillsTacticas");
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

    setTacticalSkillsDatasets(tacticalSkillsDatasets);

    const physicalSkillsDatasets = selectedPlayers.map((selectedPlayerId, index) => {
      const data = physicalSkillLabels.map((label) => {
        const skillData = getSkillsDataForPlayer(selectedPlayerId, "SkillsFisicas");
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

    setPhysicalSkillsDatasets(physicalSkillsDatasets);

    const mainSkillsDatasets = selectedPlayers.map((selectedPlayerId, index) => {
      const data = mainSkillsLabels.map((label) => {
        const skillData = getSkillsDataForPlayer(selectedPlayerId, "SkillsPrincipales");
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

    setMainSkillsDatasets(mainSkillsDatasets);

  }, [selectedPlayers, playerMetricsData]);

  return (
    <div className='containerComparativo'>
      <HeaderComparativo />
      <div className="bannerComparativo">
        <div className="banner__leftComparativo">
          <div className="banner__icon-containerComparativo">
            <Icon component={SportsSoccerIcon} className="banner__iconComparativo" sx={{ fontSize: "2.5rem" }} />
          </div>
          <h3 className="banner__textComparativo"> Compara a tus jugadores</h3>
        </div>
        <div className="banner_rightComparativo"></div>
      </div>

      <div className='botonComparativo'>
        <Button variant='contained' backgroundColor="#C7F55C" onClick={handleShowPlayerList} sx={{gap:"5px", width: '15rem', padding: '1rem', marginTop: "-5rem", color: 'black', backgroundColor: '#C7F55C', '&:hover': { backgroundColor: '#C7F55C', }, }}>
          <Icon component={PersonAddIcon} style={{ color: "black" }} />
          Lista de jugadores
        </Button>

        <div className='listadeJugadores_Container'>
        {showPlayerList && (
          
          <div className='seleccionaJugadores'>
            <h2 className='h2Comparativo'>Selecciona 2 jugadores</h2>
          </div>
        )}
      </div >
        
      {showPlayerList && (
  <div>
    <ul className='listaDeJugadores'>
      {playerMetricsData.map((player) => (
        <Typography
          key={player.PlayerId}
          className={`playerButton ${
            isPlayerSelected(player.PlayerId)
              ? selectedPlayers.indexOf(player.PlayerId) === 0
                ? 'newColorFirstPlayer'
                : 'newColorSecondPlayer'
              : ''
          }`}
          onClick={() => handlePlayerSelect(player.PlayerId)}
        >
          {player.PlayerId}
        </Typography>
      ))}
    </ul>
 
  </div>
      )}
   

      {showCharts && selectedPlayers.length >= 2 && showPlayerList && (
        <Box sx={{ display: "flex", marginTop: "-15rem", fontSize: "15px", justifyContent:"space-around",gap:"55rem" }}>
          <div className='ChartContainer'>
            <h3 className='habilidades_C'>Habilidades Tácticas</h3>
            <Chart type="radar" data={{ labels: tacticalSkillsLabels, datasets: tacticalSkillsDatasets }} options={lightOptions} />
          </div>

          <div className='ChartContainer' >
            <h3 className='habilidades_C'>Habilidades Físicas</h3>
            <Chart type="radar" data={{ labels: physicalSkillLabels, datasets: physicalSkillsDatasets }} options={lightOptions} />
          </div>

          <div className='ChartContainer'>
            <h3 className='habilidades_C'>Habilidades Principales</h3>
            <Chart type="radar" data={{ labels: mainSkillsLabels, datasets: mainSkillsDatasets }} options={lightOptions} />
          </div>
        </Box>
      )}
    </div>
    </div>
  );
};