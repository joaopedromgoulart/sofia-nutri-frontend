import * as React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';


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


interface GridIconProps {
  specializationName: string;
  imagePath: string;
  handleClick?: (event: React.MouseEvent) => void;
}

const GridIcon = ({ imagePath, specializationName, handleClick }: GridIconProps ) => {
  return (
    <Grid item  lg={3} md={3} sm={10} key={ specializationName }>
      <img id={ specializationName } className="tipo-atendimento" src={imagePath} onClick={handleClick}/>
    </Grid>
  )
}

interface SpecializationGridProps {
  specializationSetter: (event: React.MouseEvent) => void;
}

const SpecilizationGrid = ( {specializationSetter}: SpecializationGridProps) => {
  return (
    <div style={{paddingBottom: "20px"}}>
      <Grid justifyContent="space-evenly" alignItems="stretch" container spacing={2} direction={"row"}>
      {
        Object.keys(specializations).map((key: string) => (
        <GridIcon
          imagePath={specializations[key].image}
          specializationName={ key }
          handleClick={specializationSetter}
        />
        ))
      }
      </Grid>
    </div>
  )
}

interface SpecializationDetailsProps {
  specializationName: string | null | undefined;
}

const SpecializationDetails = ({ specializationName }: SpecializationDetailsProps) => {
  if ( specializationName ) {
    return (
      <div id="specialization-details" style={{paddingBottom: "20px"}}>
      <Typography id="specialization-description" variant="h6">{specializations[specializationName].about}</Typography>
      </div>
    )
  }
}

const SpecializationSection = () => {

  const [selectedSpecialization, setSelectedSpecialization] = React.useState("");
  const handleSpecializationSelection = (event: React.MouseEvent) => {
    let newSepecialization = event.currentTarget.id;
    if (newSepecialization == selectedSpecialization) {
      setSelectedSpecialization("");
    } else {
      setSelectedSpecialization(event.currentTarget.id);
    }
  };

  return (
    <Container sx={{
    backgroundImage: `url(./src/assets/home/transition1.svg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    }}>
      <SpecilizationGrid specializationSetter={handleSpecializationSelection}/>
      <SpecializationDetails specializationName={selectedSpecialization} />
    </Container>
  )
}

export default SpecializationSection