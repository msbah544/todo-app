function Header() {

    function handleClick() {
        console.log("hello there");
    }

    return (
        <div class="header">
            <div class="title">
                TODO
            </div>
            <div class="theme" onClick={handleClick}>
                <img src="./icons/icon-sun.svg" alt="" />
            </div>
        </div>
    );
}

export default Header;