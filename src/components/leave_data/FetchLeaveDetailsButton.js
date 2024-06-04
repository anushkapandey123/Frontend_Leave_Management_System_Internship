import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { CSVLink } from "react-csv";

const FetchLeaveDetailsButton = () => {
    
    const [csvData, setCsvData] = useState([])
    const handleSubmit =  () => {
        // console.log("inside handle submit")
        // const response = await axios.get("http://localhost:8080/leave_detail");
        // console.log(response)

        axios.get("http://localhost:8080/leave_detail", {
            method: 'GET',
        }).then((response) => {
            setCsvData(response.data)
            console.log(response.data)
        }
        )
    }

    console.log(csvData)

    

    var csvDataFinal = [
        ["Emp Id", "Start Date", "End Date"],
        ...csvData.map(
          ({ empid, startdate, enddate }) => [
            empid,
            startdate,
            enddate,
          ]
        ),
      ];



      console.log(typeof(csvDataFinal))
      console.log(csvDataFinal)

    return (
        
        <Button variant="contained" style={{ marginTop: "25px", marginLeft: "7px"}} onClick={handleSubmit} data={csvDataFinal} filename="my-file.csv">
            <CSVLink
                  filename="my-file.csv"
                  data={csvDataFinal}
                >
           
            Get Leave Details</CSVLink></Button>
    )
}

export default FetchLeaveDetailsButton;