import styled from "styled-components";



const Header = () => {
    return (
        <Nav> 
            <Logo >
                <img src="/images/logo.svg" alt="logoHeader" />
            </Logo>

            <NavMenu> 
                <a href='/home'>
                    <img src="/images/home-icon.svg" alt="HOME"/>
                    <span> HOME </span>

                </a>
                 </NavMenu>
             </Nav>
    )
}

const NavMenu = styled.div ` 

    align-items : center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;


    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        
        img {
            height: 30px;
            min-width: 30px;
            width: 20px;
            z-index: auto;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 20px;
            padding: 2px 0px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            white-space: nowrap;
            position: relative;
    

        &:before {
            border-radius: 0x 0px 4px 4px;
            bottom: -6px;
             background-color: rgb(249, 249, 249, 249);
            left: 0px;
            content: '';
            height: 2px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            visibility: hidden;
            width: auto;
        }
    }
    


        &:hover {
            span:before {
                transform: scaleX(1);
                visibility : visible;
                opacity: 1 !important;
            }
        }
    }


    `;


const Logo = styled.a `

    width:80px;
    padding:0;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width:100%;
    }
`

const Nav = styled.nav `

    font-size: 30px;
    
    position:fixed;
    top:0;
    left:0;
    right:0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    padding: 0 36px;
    z-index: 3;


    
`


export default Header;