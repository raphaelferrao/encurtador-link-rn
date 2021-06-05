import React, { useState, useEffect } from "react";
import { ActivityIndicator, Modal } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import Menu from "../../components/Menu";
import StatusBarPage from "../../components/StatusBarPage";
import ListItem from "../../components/ListItem";
import ModalLink from "../../components/ModalLink";

import {
  Container,
  Title,
  ListLinks,
  ContainerEmpty,
  WarningText,
} from "./styles";
import { getLinksSaved, deleteLink } from "../../utils/store.links";

export default function MyLinks() {
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    const getLinks = async () => {
      const result = await getLinksSaved();
      setLinks(result);
      setLoading(false);
    };

    getLinks();
  }, [isFocused]);

  const handleItem = (item) => {
    setData(item);
    setModalVisible(true);
  };

  const handleDeleteItem = async (id) => {
    const result = await deleteLink(links, id);
    setLinks(result);
  };

  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />

      <Menu />

      <Title>Meus Links</Title>

      {loading && (
        <ContainerEmpty>
          <ActivityIndicator color="#FFF" size={25} />
        </ContainerEmpty>
      )}

      {!loading && links.length === 0 && (
        <ContainerEmpty>
          <WarningText>Você ainda não possui nenhum link :(</WarningText>
        </ContainerEmpty>
      )}

      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            selectedItem={handleItem}
            deleteItem={handleDeleteItem}
          />
        )}
        contentContainerStyle={{ paddingBottom: 22 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </Container>
  );
}
