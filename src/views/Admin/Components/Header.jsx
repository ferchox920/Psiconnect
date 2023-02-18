import { Typography, Box  } from "@mui/material";

const Header = ({ title, subtitle }) => {

  return (
    <Box mb="30px" ml='40px'>
      <Typography
        variant="h2"
        color={'#323030'}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={"#323030"}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;