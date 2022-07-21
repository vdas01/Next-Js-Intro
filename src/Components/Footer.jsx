import {Box,Typography} from '@mui/material'
import {styled} from '@mui/material/styles'
const footerSection = styled(Box)`
   background:#000;
   padding:5px;
`
const Footer = ()=>{
    return (
        <>
        <footerSection>
        <Typography>Made by @Vishal2022</Typography>
        </footerSection>

        </>
           
    )
}
export default Footer;