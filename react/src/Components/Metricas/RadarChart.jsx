import React, { useEffect, useState, useContext } from 'react';
import { Chart } from 'primereact/chart';
import { PlayerMetricsContext } from '../../Context/Context';
import './RadarChart.css'

function getMediaGlobal(player, type) {
  if (type === 'fisicas') {
    return player.SkillsFisicas[0]?.mediaGlobal || 0;
  } else if (type === 'principales') {
    return player.SkillsPrincipales[0]?.mediaGlobal || 0;
  } else if (type === 'tacticas') {
    return player.SkillsTacticas[0]?.mediaGlobal || 0;
  } else {
    return 0;
  }
}

export const RadarChart = () => {
  const { playerMetricsData } = useContext(PlayerMetricsContext);
  // console.log(playerMetricsData[0])

  const [fisicasChartData, setFisicasChartData] = useState({
    labels: ["Agilidad", "Flexibilidad", "Fuerza", "Resistencia", "Salto", "Velocidad",],
    datasets: [],
  });

  const [principalesChartData, setPrincipalesChartData] = useState({
    labels: ["Asociacion", "Cabeza", "Centros", "ControlDelBalon", "Disparo", "Dribling", "PasesLargos", "PieDerecho", "PieIzquierdo", "Reflejos",],
    datasets: [],
  });

  const [tacticasChartData, setTacticasChartData] = useState({
    labels: ["Anticipacion", "Colocacion", "Concentracion", "Contundencia", "Desdoble", "Desmarque", "Posicionamiento", "VisionDeJuego",],
    datasets: [],
  });

  const [lightOptions] = useState({
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
  });

  useEffect(() => {
    // Check if playerMetricsData is not empty before processing
    if (playerMetricsData.length > 0) {
      // Formatear los datos para las habilidades físicas
      const fisicasDatasets = playerMetricsData.map((player, index) => {
        const backgroundColor = index % 2 === 0 ? 'rgba(6, 214, 160, 0.4)' : 'rgba(239, 71, 111, 0.4)';
        const borderColor = index % 2 === 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(75, 192, 192, 1)';

        const skillsData = [
          player?.SkillsFisicas[0]?.Agilidad,
          player?.SkillsFisicas[0]?.Flexibilidad,
          player?.SkillsFisicas[0]?.Fuerza,
          player?.SkillsFisicas[0]?.Resistencia,
          player?.SkillsFisicas[0]?.Salto,
          player?.SkillsFisicas[0]?.Velocidad,
        ];
        const Skill = "Skills Fisicas";

        // Make sure player.SkillsTacticas is defined and not empty
        if (player.SkillsTacticas && player.SkillsTacticas.length > 0) {
          // Make sure player.SkillsTacticas[0].mediaGlobal exists and is not empty
          if (player.SkillsTacticas[0].mediaGlobal !== undefined && player.SkillsTacticas[0].mediaGlobal !== null) {
            // Assuming player.SkillsTacticas[0].mediaGlobal contains a numeric value
            const mediaGlobalAsString = String(player.SkillsFisicas[0].mediaGlobal);
            return {
              label: `${Skill}, ${mediaGlobalAsString}`, // Fixed the template literal
              backgroundColor,
              borderColor,
              pointBackgroundColor: borderColor,
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: borderColor,
              data: skillsData,
            };
          }
        }
      });

      // Formatear los datos para las habilidades principales
      const principalesDatasets = playerMetricsData.map((player, index) => {
        const backgroundColor = index % 2 === 0 ? 'rgba(6, 214, 160, 0.4)' : 'rgba(239, 71, 111, 0.4)';
        const borderColor = index % 2 === 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(75, 192, 192, 1)';

        const principalesData = [
          player?.SkillsPrincipales[0]?.Asociacion,
          player?.SkillsPrincipales[0]?.Cabeza,
          player?.SkillsPrincipales[0]?.Centros,
          player?.SkillsPrincipales[0]?.ControlDelBalon,
          player?.SkillsPrincipales[0]?.Disparo,
          player?.SkillsPrincipales[0]?.Dribling,
          player?.SkillsPrincipales[0]?.PasesLargos,
          player?.SkillsPrincipales[0]?.PieDerecho,
          player?.SkillsPrincipales[0]?.PieIzquierdo,
          player?.SkillsPrincipales[0]?.Reflejos,
        ];
        const Skill = "Skills Principales";

        // Make sure player.SkillsTacticas is defined and not empty
        if (player.SkillsTacticas && player.SkillsTacticas.length > 0) {
          // Make sure player.SkillsTacticas[0].mediaGlobal exists and is not empty
          if (player.SkillsTacticas[0].mediaGlobal !== undefined && player.SkillsTacticas[0].mediaGlobal !== null) {
            // Assuming player.SkillsTacticas[0].mediaGlobal contains a numeric value
            const mediaGlobalAsString = String(player.SkillsPrincipales[0].mediaGlobal);
            return {
              label: `${Skill}, ${mediaGlobalAsString}`, // Fixed the template literal
              backgroundColor,
              borderColor,
              pointBackgroundColor: borderColor,
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: borderColor,
              data: principalesData,
            };
          }
        }
      });

      const tacticasDatasets = playerMetricsData.map((player, index) => {
        const backgroundColor = index % 2 === 0 ? 'rgba(6, 214, 160, 0.4)' : 'rgba(239, 71, 111, 0.4)';
        const borderColor = index % 2 === 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(75, 192, 192, 1)';

        const tacticasData = [
          player?.SkillsTacticas[0]?.Anticipacion,
          player?.SkillsTacticas[0]?.Colocacion,
          player?.SkillsTacticas[0]?.Concentracion,
          player?.SkillsTacticas[0]?.Contundencia,
          player?.SkillsTacticas[0]?.Desdoble,
          player?.SkillsTacticas[0]?.Desmarque,
          player?.SkillsTacticas[0]?.Posicionamientos,
          player?.SkillsTacticas[0]?.VisionDeJuego,
        ];
        const Skill = "Skills Tacticas";

        // Make sure player.SkillsTacticas is defined and not empty
        if (player.SkillsTacticas && player.SkillsTacticas.length > 0) {
          // Make sure player.SkillsTacticas[0].mediaGlobal exists and is not empty
          if (player.SkillsTacticas[0].mediaGlobal !== undefined && player.SkillsTacticas[0].mediaGlobal !== null) {
            // Assuming player.SkillsTacticas[0].mediaGlobal contains a numeric value
            const mediaGlobalAsString = String(player.SkillsTacticas[0].mediaGlobal);
            return {
              label: `${Skill}, ${mediaGlobalAsString}`, // Fixed the template literal
              backgroundColor,
              borderColor,
              pointBackgroundColor: borderColor,
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: borderColor,
              data: tacticasData,
            };
          }
        }

        // Return a default object or handle the case where data is not available
        return { label: 'Data not available', backgroundColor: '#000', borderColor: '#000', data: [] };

      });

      setFisicasChartData({
        ...fisicasChartData,
        datasets: fisicasDatasets,
      });

      setTacticasChartData({
        ...tacticasChartData,
        datasets: tacticasDatasets,
      });

      setPrincipalesChartData({
        ...principalesChartData,
        datasets: principalesDatasets,
      });
    }
  }, [playerMetricsData]);

  return (

    <div className="cardRadar">

      <div className="fisicasRadar">
        {/* Renderizar gráficos para habilidades físicas */}
        {fisicasChartData.datasets.map((dataset, index) => (
          <Chart
            key={index}
            type="radar"
            data={{ labels: fisicasChartData.labels, datasets: [dataset] }}
            options={lightOptions}
            style={{ position: 'relative', width: '20%' }}
          />
        ))}
      </div>

      <div className="principalesRadar">
        {/* Renderizar gráficos para habilidades principales */}
        {principalesChartData.datasets.map((dataset, index) => (
          <Chart
            key={index}
            type="radar"
            data={{ labels: principalesChartData.labels, datasets: [dataset] }}
            options={lightOptions}
            style={{ position: 'relative', width: '20%' }}
          />
        ))}
      </div>

      <div className="tacticasRadar">
        {/* Renderizar gráficos para habilidades tácticas */}
        {tacticasChartData.datasets.map((dataset, index) => (
          <Chart
            key={index}
            type="radar"
            data={{ labels: tacticasChartData.labels, datasets: [dataset] }}
            options={lightOptions}
            style={{ position: 'relative', width: '20%' }}
          />
        ))}
      </div>
      {playerMetricsData.map((player) => (
        <div key={player.PlayerId} className='graficasContainer'>
          <h4>Jugador {player.PlayerId}</h4>
          <div className='graficasSpan'>
            Media Global de Skills físicas: {getMediaGlobal(player, 'fisicas')}
          </div>
          <div className='graficasSpan'>
            Media Global de Skills principales: {getMediaGlobal(player, 'principales')}
          </div>
          <div className='graficasSpan'>
            Media Global de Skills tácticas: {getMediaGlobal(player, 'tacticas')}
          </div>
        </div>
      ))}
    </div>
  );
};
