import * as React from "react";
import { Box } from '@mui/material'
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';


const specializations = {
  saudeDaMulher: {
    image: "./src/assets/home/saude-mulher.svg",
    about: "Some text about saude da mulher"
  },
  NutricaoEsportiva: {
    image: "./src/assets/home/nutricao-esportiva.svg",
    about: "Texto sobre nutricao esportiva"
  },
  Longevidade: {
    image: "./src/assets/home/longevidade.svg",
    about: "Texto sobre Longevidade"
  }
}

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

interface SpecializationDetailsProps {
  text: string
}

const SpecializationDetails = ({ text }: SpecializationDetailsProps) => {
  if ( text ) {
    return (
      <Container id="specialization-details">
        <Typography id="specialization-description" variant="h6">{text}</Typography>
      </Container>
    )
  }
}

interface GridIconProps {
  specializationName: string;
  imagePath: string;
  handleClick?: (event: React.MouseEvent) => void;
}

const GridIcon = ( {imagePath, specializationName, handleClick}: GridIconProps) => {
  return (
    <Grid item xs={3} className="grid-icon" key={ specializationName }>
      <img id={ specializationName } className="tipo-atendimento" src={imagePath}  onClick={handleClick} />
    </Grid>
  )
}

const SpecializationSection = () => {

  const [selectedSpecialization, setSelectedSpecialization] = React.useState(null);

  const handleSpecializationSelection = (event: React.MouseEvent) => {
    if (selectedSpecialization != null && selectedSpecialization === specializations[event.target.id].about) {
      setSelectedSpecialization(null);
      return;
    }
    
    setSelectedSpecialization(specializations[event.target.id].about);
  }

  return (
    <React.Fragment>
      <Grid id="specialization-section" justifyContent="space-evenly" alignItems="stretch" container spacing={2} direction={"row"}>
      {
          Object.keys(specializations).map((key: string) => (
            <GridIcon
            imagePath={specializations[key].image}
            specializationName={ key }
            handleClick={handleSpecializationSelection}/>
          ))
        }
      </Grid>
      <Collapse in={selectedSpecialization != null}  collapsedSize={0}>
        <SpecializationDetails text={selectedSpecialization} />
      </Collapse>
  </React.Fragment>
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

const FooterSection = () => {
  return (
    <Box id="footer">
      <Typography variant="h4">MY FUKING FOOTER</Typography>
    </Box>
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
      <FooterSection />

    </Box>
  );
}
