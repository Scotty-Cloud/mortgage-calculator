import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const LoanSelect = ({ data, setData }) => {

    const handleChange = (event) => {
      setData({...data, loanTerm: event.target.value});
    };

  return(   
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Loan Plan</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={data.loanTerm}
      label="Loan Plan"
      defaultValue={5}
      onChange={handleChange}
    >
      <MenuItem value={15}>15 years</MenuItem>
      <MenuItem value={20}>20 years</MenuItem>
      <MenuItem value={30}>30 years</MenuItem>
    </Select>
  </FormControl>
   );
  };
  
export default LoanSelect;