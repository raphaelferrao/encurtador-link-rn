import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
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
import api from "../../services/api";

export default function Home() {
  const [inputLink, setInputLink] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataApi, setDataApi] = useState({});

  const handleGerarLink = async () => {
    setLoading(true);

    try {
      const response = await api.post("/shorten", {
        long_url: inputLink,
      });
      console.log(response.data);
      setDataApi(response.data);

      setModalVisible(true);

      Keyboard.dismiss();
      setLoading(false);
      setInputLink("");
    } catch (error) {
      console.log("Erro ao encurtar link", error);
      alert("Ops, parece que algo deu errado!");
      Keyboard.dismiss();
      setInputLink("");
      setLoading(false);
    }
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
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <ButtonLinkText>Gerar Link</ButtonLinkText>
              )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={dataApi} />
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
