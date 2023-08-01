import { Link } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Icon} from '@mui/material'

export function HeaderComparativo() {
  return (
    <header className="headerComparativo">
      <Link to="/InterfazJugadores" className="banner_volver">
        <Icon component={KeyboardReturnIcon} className="banner_volver-icon" sx={{fontSize:'50px'}}/>

      </Link>
      <Link className="header__companyComparativo">
        <h1 className="header__company-nameComparativo">Scouters</h1>
        <span className="header__company-badgeComparativo">NEW ERA</span>
      </Link>
    </header>
  );
}