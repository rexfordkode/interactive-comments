import * as React from "react";
import Button from '@material-ui/core/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { createTheme, ThemeProvider } from "@mui/material/styles";
impo

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff"
    }
  }
});
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function Dialog() {
  return (
      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <Delete>

        </Delete>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        ></DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ThemeProvider theme={theme}>
            <Button onClick={handleClose} color="neutral" variant="contained">
              NO, CANCEL
            </Button>
            <Button onClick={handleClose} variant="contained" color="error">
              YES, DELETE
            </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Dialog;
