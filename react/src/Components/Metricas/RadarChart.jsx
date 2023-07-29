import React, { useEffect, useState, useContext } from 'react';
import { Chart } from 'primereact/chart';
import { PlayerMetricsContext } from '../../Context/Context';
import './RadarChart.css';

export const RadarChart = ({ playerId }) => {
  const { playerMetricsData } = useContext(PlayerMetricsContext);

  const [fisicasChartData, setFisicasChartData] = useState({
    labels: ["Agilidad", "Flexibilidad", "Fuerza", "Resistencia", "Salto", "Velocidad"],
    datasets: [],
  });

  const [principalesChartData, setPrincipalesChartData] = useState({
    labels: ["Asociacion", "Cabeza", "Centros", "ControlDelBalon", "Disparo", "Dribling", "PasesLargos", "PieDerecho", "PieIzquierdo", "Reflejos"],
    datasets: [],
  });

  const [tacticasChartData, setTacticasChartData] = useState({
    labels: ["Anticipacion", "Colocacion", "Concentracion", "Contundencia", "Desdoble", "Desmarque", "Posicionamiento", "VisionDeJuego"],
    datasets: [],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: {
            size: 18,
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
    // Check if playerMetricsData is not empty before processing
    if (playerMetricsData.length > 0) {
      // Filtrar los datos para obtener el jugador específico por su ID
      const currentPlayerData = playerMetricsData.find(player => player.PlayerId === playerId);

      if (currentPlayerData) {
        // Formatear los datos para las habilidades físicas
        const fisicasDatasets = [];
        if (currentPlayerData.SkillsFisicas && currentPlayerData.SkillsFisicas.length > 0) {
          const backgroundColor = currentPlayerData.SkillsFisicas.length % 2 === 0 ? 'rgba(6, 214, 160, 0.4)' : 'rgba(255, 206, 86, 0.4)';
          const borderColor = currentPlayerData.SkillsFisicas.length % 2 === 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(75, 192, 192, 1)';

          const mediaGlobalFisicas = currentPlayerData.SkillsFisicas[0].mediaGlobal;
          const skillsData = [
            currentPlayerData.SkillsFisicas[0].Agilidad,
            currentPlayerData.SkillsFisicas[0].Flexibilidad,
            currentPlayerData.SkillsFisicas[0].Fuerza,
            currentPlayerData.SkillsFisicas[0].Resistencia,
            currentPlayerData.SkillsFisicas[0].Salto,
            currentPlayerData.SkillsFisicas[0].Velocidad,
          ];
          const Skill = `Skills Fisicas, ${mediaGlobalFisicas.toFixed(1)}`; // Redondear aquí

          if (currentPlayerData.SkillsFisicas[0].mediaGlobal !== undefined && currentPlayerData.SkillsFisicas[0].mediaGlobal !== null) {
            const mediaGlobalAsString = String(currentPlayerData.SkillsFisicas[0].mediaGlobal);
            fisicasDatasets.push({
              label: Skill,
              backgroundColor,
              borderColor,
              pointBackgroundColor: borderColor,
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: borderColor,
              data: skillsData,
            });
          }
        }

        // Formatear los datos para las habilidades principales
        const principalesDatasets = [];
        if (currentPlayerData.SkillsPrincipales && currentPlayerData.SkillsPrincipales.length > 0) {
          const backgroundColor = currentPlayerData.SkillsPrincipales.length % 2 === 0 ? 'rgba(6, 214, 160, 0.4)' : 'rgba(54, 162, 235, 0.4)';
          const borderColor = currentPlayerData.SkillsPrincipales.length % 2 === 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(75, 192, 192, 1)';

          const mediaGlobalPrincipales = currentPlayerData.SkillsPrincipales[0].mediaGlobal;
          const principalesData = [
            currentPlayerData.SkillsPrincipales[0].Asociacion,
            currentPlayerData.SkillsPrincipales[0].Cabeza,
            currentPlayerData.SkillsPrincipales[0].Centros,
            currentPlayerData.SkillsPrincipales[0].ControlDelBalon,
            currentPlayerData.SkillsPrincipales[0].Disparo,
            currentPlayerData.SkillsPrincipales[0].Dribling,
            currentPlayerData.SkillsPrincipales[0].PasesLargos,
            currentPlayerData.SkillsPrincipales[0].PieDerecho,
            currentPlayerData.SkillsPrincipales[0].PieIzquierdo,
            currentPlayerData.SkillsPrincipales[0].Reflejos,
          ];
          const Skill = `Skills Principales, ${mediaGlobalPrincipales.toFixed(1)}`; // Redondear aquí

          if (currentPlayerData.SkillsPrincipales[0].mediaGlobal !== undefined && currentPlayerData.SkillsPrincipales[0].mediaGlobal !== null) {
            const mediaGlobalAsString = String(currentPlayerData.SkillsPrincipales[0].mediaGlobal);
            principalesDatasets.push({
              label: Skill,
              backgroundColor,
              borderColor,
              pointBackgroundColor: borderColor,
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: borderColor,
              data: principalesData,
            });
          }
        }

        // Formatear los datos para las habilidades tácticas
        const tacticasDatasets = [];
        if (currentPlayerData.SkillsTacticas && currentPlayerData.SkillsTacticas.length > 0) {
          const backgroundColor = currentPlayerData.SkillsTacticas.length % 2 === 0 ? 'rgba(6, 214, 160, 0.4)' : 'rgba(153, 102, 255, 0.4)';
          const borderColor = currentPlayerData.SkillsTacticas.length % 2 === 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(75, 192, 192, 1)';

          const mediaGlobalTacticas = currentPlayerData.SkillsTacticas[0].mediaGlobal;
          const tacticasData = [
            currentPlayerData.SkillsTacticas[0].Anticipacion,
            currentPlayerData.SkillsTacticas[0].Colocacion,
            currentPlayerData.SkillsTacticas[0].Concentracion,
            currentPlayerData.SkillsTacticas[0].Contundencia,
            currentPlayerData.SkillsTacticas[0].Desdoble,
            currentPlayerData.SkillsTacticas[0].Desmarque,
            currentPlayerData.SkillsTacticas[0].Posicionamientos,
            currentPlayerData.SkillsTacticas[0].VisionDeJuego,
          ];
          const Skill = `Skills Tácticas, ${mediaGlobalTacticas.toFixed(1)}`; // Redondear aquí

          if (currentPlayerData.SkillsTacticas[0].mediaGlobal !== undefined && currentPlayerData.SkillsTacticas[0].mediaGlobal !== null) {
            const mediaGlobalAsString = String(currentPlayerData.SkillsTacticas[0].mediaGlobal);
            tacticasDatasets.push({
              label: Skill,
              backgroundColor,
              borderColor,
              pointBackgroundColor: borderColor,
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: borderColor,
              data: tacticasData,
            });
          }
        }

        // Actualizar los estados con los nuevos datos formateados
        setFisicasChartData((prevData) => ({ ...prevData, datasets: fisicasDatasets }));
        setPrincipalesChartData((prevData) => ({ ...prevData, datasets: principalesDatasets }));
        setTacticasChartData((prevData) => ({ ...prevData, datasets: tacticasDatasets }));
      }
    }
  }, [playerMetricsData, playerId]);

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
    </div>
  );
};













































































