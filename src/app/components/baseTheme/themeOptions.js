import { red } from "@mui/material/colors";
import { components } from "./components";
import { typography } from "app/utils/constant";
 
 
const themeOptions = {
    typography: {
       ...typography
    },
 
    status: { danger: red[500] },
    components: {...components}
}
 
export default themeOptions;