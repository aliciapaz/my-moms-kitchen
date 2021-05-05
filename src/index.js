import 'reseter.css'
import './style.css';

import { background, board, home } from './home.js';
import { navTab } from './tabs.js';
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

document.body.appendChild(navTab());
document.body.appendChild(background());
document.body.appendChild(board());

document.body.appendChild(home());
