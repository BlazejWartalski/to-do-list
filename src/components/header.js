function createHeader() {
    const header = document.createElement('div');
    header.innerHTML =  ("To-Do List");
    header.classList.add("HeaderBox");
    document.body.appendChild(header);
  }

export default createHeader;