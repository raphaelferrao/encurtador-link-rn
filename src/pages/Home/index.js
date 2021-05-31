import React from "react";
import { StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from "./styles";
import LogoImage from "../../assets/Logo.png";

export default function Home() {
  return (
    <LinearGradient colors={["#1DDBB9", "#132742"]} style={styles.container}>
      <StatusBarPage backgroundColor="#1DDBB9" barStyle="light-content" />

      <Menu />

      <ContainerLogo>
        <Logo source={LogoImage} resizeMode="contain" />
      </ContainerLogo>

      <ContainerContent>
        <Title>Encurtador de Link</Title>
        <SubTitle>Cole seu link para encurtar</SubTitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color="#FFF" />
          </BoxIcon>
          <Input
            placeholder="Cole seu link aqui..."
            placeholderTextColor="#FFF"
          />
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText>Gerar Link</ButtonLinkText>
        </ButtonLink>
      </ContainerContent>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
