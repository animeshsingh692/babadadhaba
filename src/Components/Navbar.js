import "./style.css";
const Navbar = ({ filterItem, menuCategory }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">

                    {
                        menuCategory.map((currCategory) => {
                            return (
                                <>
                                    <button className="btn-group__item"
                                        onClick={() => filterItem(currCategory)}
                                    >
                                        {currCategory}
                                    </button>
                                </>
                            )
                        })
                    }
                </div>
            </nav>
        </>
    );
}

export default Navbar;