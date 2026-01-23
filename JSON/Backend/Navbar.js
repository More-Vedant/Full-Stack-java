export const Navbar = () => {
    return `
    <nav style="display: flex; justify-content: space-evenly; align-items: center; border: 1px solid: gray;
    <div>
    <img width="100" height="100%" src=""
    </div>
    <ol
        style="display: flex; list-style: none; gap: 30px; text-transform: capitalize; font-weight: 600; font-family: 'Seoge UI', Tahoma, Geneva, Verdana, sans-serif;>
        <li id="form" style="cursor:pointer">form</li>
        <li id="all_data style="cursor:pointer">all data</li>
        </ol>
        <button style="padding: 7px 15px;">login / logout</button>
        </nav>
        `;

};

export const formPage = () => {
    window.location.pathname ='';
};

export const all_dataPage = () => {
    window.location.pathname ='';
};