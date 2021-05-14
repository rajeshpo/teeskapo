import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import styles from '../styles.css'
import { dark } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({ data :{ confirmed,recovered,deaths,lastUpdate}}) {
    
    
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  if(!confirmed){
    return <h5 style={{textAlign:'center'}}>Loading......</h5>
}
let w = window.innerWidth;

  return (
       <div>
         {w<768?(<div className="row"> 
      <div className="col-12 mb-3"> 
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h6 className="text-success">Go corona</h6>
        </Typography>
        <Typography variant="h5" component="h2">
           <h5>Total Confirmed Cases in India</h5>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <h4 className="text-warning"><CountUp start={0} end={confirmed.value} duration={4} separator=","/></h4>
        </Typography>                 
        <Typography variant="body2" component="p">
         
          <br />
        <a href="https://www.google.com/search?q=latest+news+on+corona&rlz=1C1GCEU_enIN909IN910&oq=latest+news+on+corona&aqs=chrome..69i57j0i131i433i457j0i402j0i131i433l3j0j0i131i433j0j0i131i433.5189j0j7&sourceid=chrome&ie=UTF-8">Latest news on corona</a>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    <div className="col-12 mb-3"> 
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h6 className="text-success">Go corona</h6>
        </Typography>
        <Typography variant="h5" component="h2">
           <h5>Total Recovered Cases in India</h5>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <h4 className="text-warning"><CountUp start={0} end={recovered.value} duration={4} separator=","/></h4>
        </Typography>                 
        <Typography variant="body2" component="p">
       
          <br />
        <a href="https://www.google.com/search?q=latest+news+on+corona&rlz=1C1GCEU_enIN909IN910&oq=latest+news+on+corona&aqs=chrome..69i57j0i131i433i457j0i402j0i131i433l3j0j0i131i433j0j0i131i433.5189j0j7&sourceid=chrome&ie=UTF-8">Latest news on corona</a>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    <div className="col-12"> 
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h6 className="text-success">Go corona</h6>
        </Typography>
        <Typography variant="h5" component="h2">
           <h5>Total Death Cases in India</h5>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <h4 className="text-warning"><CountUp start={0} end={deaths.value} duration={4} separator=","/></h4>
        </Typography>                 
        <Typography variant="body2" component="p">
         
          <br />
        <a href="https://www.google.com/search?q=latest+news+on+corona&rlz=1C1GCEU_enIN909IN910&oq=latest+news+on+corona&aqs=chrome..69i57j0i131i433i457j0i402j0i131i433l3j0j0i131i433j0j0i131i433.5189j0j7&sourceid=chrome&ie=UTF-8">Latest news on corona</a>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
     
    </div>):(<div className="row"> 
      <div className="col-6"> 
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h6 className="text-success">Go corona</h6>
        </Typography>
        <Typography variant="h5" component="h2">
           <h5>Total Confirmed Cases in India</h5>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <h4 className="text-warning"><CountUp start={0} end={confirmed.value} duration={4} separator=","/></h4>
        </Typography>                 
        <Typography variant="body2" component="p">
         
          <br />
        <a href="https://www.google.com/search?q=latest+news+on+corona&rlz=1C1GCEU_enIN909IN910&oq=latest+news+on+corona&aqs=chrome..69i57j0i131i433i457j0i402j0i131i433l3j0j0i131i433j0j0i131i433.5189j0j7&sourceid=chrome&ie=UTF-8">Latest news on corona</a>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    <div className="col-6"> 
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h6 className="text-success">Go corona</h6>
        </Typography>
        <Typography variant="h5" component="h2">
           <h5>Total Recovered Cases in India</h5>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <h4 className="text-warning"><CountUp start={0} end={recovered.value} duration={4} separator=","/></h4>
        </Typography>                 
        <Typography variant="body2" component="p">
       
          <br />
        <a href="https://www.google.com/search?q=latest+news+on+corona&rlz=1C1GCEU_enIN909IN910&oq=latest+news+on+corona&aqs=chrome..69i57j0i131i433i457j0i402j0i131i433l3j0j0i131i433j0j0i131i433.5189j0j7&sourceid=chrome&ie=UTF-8">Latest news on corona</a>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    <div className="cart"> 
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h6 className="text-success">Go corona</h6>
        </Typography>
        <Typography variant="h5" component="h2">
           <h5>Total Death Cases in India</h5>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <h4 className="text-warning"><CountUp start={0} end={deaths.value} duration={4} separator=","/></h4>
        </Typography>                 
        <Typography variant="body2" component="p">
         
          <br />
        <a href="https://www.google.com/search?q=latest+news+on+corona&rlz=1C1GCEU_enIN909IN910&oq=latest+news+on+corona&aqs=chrome..69i57j0i131i433i457j0i402j0i131i433l3j0j0i131i433j0j0i131i433.5189j0j7&sourceid=chrome&ie=UTF-8">Latest news on corona</a>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
     
    </div>)}
       </div>
  );
}
