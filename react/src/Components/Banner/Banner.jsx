import React from 'react';
import { Icon } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './Banner.css';
import { Link } from 'react-router-dom';

export function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <div className="banner__icon-container">
          <Icon component={SportsSoccerIcon} className="banner__icon" sx={{fontSize: "2.5rem"}} />
        </div>
        <h2 className="banner__text">JUGADORES SEGUIDOS</h2>
      </div>
      <div className="banner__right">
        <Link to="#" className="banner__button">
          <Icon component={PersonAddIcon} className="banner__button-icon" />
          Nueva Ficha
        </Link>

        <Link to="#" className="banner__button">
          <Icon component={AssignmentIcon} className="banner__button-icon" />
          Nuevo Informe
        </Link>
      </div>
    </div>
  );
}
