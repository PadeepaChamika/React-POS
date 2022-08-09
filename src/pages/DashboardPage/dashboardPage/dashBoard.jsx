import React, {Component} from "react";
import Grid from "@mui/material/Grid";
import {withStyles} from "@mui/styles";
import GDSEButton from "../../../component/common/Button/button";
import {Typography} from "@mui/material";
import ResponsiveAppBar from "../../../component/common/appBar/appBarIndex";



class DashBoardPage extends Component{

    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return(

            <Grid style={{width:"100vw",height:'100vh'}}>

                <ResponsiveAppBar/>


                <Grid style={{display:"flex",justifyContent:"space-between",flexDirection:"row",width:'80vw',marginTop:"20vh",marginLeft:"10vw"}}>

                    <Grid style={{backgroundColor:"black",height:'15vw',width:"24vw",display:"flex",flexDirection:'column'}}>

                        <Grid style={{width:'24vw',height:"10vh",backgroundColor:"gray",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Grid style={{margin:"2vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                                <Typography style={{fontSize:"50px",color:"#afe3f1"}}>Product</Typography>
                            </Grid>
                        </Grid>


                        <Grid style={{margin:"3vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography style={{fontSize:"60px",color:"#afe3f1"}}>20</Typography>
                        </Grid>


                    </Grid>

                    <Grid style={{backgroundColor:"black",height:'15vw',width:"24vw",display:"flex",flexDirection:'column'}}>
                        <Grid style={{width:'24vw',height:"10vh",backgroundColor:"gray",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Grid style={{margin:"2vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                                <Typography style={{fontSize:"50px",color:"#afe3f1"}}>Cart</Typography>
                            </Grid>
                        </Grid>

                        <Grid style={{margin:"3vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography style={{fontSize:"60px",color:"#afe3f1"}}>20</Typography>
                        </Grid>
                    </Grid>



                    <Grid style={{backgroundColor:"black",height:'15vw',width:"24vw",display:"flex",flexDirection:'column'}}>
                        <Grid style={{width:'24vw',height:"10vh",backgroundColor:"gray",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Grid style={{margin:"2vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                                <Typography style={{fontSize:"50px",color:"#afe3f1"}}>Users</Typography>
                            </Grid>
                        </Grid>

                        <Grid style={{margin:"3vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography style={{fontSize:"60px",color:"#afe3f1"}}>20</Typography>
                        </Grid>
                    </Grid>

                </Grid>





            </Grid>

        )
    }
}
export default DashBoardPage
