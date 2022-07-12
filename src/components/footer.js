function createFooter() {
    const Footer = document.createElement('div');
    Footer.innerHTML = ("Created by Blazej Wartalski");
    Footer.classList.add("FooterBox");
    document.body.appendChild(Footer);   
}

export default createFooter;