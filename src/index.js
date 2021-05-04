import 'reseter.css'
import './style.css';

import { component } from './home.js';
import { navTab } from './tabs.js';
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

document.body.appendChild(navTab());
document.body.appendChild(component());