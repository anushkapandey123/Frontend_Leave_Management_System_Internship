import {date, object, string} from "yup";

export const initialValues = {
    empId: "",
    startDate: "",
    endDate: "",
};



export const formSchema = object({
    empId: string("Enter employee id").required("Employee Id is required"),
    startDate: date("Enter start date").required("Start date is required").min(new Date(), "Cannot enter past date"),
    endDate: date("Enter end date").required("End date is required").min(new Date(), "Cannot enter past date"),
});
