import React, { useState } from 'react';
import './Filters.css';
import SortIcon from '@mui/icons-material/Sort';

export function Filters() {
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [country, setCountry] = useState('');
  const [competition, setCompetition] = useState('');
  const [position, setPosition] = useState('');
  const [foot, setFoot] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [minWeight, setMinWeight] = useState('');
  const [maxWeight, setMaxWeight] = useState('');

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'gender':
        setGender(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'nationality':
        setNationality(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'competition':
        setCompetition(value);
        break;
      case 'position':
        setPosition(value);
        break;
      case 'foot':
        setFoot(value);
        break;
      case 'minAge':
        setMinAge(value);
        break;
      case 'maxAge':
        setMaxAge(value);
        break;
      case 'minHeight':
        setMinHeight(value);
        break;
      case 'maxHeight':
        setMaxHeight(value);
        break;
      case 'minWeight':
        setMinWeight(value);
        break;
      case 'maxWeight':
        setMaxWeight(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes utilizar los valores de los filtros para realizar la búsqueda o realizar otras acciones
    // Por ejemplo, puedes llamar a una función pasándole los valores de los filtros como argumentos
    // searchPlayers(gender, name, nationality, country, competition, position, foot, minAge, maxAge, minHeight, maxHeight, minWeight, maxWeight);

    // Luego puedes resetear los filtros si es necesario
    resetFilters();
  };

  const resetFilters = () => {
    setGender('');
    setName('');
    setNationality('');
    setCountry('');
    setCompetition('');
    setPosition('');
    setFoot('');
    setMinAge('');
    setMaxAge('');
    setMinHeight('');
    setMaxHeight('');
    setMinWeight('');
    setMaxWeight('');
  };

  return (
    <div className="filters">
      <h2 className="filters__title">
        <SortIcon /> Filtros
      </h2>
      <form className="filters__form" onSubmit={handleSubmit}>
        <div className="filters__group">
          <label className="filters__label">Género:</label>
          <div className="filters__radio-group">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === 'male'}
              onChange={handleFilterChange}
            />
            <label htmlFor="male">Masculino</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === 'female'}
              onChange={handleFilterChange}
            />
            <label htmlFor="female">Femenino</label>
          </div>
        </div>

        <div className="filters__group">
          <label className="filters__label">País:</label>
          <select
            className="filters__select"
            name="country"
            value={country}
            onChange={handleFilterChange}
          >
            <option value="">Seleccionar país</option>
            <option value="spain">España</option>
            <option value="france">Francia</option>
            <option value="italy">Italia</option>
          </select>
        </div>

        <div className="filters__group">
          <label className="filters__label">Nacionalidad:</label>
          <select
            className="filters__select"
            name="nationality"
            value={nationality}
            onChange={handleFilterChange}
          >
            <option value="">Seleccionar nacionalidad</option>
            <option value="spanish">Español</option>
            <option value="french">Francés</option>
            <option value="italian">Italiano</option>
          </select>
        </div>

        <div className="filters__group">
          <label className="filters__label">Posición:</label>
          <select
            className="filters__select"
            name="position"
            value={position}
            onChange={handleFilterChange}
          >
            <option value="">Seleccionar posición</option>
            <option value="forward">Delantero</option>
            <option value="defender">Mediocentro</option>
            <option value="midfielder">Defensa</option>
            <option value="goalkeeper">Portero</option>
          </select>
        </div>

        <div className="filters__group">
          <label className="filters__label">Pie Bueno:</label>
          <div className="filters__radio-group">
            <input
              type="radio"
              name="foot"
              id="left"
              value="left"
              checked={foot === 'left'}
              onChange={handleFilterChange}
            />
            <label htmlFor="left">Zurdo</label>
            <input
              type="radio"
              name="foot"
              id="right"
              value="right"
              checked={foot === 'right'}
              onChange={handleFilterChange}
            />
            <label htmlFor="right">Diestro</label>
            <input
              type="radio"
              name="foot"
              id="both"
              value="both"
              checked={foot === 'both'}
              onChange={handleFilterChange}
            />
            <label htmlFor="both">Ambos</label>
          </div>
        </div>

        <div className="filters__group">
          <label className="filters__label">Rango de edad:</label>
          <div className="filters__range">
            <input
              type="number"
              min="14"
              max="21"
              className="filters__input"
              placeholder="Mínimo"
              name="minAge"
              value={minAge}
              onChange={handleFilterChange}
            />
            <input
              type="number"
              min="14"
              max="21"
              className="filters__input"
              placeholder="Máximo"
              name="maxAge"
              value={maxAge}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="filters__group">
          <label className="filters__label">Altura:</label>
          <div className="filters__range">
            <input
              type="number"
              min="150"
              max="200"
              className="filters__input"
              placeholder="Mínimo"
              name="minHeight"
              value={minHeight}
              onChange={handleFilterChange}
            />
            <input
              type="number"
              min="150"
              max="200"
              className="filters__input"
              placeholder="Máximo"
              name="maxHeight"
              value={maxHeight}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="filters__group">
          <label className="filters__label">Peso:</label>
          <div className="filters__range">
            <input
              type="number"
              min="40"
              max="100"
              className="filters__input"
              placeholder="Mínimo"
              name="minWeight"
              value={minWeight}
              onChange={handleFilterChange}
            />
            <input
              type="number"
              min="40"
              max="100"
              className="filters__input"
              placeholder="Máximo"
              name="maxWeight"
              value={maxWeight}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="filters__buttons">
          <button className="filters__button" type="submit">
            Aplicar filtros
          </button>
          <button className="filters__button" type="button" onClick={resetFilters}>
            Restablecer
          </button>
        </div>
      </form>
    </div>
  );
}
