import { AppBar, Toolbar,Box,Typography } from "@mui/material";
import {styled} from '@mui/material/styles'
import Link from 'next/link'

const Header = styled(AppBar)`
     background:#000
`
const Nav = styled(Box)`
   display:flex;
   margin-inline:auto 10%;
   & > p{
       margin-right:100px;
       cursor:pointer;
   }
`


const Navbar = ()=>{
    const logo ='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Wikipedia-logo-white.svg/2560px-Wikipedia-logo-white.svg.png';
    return (
             <Header position='static'>
                <Toolbar>
                    <img src={logo} alt="logo" style={{height:'20px'}}/>
                    <Nav>
                         <Link href='/'><Typography>Home</Typography></Link>
                         <Link href='/about'><Typography>About</Typography></Link>
                         <Link href='/Contact'><Typography>Contact</Typography></Link>
                    </Nav>

                </Toolbar>
             </Header>
    )
}
export default Navbar;