import { Button, Stack, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
const styles={
    serachBar:{
        backgroundColor:"#161616",
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        borderTopRightRadius:0,
      borderBottomRightRadius:0,
        borderColor:"#F0F0F0",
        "& .MuiOutlinedInput-root": {
          color: "white",
          fontFamily: "Arial",
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
            borderTopLeftRadius:25,
            borderBottomLeftRadius:25,
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "#2e2e2e",
            fontWeight: "bold",
            "&.Mui-focused": {
              color: "secondary.main",
              fontWeight: "bold",
            },
          },
        },
    },
    searchButton:{
      backgroundColor:"#2a2a2a",
      borderTopLeftRadius:0,
      borderButtomLeftRadius:0,
      borderTopRightRadius:25,
      borderBottomRightRadius:25,
      padding:1
    }
}
const SearchBar = ()=>{
    return(
        <Stack direction={'row'} alignItems={'center'}>
            <TextField sx={styles.serachBar} size="small"  />
            <Button sx={styles.searchButton} variant="contained">
              <SearchIcon />
            </Button>
        </Stack>
    )
}
export default SearchBar