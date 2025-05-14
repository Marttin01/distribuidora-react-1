import { Box, Container, Flex, Grid, Icon, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ReactNode } from 'react';

interface SocialLinkProps {
  icon: typeof FaFacebookF;
  href: string;
  label: string;
}

interface FooterLinkProps {
  children: ReactNode;
  href: string;
}

interface FooterHeadingProps {
  children: ReactNode;
}

const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <Link
    href={href}
    isExternal
    aria-label={label}
    _hover={{ transform: 'translateY(-2px)' }}
    transition="all 0.3s"
  >
    <Icon
      as={icon}
      w={5}
      h={5}
      color="gray.600"
      _hover={{ color: 'blue.500' }}
      transition="all 0.3s"
    />
  </Link>
);

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <Link
    href={href}
    fontSize="sm"
    color="gray.600"
    _hover={{
      color: 'blue.500',
      textDecoration: 'none',
    }}
    transition="all 0.3s"
  >
    {children}
  </Link>
);

const FooterHeading = ({ children }: FooterHeadingProps) => (
  <Text
    fontSize="md"
    fontWeight="bold"
    color="gray.700"
    mb={4}
    textTransform="uppercase"
    letterSpacing="wide"
  >
    {children}
  </Text>
);

const FooterMain = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  ];

  const usefulLinks = [
    { href: '/about', text: 'Acerca de nosotros' },
    { href: '/contact', text: 'Contacto' },
    { href: '/faq', text: 'Preguntas frecuentes' },
    { href: '/privacy', text: 'Política de privacidad' },
    { href: '/terms', text: 'Términos y condiciones' },
  ];

  return (
    <Box
      as="footer"
      bg="gray.50"
      borderTop="1px"
      borderColor="gray.200"
      py={12}
      mt={16}
    >
      <Container maxW="container.xl">
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(3, 1fr)',
          }}
          gap={8}
        >
          {/* Company Info */}
          <VStack align="flex-start" spacing={4}>
            <FooterHeading>Tu Empresa</FooterHeading>
            <Text fontSize="sm" color="gray.600" maxW="300px">
              Transformando ideas en soluciones digitales innovadoras desde 2024.
            </Text>
            <Text fontSize="sm" color="gray.600">
              &copy; {currentYear} Tu Empresa. Todos los derechos reservados.
            </Text>
          </VStack>

          {/* Links Section */}
          <VStack align="flex-start" spacing={4}>
            <FooterHeading>Enlaces útiles</FooterHeading>
            <Stack spacing={2}>
              {usefulLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.text}
                </FooterLink>
              ))}
            </Stack>
          </VStack>

          {/* Social Links */}
          <VStack align="flex-start" spacing={4}>
            <FooterHeading>Síguenos</FooterHeading>
            <Text fontSize="sm" color="gray.600" maxW="300px">
              Mantente conectado con nosotros en redes sociales para las últimas actualizaciones.
            </Text>
            <Flex gap={4}>
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.label}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </Flex>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterMain;
