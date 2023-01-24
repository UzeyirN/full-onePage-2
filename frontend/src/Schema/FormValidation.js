import * as yup from "yup"

export const inputSchema = yup.object().shape({
    image: yup.string("Please enter string value !").required("Enter image url address !"),
    category:yup.string("Please enter string value !").required("Enter category !"),
    brend:yup.string("Please enter string value !").required("Enter brend !"),
    value:yup.number("Please enter number value !").required("Enter value !").min(10,"Enter minimum 5 symbol").positive("Enter positive degree").integer("Enter integer ")
})
