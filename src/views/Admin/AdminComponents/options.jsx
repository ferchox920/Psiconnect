import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../thema";

export default function Options({ name, array, setState, state }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const click = (e) => {
    setState({
      ...state,
      [name]: state[name].filter((t) => t !== e.target.id),
    });
  };
  return (
    <Box width="33%" justifyContent="center" flexWrap="nowrap">
      <Typography
        variant="h4"
        color={colors.greenAccent[400]}
        display="flex"
        flexWrap="wrap"
        marginBottom="10px"
        justifyContent="center"
      >
        {name.toUpperCase()}
      </Typography>
      {array.map((e) => (
        <Box display="flex" key={e} justifyContent="center">
          <Box
            onClick={click}
            key={e}
            id={e}
            display="flex"
            borderRadius="10px"
            color={colors.primary[100]}
            justifyContent="center"
            sx={{
              width: 200,
              cursor: "pointer",
              // height: 300,
              padding: 1,
              margin: 1,
              backgroundColor: "primary.dark",
            }}
          >
            {e.toUpperCase()}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
