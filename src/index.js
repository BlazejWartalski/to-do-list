import createHeader from './components/header.js'
import createFooter from './components/footer.js'
import initializeSideNav from './components/navigation.js'
import createDisplay from './components/display.js'
import createPage from './components/crud.js'
import './style.css';

createPage();
createHeader();
initializeSideNav();
createFooter();
createDisplay();

//Add functionality to buttons