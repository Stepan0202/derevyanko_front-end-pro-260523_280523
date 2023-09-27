import Button from 'react-bootstrap/Button';
 function Header(props){
    return (
        <header className="header">
            <div className="header__logo">LOGO<br/>GOGO</div>
            <div className="header__menu">
            </div>
            <div className="header__buttons">
            <a href="/"><Button className="btn" variant="primary" onClick={props.setPage}>MAIN PAGE</Button></a>
            <a href="/addingUser"> <Button className="btn" variant="primary" id="addUser" onClick={props.setPage}>ADD USER</Button></a>
            </div>
        </header>

    )
 }
 export default Header;