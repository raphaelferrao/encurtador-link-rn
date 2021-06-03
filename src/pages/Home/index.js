import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";

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
import ModalLink from "../../components/ModalLink";

export default function Home() {
  const [inputLink, setInputLink] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleGerarLink = () => {
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={["#1DDBB9", "#132742"]} style={styles.container}>
        <StatusBarPage backgroundColor="#1DDBB9" barStyle="light-content" />

        <Menu />

        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "position"}
          enabled
        >
          <ContainerLogo>
            <Logo source={LogoImage} resizeMode="contain" />
          </ContainerLogo>

          <ContainerContent>
            <Title>Encurta Link</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#FFF" />
              </BoxIcon>
              <Input
                placeholder="Cole seu link aqui..."
                placeholderTextColor="#FFF"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={inputLink}
                onChangeText={(text) => setInputLink(text)}
              />
            </ContainerInput>

            <ButtonLink onPress={handleGerarLink}>
              <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
