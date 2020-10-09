import React from 'react';

import tshirtImage from '../../assets/tshirt.png'

import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo'; 

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>  
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt"/>
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">
          Compra garantida com o Lorem Ipsum
        </p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">
          Garantia do vendedor
        </p>
        <p className="description">
          Sem garantia
        </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre a garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus voluptatibus enim distinctio deserunt voluptas, aliquid adipisci expedita inventore perferendis quos quisquam, molestiae sunt et reiciendis nulla ex saepe vel.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis reiciendis dolor laboriosam sapiente mollitia odio aliquid? Pariatur odio eligendi dolor veniam dolore, ab repellat molestiae minus? Laborum quisquam perferendis quaerat!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia numquam quisquam ex amet ipsum voluptates non vitae est soluta inventore deleniti ad asperiores magni vero cum, eum commodi sequi!
    </p>
  </Description>
)

export default Product;
