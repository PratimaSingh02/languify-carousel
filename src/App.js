import './App.css';
import { Card,CardMedia,CardContent,makeStyles, Typography } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import Content from './Content'
import data from './data'
import sphere from './sphere.png'
import prev from './prev.png'
import next from './next.png'

const useStyle=makeStyles(theme=>({
  card:{
    height:'auto',
    width:1084,
    margin:'0 auto',
    cursor:'pointer',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    border:'none',
    borderRadius:7,
    backgroundColor:'#F4F5F5',
    boxShadow: '0px 15px 10px -15px #D3D3D3',    
    [theme.breakpoints.down("md")] : {
      // maxHeight:400,
      maxWidth:  600
      },
    [theme.breakpoints.down("xs")] : {
        maxWidth:  300
    }
},
button:{
  [theme.breakpoints.down("md")] : {
    width:30
    },
  [theme.breakpoints.down("xs")] : {
      width:  10
  }
}
}))

function App() {
  const classes=useStyle()
  return (
    <div className="App">
      <img src={sphere} className='sphere1'/>
      <img src={sphere} className='sphere2'/>
      <img src={sphere} className='sphere3'/>
      <img src={sphere} className='sphere4'/>
      <img src={sphere} className='sphere5'/>
      <div className='first'></div>
      <div className='second'></div>

      <Carousel
        autoPlay={false}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style:{
              background:'transparent',
              color:'#494949',
              borderRadius:3,
              margin:0,
              height:100,
              marginTop:-70,
          }
        }}
        NextIcon={<img src={next} className={classes.button}/>}             // Change the "inside" of the next button to "next"
        PrevIcon={<img src={prev} className={classes.button}/>}
        className={classes.card}>
          {
            data.map(item=>{
              return <Content/>
            })
          }
        </Carousel>
    </div>
  );
}

export default App;
