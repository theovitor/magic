import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import FlexBoxCard from '../../FlexBoxCard';
import FlexBox from '../../FlexBox';
import logo from '../../Imagens/Magic.png';

const Magic = () => {
  const [magic, setMagic] = useState(null);

  useEffect(() => {
    async function pegarDados() {
      const resposta = await axios.get(
        'https://api.magicthegathering.io/v1/cards',
      );
      setMagic(resposta.data);
    }
    pegarDados();
  }, []);
  if (magic === null) {
    return <p>Carregando ...</p>;
  }

  return (
    <>
      <div id="d">
        <img id="i" src={logo} />
        <h1 id="m">Magic: The Gathering</h1>
      </div>

      <FlexBox titulo="Cartas">
        {magic.cards.map((item) => (
          <FlexBoxCard key={item.id}>
            <img id="carta" src={item.imageUrl} />
            <p>Nome: {item.name}</p>
            <p>Tipo: {item.type}</p>
            <p>Raridade: {item.rarity}</p>
            <p>Set: {item.set}</p>
          </FlexBoxCard>
        ))}
      </FlexBox>
    </>
  );
};

export default Magic;
