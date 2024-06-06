import { Box } from '@mui/material'
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import {Button} from "@mui/material";

import Typography from '@mui/material/Typography';

const AboutDescription = () => {
    return (
      <div style={{textAlign: "center"}}>
        <Typography display="block" variant="h2" color="textSecondary" paddingBottom="20px">Transforme sua vida com nutrição</Typography>
        <Typography display="block" variant="h6" color="textSecondary" paddingBottom="20px">Alcance seus Objetivos de Saúde com Planos Nutricionais Personalizados e Acompanhamento Especializado.</Typography>
        <Button id="appointment-button">Agende sua Consulta</Button>
      </div>
    )
  }
  
  const AboutImage = () => {
    return (
      <Box
      component="img"
      src="./src/assets/home/fotomozao.png"
      minWidth="300px"
      width="30%"/>
    )
  }
  
  const AboutSection = () => {
    return (
      <Container sx={{paddingBottom: "20px"}}>
        <Grid container direction="row" spacing={8} wrap={"wrap"}>
          <Grid item lg={6} md={6} sm={12}>
            <AboutDescription />
          </Grid>
          <Grid item lg={6} md={6} sm={12} textAlign={"center"}>
            <AboutImage />
          </Grid>
        </Grid>
      </Container>
    )
  }

export default AboutSection;