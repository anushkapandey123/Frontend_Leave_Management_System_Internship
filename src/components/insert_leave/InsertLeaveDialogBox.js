import { Alert, Box, Button, Dialog, DialogContent, InputLabel, MenuItem, Select, Snackbar, TextField, Typography } from "@mui/material";
import { Field, Form, Formik, useField} from "formik";
import React, { useState } from "react";
import styles from "./styles/InsertLeaveStyles"
import { formSchema, initialValues } from "./services/InsertLeaveFormService";
import FormikTextField from "../formik/FormikTextField";
import InsertLeaveService from "./services/InsertLeaveService";
import axios from "axios";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import {Form, Formik} from "formik";

const InsertLeaveDialogBox = ({open, onClose}) => {
    const [success, setSuccess] = useState(null)
    const classes = styles();
    const [date, setDate] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [leaveType, setLeaveType] = useState("");

    const handleSubmit = async (values) => {
        console.log("inside handle submit")
        values.empId = Number(values.empId)
        values.startDate = date;
        values.endDate = dateEnd;
        
        values.startDate = (values.startDate).toISOString().split('T')[0]
        values.endDate = (values.endDate).toISOString().split('T')[0]
        values.startDate = (values.startDate).replaceAll("/", "-")
        values.endDate = (values.endDate).replaceAll("/", "-")
        values.leaveType = leaveType

        
        console.log(values.startDate)
        console.log(values)

        try {

            const response = await axios.post("http://localhost:8080/insert", values);
            console.log(response)
            setSuccess(true)

        } catch(err) {
            console.log('inside catch')
            setSuccess(false)

        } finally {
        

        
        onClose()
        }

    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setLeaveType(event.target.value)
        
    }
    

    return (
      <>

    <Dialog open={open} onClose={onClose}>
        <Typography variant="h6" style={{font: "bold" }}className={classes.dialogHeader}>
                    Submit your leave application
        </Typography>
        
        <Formik initialValues={initialValues}
        // validationSchema={formSchema}
        // validateOnChange={true} 
        // <Formik

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





                            {/* <FormikTextField
                            required
                            margin="dense"
                            inputProps={{"data-testid": "startDate"}}
                            name="startDate"
                            label="Start date"
                            />
                             */}

<InputLabel id="demo-simple-select-label">Leave Type</InputLabel>

<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={leaveType}
          label="Leave Type"
          onChange={handleChange}
        >
          <MenuItem value={"paid"}>Paid</MenuItem>
          <MenuItem value={"casual"}>Casual</MenuItem>
          
        </Select>





                            <div style={{ marginTop: "25px"}}>
                             <LocalizationProvider dateAdapter={AdapterDayjs}>
                             <DatePicker selected={date} onChange={(date) => setDate(date)} label="Enter start date"/>
                             </LocalizationProvider>
                             </div>

                            {/* <FormikTextField
                            required
                            margin="dense"
                            inputProps={{"data-testid": "endDate"}}
                            name="endDate"
                            label="End date"
                            fullWidth
                            autoComplete="off"
                            /> */}

                        
                        <div style={{ marginTop: "25px"}}> 
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                             <DatePicker selected={dateEnd} onChange={(dateEnd) => setDateEnd(dateEnd)} label="Enter end date"/>
                             </LocalizationProvider>
                        </div>

                        {/* <label style={{marginTop: "15px"}}>
                            Select Leave type
                             <select>
                                <option value="someOption">Paid Leave</option>
                                <option value="otherOption">Unpaid Leave</option>
                            </select>

                        </label> */}

                             
                        
                            <Button variant="contained" type="submit" style={{marginTop: "7px", marginBottom: "5px", backgroundColor: "#8B0000"}}>Submit</Button>
                        



                            
                        </DialogContent>
                    </Form>

                )
            }
            
        }

        </Formik>

    </Dialog>

    <Snackbar open={success === true}  autoHideDuration={2000} onClose={() => setSuccess(null)}>
                <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
                    Leave Recorded
                </Alert>
            </Snackbar>

            <Snackbar open={success === false}  autoHideDuration={2000} onClose={() => setSuccess(null)}>
                <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
                    Failure in recording leave
                </Alert>
        </Snackbar>

    

    
    </>  
    
    )

}

export default InsertLeaveDialogBox;