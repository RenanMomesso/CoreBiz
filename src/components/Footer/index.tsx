import React from "react";
import * as S from "./styles";

const Footer: React.FC<{ scrollToTopWhenInit: any }> = ({
  scrollToTopWhenInit,
}) => {
  return (
    <S.ViewWrapper>
      <S.TextEnd>FIM DOS PERSONAGENS</S.TextEnd>
      <S.TouchableToTop
        onPress={() =>
          scrollToTopWhenInit.current?.scrollToOffset({
            offset: 10,
            animated: true,
          })
        }
      >
        <S.TextButton>Ir ao topo</S.TextButton>
      </S.TouchableToTop>
    </S.ViewWrapper>
  );
};

export default Footer;
