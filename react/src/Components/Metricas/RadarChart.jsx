// import React, { useEffect, useState } from 'react';
// import { Chart } from 'primereact/chart';
// import axios from 'axios';

// export const RadarChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: ['Ofensiva', 'Tecnica', 'Movimiento', 'Potencia', 'Mentalidad', 'Defensa'],
//     datasets: [],
//   });

//   const [lightOptions] = useState({
//     plugins: {
//       legend: {
//         labels: {
//           color: '#495057',
//         },
//       },
//     },
//     scales: {
//       r: {
//         min: 0,
//         max: 10,
//         stepSize: 1,
//         pointLabels: {
//           color: '#495057',
//         },
//         grid: {
//           color: '#ebedef',
//         },
//         angleLines: {
//           color: '#ebedef',
//         },
//       },
//     },
//   });

//   useEffect(() => {
//     // Función para obtener los datos de la API
//     const fetchPlayerMetrics = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/player-metrics"); // Reemplaza "/api/player-metrics" con la ruta correcta de tu API
//         const playerMetrics = response.data; // Suponiendo que la API devuelve un array de objetos con las métricas de los jugadores

//         // Formatear los datos para el gráfico
//         const datasets = playerMetrics.map((player, index) => {
//           const backgroundColor = index % 2 === 0 ? 'rgba(6, 214, 160, 0.4)' : 'rgba(239, 71, 111, 0.4)';
//           const borderColor = index % 2 === 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(75, 192, 192, 1)';
          
//           return {
//             label: player.PlayerId, // Asegúrate de tener un identificador único para cada jugador
//             backgroundColor,
//             borderColor,
//             pointBackgroundColor: borderColor,
//             pointBorderColor: '#fff',
//             pointHoverBackgroundColor: '#fff',
//             pointHoverBorderColor: borderColor,
//             data: [
//               player.Ofensiva,
//               player.Tecnica,
//               player.Movimiento,
//               player.Potencia,
//               player.Mentalidad,
//               player.Defensa,
//             ],
//           };
//         });

//         setChartData((prevChartData) => ({
//           ...prevChartData,
//           datasets,
//         }));
//       } catch (error) {
//         console.error('Error al obtener los datos de la API:', error);
//       }
//     };

//     fetchPlayerMetrics();
//   }, []);

//   return (
//     <div className="radar-card flex justify-content-center">
//       <Chart type="radar" data={chartData} options={lightOptions} style={{ position: 'relative', width: '30%' }} />
//     </div>
//   );
// };



































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
  console.log(playerMetricsData[0])

  const [fisicasChartData, setFisicasChartData] = useState({
    labels: ["Agilidad", "Flexibilidad", "Fuerza", "Resistencia", "Salto", "Velocidad",],
    datasets: [],
  });

  const [principalesChartData, setPrincipalesChartData] = useState({
    labels: ["Asociacion", "Cabeza", "Centros", "ControlDelBalon", "Disparo", "Dribling", "PasesLargos", "PieDerecho", "PieIzquierdo", "Reflejos",],
    datasets: [],
  });



  const [tacticasChartData, setTacticasChartData] = useState({
    labels: ["Anticipacion", "Colocacion", "Concentracion", "Contundencia", "Desdoble", "Desmarque", "Posicionamiento","VisionDeJuego",],
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

        return {
          label: player.PlayerId, // Asegúrate de tener un identificador único para cada jugador
          backgroundColor,
          borderColor,
          pointBackgroundColor: borderColor,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: borderColor,
          data: skillsData,
        };
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

        return {
          label: player.PlayerId, // Asegúrate de tener un identificador único para cada jugador
          backgroundColor,
          borderColor,
          pointBackgroundColor: borderColor,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: borderColor,
          data: principalesData,
        };
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
        
       

        return {
          label: player.PlayerId, // Asegúrate de tener un identificador único para cada jugador
          backgroundColor,
          borderColor,
          pointBackgroundColor: borderColor,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: borderColor,
          data:tacticasData,
        };
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

  
    <h3 className='h3Graficas'>Skills Físicas</h3>
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
    <span> </span>
  
    <h3 className='h3Graficas'>Skills Principales</h3>
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
  
    <h3 className='h3Graficas'>Skills Tácticas</h3>
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
        {/* <h4>Jugador {player.PlayerId}</h4> */}
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
