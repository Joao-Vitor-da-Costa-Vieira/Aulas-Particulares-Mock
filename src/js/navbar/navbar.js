
function navbar(item_menu){
const navbar = document.getElementById('navbar');
navbar.innerHTML = `
<nav class="navbar">
        ${
            item_menu.filter(menu=> menu.label !== "")
            .map((item)=>{
                return `<li>
                            <a href="${item.url}" class="navbar-item navbar-item__icon">
                                <i data-lucide="${item.icon}"></i>  
                                ${item.label}
                            </a>
                        </li>`
            }).join('')
        }
</nav>
`;

adicionarEvento(navbar)

}

function adicionarEvento(app){
    const navbarItems = document.querySelectorAll('.navbar-item');
    navbarItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const url = item.getAttribute('href');
            window.location.hash = url;
        });
    });
}

export { navbar };