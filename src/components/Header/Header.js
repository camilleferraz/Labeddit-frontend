import logo2 from "../../assets/logo2.svg"
import { HeaderStyle } from "./Header.styled"
import { goToLoginPage } from "../../router/coordinator"
import { useNavigate, useLocation } from "react-router-dom"
import close from "../../assets/close.svg"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function Header() {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const location = useLocation()

   
    const closeModal = ()=>{
        context.setModal(false)
        context.setActionModal("")
        context.setUrlPost('')
    }

    
    const logOut = ()=>{
        context.setModal(false)
        context.setActionModal("")
        localStorage.clear()
        goToLoginPage(navigate)
    }

    return (
        <HeaderStyle>
            <div>
                {context.modal && context.actionModal ==="post" ?
                <img src={close} alt="botão-fechar" onClick={()=>closeModal()}/>
                :
                ''}              
            </div>
            <div>
                <img src={logo2} alt="logo"/>
            </div>
            <div>
                {location.pathname === "/signup"?
                <h2><a onClick={()=>goToLoginPage(navigate)}>Entrar</a></h2>
                :
                <h2><a onClick={()=>logOut()}>Logout</a></h2>
                }
                
            </div>
        </HeaderStyle>
    )
}

export default Header