import { Box, Button, Container, Divider, HStack, Link, Spacer, Text } from "@chakra-ui/react"
import { useKeycloak } from "@react-keycloak/web";

const Navbar = () => {
    const { keycloak, initialized } = useKeycloak();

    return (
        <>
            <Container maxW={'6xl'} mt={2} mb={2}>
                <HStack>
                    <Text fontSize={'lg'}>KeycloakTest</Text>
                    <Spacer />
                    <Link href="/">Home</Link>
                    <Spacer />
                    <Link href="/secured" w='full'>Secured page</Link>
                    <Box w='full' textAlign={'end'}>
                        {!keycloak.authenticated && (
                            <>
                                <Button variant={'ghost'} onClick={() => keycloak.login()}>
                                    Sign in
                                </Button>
                                <Button variant={'ghost'}>
                                    Sign up
                                </Button>
                            </>
                        )}

                        {!!keycloak.authenticated && (
                            <Button
                                variant={'ghost'}
                                onClick={() => keycloak.logout()}
                                >
                                Logout ({keycloak.tokenParsed.preferred_username})
                            </Button>
                        )}
                    </Box>
                    
                </HStack>
            </Container>
            <Divider mb={5} />
        </>
    )
}

export default Navbar;
