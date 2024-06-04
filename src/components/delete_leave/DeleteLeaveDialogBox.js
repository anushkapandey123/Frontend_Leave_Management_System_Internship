import { Alert, Button, Dialog, DialogContent, Snackbar, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import FormikTextField from "../formik/FormikTextField";
import axios from "axios";
import { formSchema, initialValues } from "./services/DeleteLeaveFormService";
import styles from "./styles/DeleteLeaveStyles"


const DeleteLeaveDialogBox = ({open, onClose}) => {

    const [success, setSuccess] = useState(null)
    const classes = styles();

    const handleSubmit = async (values) => {
        console.log("inside handle submit")
        values.empId = Number(values.empId)
        values.startDate = (values.startDate).replaceAll("/", "-")
        values.endDate = (values.endDate).replaceAll("/", "-")
        console.log(values)

        try {

            const response = await axios.post("http://localhost:8080/delete", values);
            console.log(response)
            setSuccess(true)

        } catch(err) {
            console.log('inside catch')
            setSuccess(false)
        

            // console.log("inside finally")
        } finally {
        

        
        onClose()
        }

    }
    

    return (
      <>

    <Dialog open={open} onClose={onClose}>
        <Typography variant="h6" className={classes.dialogHeader}>
                    Enter Leave Details
        </Typography>
        <Formik initialValues={initialValues}
        validationSchema={formSchema}
        validateOnChange={true}

        onSubmit={handleSubmit}
        > 
        
        {

            () => {
                return (
                    <Form>
                        <DialogContent className={classes.dialogContent}>
                            <FormikTextField
                            required
                            margin="dense"
                            inputProps={{"data-testid": "empId"}}
                            name="empId"
                            label="Employee Id"
                            fullWidth
                            autoComplete="off"
                            />

                            <FormikTextField
                            required
                            margin="dense"
                            inputProps={{"data-testid": "startDate"}}
                            name="startDate"
                            label="Start date"
                            />
                            

                            <FormikTextField
                            required
                            margin="dense"
                            inputProps={{"data-testid": "endDate"}}
                            name="endDate"
                            label="End date"
                            fullWidth
                            autoComplete="off"
                            />

                            <Button variant="contained" type="submit">Submit</Button>



                            
                        </DialogContent>
                    </Form>
                )
            }
            
        }

        </Formik>

    </Dialog>

    <Snackbar open={success === true}  autoHideDuration={2000} onClose={() => setSuccess(null)}>
                <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
                    Leave Successfully Deleted
                </Alert>
            </Snackbar>

            <Snackbar open={success === false}  autoHideDuration={2000} onClose={() => setSuccess(null)}>
                <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
                    Failure in deleting leave
                </Alert>
        </Snackbar>
    </>  
    
    )

}

export default DeleteLeaveDialogBox;