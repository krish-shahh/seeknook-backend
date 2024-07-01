import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
    
  const VerifyEmail = ({ verificationCode }) => {
    const currentYear = new Date().getFullYear();
    
    return (
      <Html>
        <Head />
        <Preview>Confirm your email address</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={logoContainer}>
              <Img
                src={'https://raw.githubusercontent.com/krish-shahh/seeknook-backend/main/Seeknook-Long.png'}
                width="120"
                height="40"
                alt="Seeknook"
              />
            </Section>
            <Heading style={h1}>Confirm your email address</Heading>
            <Text style={heroText}>
              Your confirmation code is below - enter it in your open browser window
              and we'll help you get signed in.
            </Text>
  
            <Section style={codeBox}>
              <Text style={confirmationCodeText}>{verificationCode}</Text>
            </Section>
  
            <Text style={text}>
              If you didn't request this email, there's nothing to worry about, you
              can safely ignore it.
            </Text>
  
            <Section>
              <Row style={footerLogos}>
                <Column>
                  <Section>
                    <Row>
                      <Column>
                        <Link href="https://twitter.com">
                          <Img
                            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1024px-Logo_of_Twitter.svg.png?20220821125553'}
                            width="32"
                            height="32"
                            alt="Twitter"
                            style={socialMediaIcon}
                          />
                        </Link>
                      </Column>
                      <Column>
                        <Link href="https://facebook.com">
                          <Img
                            src={'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'}
                            width="32"
                            height="32"
                            alt="Facebook"
                            style={socialMediaIcon}
                          />
                        </Link>
                      </Column>
                      <Column>
                        <Link href="https://linkedin.com">
                          <Img
                            src={'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'}
                            width="32"
                            height="32"
                            alt="LinkedIn"
                            style={socialMediaIcon}
                          />
                        </Link>
                      </Column>
                    </Row>
                  </Section>
                </Column>
              </Row>
            </Section>
  
            <Section>
              <Link
                style={footerLink}
                href="https://seeknook-new.vercel.app/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policies
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                style={footerLink}
                href="https://seeknook-new.vercel.app/avoid-scams"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scam Protection
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                style={footerLink}
                href="https://seeknook-new.vercel.app/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                data-auth="NotApplicable"
                data-linkindex="6"
              >
                Contact Us
              </Link>
              <Text style={footerText}>
                ©{currentYear} Seeknook, Inc., 27 Thorn Lane, Chesterfield, NJ 08515, USA. <br />
                All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  VerifyEmail.PreviewProps = {
    validationCode: "DJZ-TLX",
  };
  
  export default VerifyEmail;
  
  const footerText = {
    fontSize: "12px",
    color: "#b7b7b7",
    lineHeight: "15px",
    textAlign: "left",
    marginBottom: "50px",
  };
  
  const footerLink = {
    color: "#b7b7b7",
    textDecoration: "underline",
  };
  
  const footerLogos = {
    marginBottom: "32px",
    paddingLeft: "8px",
    paddingRight: "8px",
    width: "100%",
  };
  
  const socialMediaIcon = {
    display: "inline",
    marginLeft: "32px",
  };
  
  const main = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };
  
  const container = {
    margin: "0 auto",
    padding: "0px 20px",
  };
  
  const logoContainer = {
    marginTop: "32px",
    textAlign: "center",
  };
  
  const h1 = {
    color: "#1d1c1d",
    fontSize: "36px",
    fontWeight: "700",
    margin: "30px 0",
    padding: "0",
    lineHeight: "42px",
  };
  
  const heroText = {
    fontSize: "20px",
    lineHeight: "28px",
    marginBottom: "30px",
  };
  
  const codeBox = {
    background: "rgb(245, 244, 245)",
    borderRadius: "4px",
    marginBottom: "30px",
    padding: "40px 10px",
  };
  
  const confirmationCodeText = {
    fontSize: "30px",
    textAlign: "center",
    verticalAlign: "middle",
  };
  
  const text = {
    color: "#000",
    fontSize: "14px",
    lineHeight: "24px",
  };
  