import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Share,
} from "react-native";

import Clipboard from "expo-clipboard";
import { Feather } from "@expo/vector-icons";

import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  OriginalLink,
  ShortLinkArea,
  ShortLinkUrl,
} from "./styles";

function ModalLink({ onClose, data }) {
  const copyLink = () => {
    Clipboard.setString(data.link);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Link: ${data.link}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("ActivityType");
        } else {
          console.log("Compartilhado com sucesso!");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Modal Fechada!");
      }
    } catch (error) {
      console.log("Erro ao compartilhar link", error.message);
    }
  };

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link Encurtado</Title>

          <OriginalLink numberOfLines={1}>{data.long_url}</OriginalLink>

          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>

            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" color="#FFF" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}

export default ModalLink;
