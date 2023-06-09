import React, {useState} from 'react';
import {NavigationSwitchScreenProps} from 'react-navigation';

import {ButtomGo, LoadApp, ModalButtomLogin} from 'components';
import HomeHeader from 'components/homeHeader';
import * as St from './styles';

const HomeView = (props: NavigationSwitchScreenProps) => {
  const {navigation}: NavigationSwitchScreenProps = props;
  const [optIn, setOptIn] = useState(false);

  return (
    <LoadApp {...props}>
      <St.HomeHeader>
        <HomeHeader />
      </St.HomeHeader>
      <St.Logo>
        <St.LogoText>Greenlight</St.LogoText>
      </St.Logo>
      <St.Title>Estavamos à sua espera!</St.Title>
      <St.Description>
        Bem-vindo ao nosso aplicativo de eventos! Aqui você encontrará informações sobre esportivos,
        maratonas, corridas,e muito mais.
      </St.Description>
      {optIn ? (
        <ModalButtomLogin optIn={optIn} setOptIn={setOptIn} navigation={navigation} />
      ) : (
        <St.ButtomStart>
          <ButtomGo
            textTransform="uppercase"
            title="Vamos Começar"
            onPress={() => {
              setOptIn(true);
            }}
          />
        </St.ButtomStart>
      )}
    </LoadApp>
  );
};

export default HomeView;
