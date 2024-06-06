import { Box } from '@mui/material'

import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import SpecializationSection from '../../components/home/SpecializationSection';
import AboutSection from '../../components/home/AboutSection';




export default function Home() {
  const theme = useTheme();
  return (
    <div id='home-container'style={{ backgroundColor: theme.palette.secondary.main }}>
      <AboutSection />
      <SpecializationSection />
    </div>
  );
}


// const BlogIntroductionSection = () => {
//   return (
//     <div id="blog-header">
//       <Typography variant="h2">Blog da Sofi</Typography>
//       <Typography variant="h6" paddingInline={"15%"} paddingBlockEnd={"10px"}>
//       A nutrição é essencial para uma vida saudável e equilibrada, explore dicas e 
//       estratégias para melhorar sua alimentação e bem-estar geral.``
//       </Typography>
//     </div>
//   )

// }

// const FooterSection = () => {
//   return (
//     <Box id="footer">
//       <Typography variant="h4">MY FUKING FOOTER</Typography>
//     </Box>
//   )
// }