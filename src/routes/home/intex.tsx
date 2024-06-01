import * as React from "react";
import { Box } from '@mui/material'
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

import Typography from '@mui/material/Typography';

const AboutSection = () => {
  return (
  <Grid id="about-section" container spacing={5} direction={"row"} >
    <Grid item xs={6}>
      <h1>Transforme sua vida com Nutrição</h1>
      <h3>Alcance seus Objetivos de Saúde com Planos Nutricionais Personalizados e Acompanhamento Especializado</h3>
      <button id="appointment-button" >Agende sua Consulta</button>
    </Grid>
    <Grid item xs={6}>
      <img src="./src/assets/home/fotomozao.png"></img>
    </Grid>
  </Grid>
  )
}


const SpecializationSection = () => {
  return (
  <Grid id="specialization-section" justifyContent="space-evenly" alignItems="stretch" container spacing={2} direction={"row"}>
    <Grid item xs={3} >
      <img className="tipo-atendimento" src="./src/assets/home/saude-mulher.svg"></img>
    </Grid>
    <Grid item xs={3}>
      <img className="tipo-atendimento "src="./src/assets/home/nutricao-esportiva.svg"></img>
    </Grid>
    <Grid item xs={3}>
      <img className="tipo-atendimento" src="./src/assets/home/longevidade.svg"></img>
    </Grid>
  </Grid>
  )
}

const BlogIntroductionSection = () => {
  return (
    <div id="blog-header">
      <Typography variant="h2">Blog da Sofi</Typography>
      <Typography variant="h6" paddingInline={"15%"} paddingBlockEnd={"10px"}>
      A nutrição é essencial para uma vida saudável e equilibrada, explore dicas e 
      estratégias para melhorar sua alimentação e bem-estar geral.
      </Typography>
    </div>
  )

}

export default function Home() {
  return (
    <Box className="home-page">
      <AboutSection />
      <SpecializationSection />
      <BlogIntroductionSection />
      <div id="green-section">
        <Grid id="blog-transition" justifyContent="space-evenly" alignItems="stretch" container spacing={2} direction={"row"}>
          <Grid item xs={3}>
            <img className="tipo-atendimento"src="./src/assets/home/receitas.svg"></img>
          </Grid>
          <Grid item xs={3}>
            <img className="tipo-atendimento"src="./src/assets/home/variacoes.svg"></img>
          </Grid>
        </Grid>
        <Box textAlign={"center"} paddingBlock={"40px"}>
          <Typography variant="h4">Feedbacks</Typography>
          <Typography variant="h6" paddingInline={"15%"}>Fui muito bem atendido pela Dra. Sofia, que elaborou um plano alimentar personalizado e viável. Recomendo seu serviço pela atenção e profissionalismo exemplares..</Typography>
        </Box>
      </div>
      <Box id="footer">
          <Typography variant="h4">MY FUKING FOOTER</Typography>
      </Box>
    </Box>
  );
}