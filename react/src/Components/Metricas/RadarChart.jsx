import React, { useEffect, useState, useContext } from 'react';
import { Chart } from 'primereact/chart';
import { PlayerMetricsContext } from '../../Context/Context';
import './RadarChart.css'

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
          color: '#fff',
          font: {
            size: 18, // Aquí puedes ajustar el tamaño de la letra de las etiquetas
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
            size: 14, // Aquí puedes ajustar el tamaño de la letra de las etiquetas
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

      function actualizarChartData(setChartData, currentChartData, newDatasets) {
        setChartData({
          ...currentChartData,
          datasets: newDatasets,
        });
      }

      // Llamadas a la función auxiliar
      actualizarChartData(setFisicasChartData, fisicasChartData, fisicasDatasets);
      actualizarChartData(setTacticasChartData, tacticasChartData, tacticasDatasets);
      actualizarChartData(setPrincipalesChartData, principalesChartData, principalesDatasets);

    }
  }, [playerMetricsData]);

  return (
    <div className="cardRadar">
      <div className="chartsContainer">
        <div className="fisicasRadar">
          {/* Renderizar gráficos para habilidades físicas */}
          {fisicasChartData.datasets.map((dataset, index) => (
            <Chart
              key={index}
              type="radar"
              data={{ labels: fisicasChartData.labels, datasets: [dataset] }}
              options={lightOptions}
              style={{ position: 'relative', width: '80%' }}
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
              style={{ position: 'relative', width: '80%' }}
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
              style={{ position: 'relative', width: '80%' }}
            />
          ))}
        </div>
      </div>

      {/* Rest of the content remains the same */}
      {playerMetricsData.map((player) => (
        <div key={player.PlayerId} className='graficasContainer'>
          {/* Player information */}
        </div>
      ))}
    </div>
  );

};