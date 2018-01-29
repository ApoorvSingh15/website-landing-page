import React from 'react';
import { Button , Grid } from 'material-ui';
import Typography from 'material-ui/Typography/Typography';
const Home = () => {
    return(
        <Grid container>
            <Grid item xs={12}>
                <Typography className="contentStyle">
                    Welcome to the Jungle
                </Typography>    
                <hr />
                <Button raised color="primary" className="center"> <i class="material-icons">pets</i> Enter
                </Button>   
            </Grid>    
        </Grid>
    );
}

export default Home;