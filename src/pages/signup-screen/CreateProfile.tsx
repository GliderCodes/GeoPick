import * as React from "react";
import "./styles.scss";
import TextField from "../../components/Inputs/TextField";
import Card from "../../components/Layouts/Card";
import { Grid, Typography } from "@material-ui/core";
import { RegularBtn } from "../../components/Buttons/RegularBtn";

export default class CreateProfile extends React.Component {
  public render(): JSX.Element {
    return (
      <html>
        <body>
          <div className="Create-Profile-Page">
            <Card title="Create Profile" split={1}>
              <Grid
                container
                spacing={4}
                direction="row"
                alignItems="center"
                justify="center"
              >
                <form>
                  <Grid
                    item
                    container
                    spacing={3}
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item style={{ width: "100%" }}>
                      <TextField
                        required
                        className="textField"
                        placeholder="Enter username"
                        type="text"
                        id="username-input-required"
                      />
                    </Grid>
                    <Grid item style={{ width: "100%" }}>
                      <TextField
                        className="textField"
                        placeholder="Enter occupation (optional)"
                        type="text"
                        id="occupation-input-optional"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={10}
                      alignContent="center"
                      alignItems="center"
                      style={{ paddingTop: "20px", verticalAlign: "true" }}
                    >
                      <Typography
                        align="left"
                        style={{ fontSize: "14px", color: "black" }}
                      >
                        *Other users will be able to view your username and
                        display picture as set above
                      </Typography>
                    </Grid>
                  </Grid>
                  <br></br>
                  <Grid
                    item
                    xs={12}
                    alignItems="center"
                    justify="center"
                    style={{ textAlign: "center" }}
                  >
                    <RegularBtn
                      type="submit"
                      colorType="white"
                      style={{ width: "80%", borderRadius: "15px" }}
                    >
                      Complete Registration
                    </RegularBtn>
                  </Grid>
                </form>
              </Grid>
            </Card>
          </div>
        </body>
      </html>
    );
  }
}
