
function Nav({ fn }) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        fn(text);
    };
    return (
        <nav className="input-group mb-3" >
            <form onSubmit={handleFormSubmit} id="busqueda">
                <input type="text" placeholder="ingrese el lugar" className="form-control"/>
                <button type="submit" id="button-addon2" className="btn btn-outline-secondary">Search</button>
            </form>
        </nav>
    )   
}
export default Nav;