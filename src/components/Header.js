import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Header = (props) => {
    const classes = useStyles();
  return (
    <div>
        <Grid item direction="row" container >
          <Grid item xs="2">
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-native-label-placeholder">
               Filter By branch
              </InputLabel>
              <NativeSelect>
                <option value="">All</option>
                <option value={10}>Colombo</option>
                <option value={20}>Kandy</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs="2">
          <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-native-label-placeholder">
               Filter By Service
              </InputLabel>
              <NativeSelect>
                <option value="">All</option>
                <option value={10}>Dry Cleaning</option>
                <option value={20}>Wash Only</option>
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
    
    </div>
  );
};

export default Header;
