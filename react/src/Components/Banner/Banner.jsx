import React from 'react';
import { Icon } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './Banner.css';
import { Link } from 'react-router-dom';

export function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <div className="banner__icon-container">
          <Icon component={StarIcon} className="banner__icon" />
        </div>
        <h2 className="banner__text">JUGADORES FAVORITOS</h2>
      </div>
      <div className="banner__right">
        <Link to="#" className="banner__button">
          <Icon component={AssignmentIcon} className="banner__button-icon" />
          Nuevo Informe
        </Link>
      </div>
    </div>
  );
}
