import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        dialogHeader: {
            padding: "10px 20px 0px 20px",
            fontWeight: "bolder",
            display: "flex",
            justifyContent: "center",

        },
        dialogContent: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            "&:first-child": {
                padding: "5px 20px"
            }
        }
    })
);
