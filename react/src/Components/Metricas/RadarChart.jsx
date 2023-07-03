import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import axios from 'axios';

const RadarChartDemo = () => {
  const [chartData, setChartData] = useState({
    labels: ['Ofensiva', 'Tecnica', 'Movimiento', 'Potencia', 'Mentalidad', 'Defensa'],
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
    // Función para obtener los datos de la API
    const fetchPlayerMetrics = async () => {
      try {
        const response = await axios.get("http://localhost:8000/player-metrics"); // Reemplaza "/api/player-metrics" con la ruta correcta de tu API
        const playerMetrics = response.data; // Suponiendo que la API devuelve un array de objetos con las métricas de los jugadores

        // Formatear los datos para el gráfico
        const datasets = playerMetrics.map((player, index) => {
          const backgroundColor = index % 2 === 0 ? 'rgba(6, 214, 160, 0.4)' : 'rgba(239, 71, 111, 0.4)';
          const borderColor = index % 2 === 0 ? 'rgba(54, 162, 235, 1)' : 'rgba(75, 192, 192, 1)';
          
          return {
            label: player.PlayerId, // Asegúrate de tener un identificador único para cada jugador
            backgroundColor,
            borderColor,
            pointBackgroundColor: borderColor,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: borderColor,
            data: [
              player.Ofensiva,
              player.Tecnica,
              player.Movimiento,
              player.Potencia,
              player.Mentalidad,
              player.Defensa,
            ],
          };
        });

        setChartData((prevChartData) => ({
          ...prevChartData,
          datasets,
        }));
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchPlayerMetrics();
  }, []);

  return (
    <div className="card flex justify-content-center">
      <Chart type="radar" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
    </div>
  );
};

export default RadarChartDemo;