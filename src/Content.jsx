import { Card,CardMedia,CardContent,makeStyles, Typography } from '@material-ui/core'

const useStyle=makeStyles(theme=>({
  media:{
    width:'100%',
    height:351,
    backgroundColor:'#DEE0E1',
    borderRadius:7,
    [theme.breakpoints.down("md")] : {
      maxHeight:200,
    },
  },
  content:{
    height:260,
    width:'100%',
    padding:'1em 2em',
    backgroundColor:'#F4F5F5',
    [theme.breakpoints.down("md")] : {
      height:200,
    },
    [theme.breakpoints.down("xs")] : {
      height:350,
    },
  },
  heading:{
      fontWeight:700,
      fontSize:48,
      [theme.breakpoints.down("md")] : {
        fontSize:24
        },
  },
  subheading:{
      fontSize:24,
      [theme.breakpoints.down("md")] : {
        fontSize:16
        },
  }
}))

function Content() {
  const classes=useStyle()

  return (
          <>
              <CardMedia
                  className={classes.media}/>
                <CardContent className={classes.content}>
                    <Typography variant='h4' className={classes.heading}>Lorem ipsum dolor sit amet</Typography>
                    <Typography className={classes.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ridiculus nibh sed pellentesque netus nibh vel dolor. Dictum non ipsum a tristique dui ullamcorper. Dui laoreet est neque, netus lectus tortor pellentesque ullamcorper. Pulvinar sit eu pulvinar duis viverra massa purus aliquet. A.</Typography>
                </CardContent>
            
          </>
  );
}

export default Content;
