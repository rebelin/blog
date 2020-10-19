import React, {Component} from 'react'

// MUI Imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

class BlogCard extends Component{

    handleClick(){
        console.log("Card Clicked");
        window.location.href = "/blog/someBlogId";
    }
    render(){
        return(
            <Card
                style={{
                    width: "750px",
                    margin: "20px auto",
                    minHeight: 150,
                }}>
                <CardActionArea onClick={this.handleClick}>
                    <Grid container
                        direction ="column"
                        justify="center"
                        spacing={1}
                        style={{ paddingTop: "150px", textAlign: "center"}}>
                        <Grid
                            item
                            style={{
                                padding: "75px",
                                background: "linear-gradient(90deg, #c2e9fb, #81a4fd)",
                                minHeight: 150,
                                textAlign: "left",
                                color: "#FFFFFF"
                            }}
                        >
                            <Typography variant="h2">{this.props.blog.title}</Typography>
                        </Grid>
                        <Grid
                            item
                            style={{
                                paddingLeft: "30px",
                                paddingTop: "10px",
                                color: "#3D0D95",
                            }}>
                            <Typography variant="h5">Name</Typography>
                        </Grid>
                        <Grid
                            item
                            style={{
                                paddingLeft: "30px",
                                paddingTop: "10px",
                                color: "#3D0D95",
                            }}>
                            <Typography variant="h6">Time</Typography>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        )
    }
}

export default BlogCard
