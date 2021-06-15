import {Grid,Paper,Avatar}from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import MailIcon from '@material-ui/icons/Mail';
import {React} from 'react'
import MainComponent from '../mainComponent'

const Profile=()=>{
const paperStyle={padding:40,height:'60vh',width:270,margin:"20px auto",background:'grey'}
// const btnStyle={margin:'6px 0'}
return(
    <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar fontsize={60} icon="user" />
            </Grid>
            console.log(setproInfo)
            <h5>1 Followers </h5>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            }}>
        <LocationOnOutlinedIcon />
        <div>Taiwan</div>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            }}>
        <CakeOutlinedIcon/>
        <div>2021/06/16</div>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            }}>
        <MailIcon/>
        </div>
    </Paper>
    </Grid>  
)
}
export default Profile