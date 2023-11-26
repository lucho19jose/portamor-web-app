import { Box, Button, Container, Link, Typography } from "@mui/material";
import {
  Banner,
  FormRegister,
  OurAccomplishments,
  OurAdvantages,
  OurBenefits,
  OurMemberShips,
  OurPrograms,
} from "@src/components/Home";
import Head from "next/head";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Layout from "@src/components/layout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portamor - Envejecimiento activo</title>
        <meta name='description' content='Portamor - Envejecimiento activo' />
        <link rel='icon' href='/favicon2.ico' />
        {/* Add SEO meta tags */}
        <meta name='keywords' content='Portamor, envejecimiento activo, salud física, salud mental, salud social' />
        <meta name='author' content='portamor team' />
        <meta name='robots' content='index, follow' />
        {/* Add Open Graph meta tags */}
        <meta property='og:title' content='Portamor - Envejecimiento activo' />
        <meta property='og:description' content='Portamor es una comunidad comprometida con el bienestar integral de quienes comparten la experiencia del envejecimiento.' />
        <meta property='og:image' content='/logo.png' />
        <meta property='og:url' content='https://www.portamor.com' />
        <meta property='og:type' content='website' />
        {/* Add Twitter Card meta tags */}
        <meta name='twitter:card' content='/logo.png' />
        <meta name='twitter:title' content='Portamor - Envejecimiento activo' />
        <meta name='twitter:description' content='Portamor es una comunidad comprometida con el bienestar integral de quienes comparten la experiencia del envejecimiento.' />
        <meta name='twitter:image' content='/logo.png' />
        {/* Add more Open Graph meta tags */}
        <meta property='og:locale' content='es_pe' />
        <meta property='og:site_name' content='Portamor' />
      </Head>
      <Banner />
      <Container maxWidth='lg'>
        <Box mb={4}>
          <Typography
            variant='h4'
            component='h2'
            fontWeight={(theme) => theme.typography.fontWeightBold}
            textAlign='center'
            mb={3}
          >
            Propósito{" "}
            <Typography
              variant='inherit'
              component='span'
              color={(theme) => theme.palette.primary.main}
            >
              Portamor
            </Typography>
          </Typography>
          <Box display='flex' justifyContent='center' alignItems='end'>
            <Typography variant='body2' mr={2} width='calc(100% - 200px)'>
              Empoderar a más adultos mayores hacia un envejecimiento activo y
              saludable para fortalecer la salud física, mental y social que
              venimos compartiendo y construyendo con nuestra comunidad
              portamor.
              <br />
              <Link
                href='#'
                underline='hover'
                color='primary'
                mt={1}
                display='inline-block'
              >
                Ver video
              </Link>
            </Typography>
            <Button variant='outlined' endIcon={<ArrowForwardIcon />}>
              Conocer más
            </Button>
          </Box>
        </Box>
        <OurPrograms />
        <OurBenefits />
        <OurAdvantages />
        <OurMemberShips />
        <FormRegister />
        <OurAccomplishments />
      </Container>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
