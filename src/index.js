import createHeader from './components/header.js'
import createFooter from './components/footer.js'
import initializeSideNav from './components/navigation.js'
import createDisplay from './components/display.js'
import { createPage, createTaskPage, initializeButtons } from './components/crud.js'
import './style.css';

createPage();
createTaskPage();
createHeader();
initializeSideNav();
createFooter();
createDisplay();

//Add functionality to buttons