import { Container, Section } from "../../../../CommonStyles.styled";
import {
  FcSupport,
  FcPaid,
  FcBusinessman,
  FcInTransit,
  FcGlobe,
} from "react-icons/fc";

import { IoPricetagsOutline } from "react-icons/io5";
import { ItemsContainer, BenefitsList } from "./WhatWeDo.styled";

export const WhatWeDo = () => {
  return (
    <Section style={{ backgroundColor: "rgb(244, 244, 253)" }}>
      <Container>
        <ItemsContainer>
          <h2>Що Ми Робимо</h2>
          <BenefitsList>
            <li>
              <div>
                <FcSupport />
              </div>
              <p>Виготовляємо стильні вироби на різноманітну тематику</p>
            </li>
            <li>
              <div>
                <FcPaid />
              </div>
              <p>Використовуємо натуральні матеріали</p>
            </li>
            <li>
              <div>
                <IoPricetagsOutline />
              </div>
              <p>Пропонуємо доступні ціни</p>
            </li>
            <li>
              <div>
                <FcGlobe />
              </div>
              <p>Cтворюємо красу доступну кожному</p>
            </li>
            <li>
              <div>
                <FcInTransit />
              </div>
              <p>Вчасно доставляємо замовлення</p>
            </li>
            <li>
              <div>
                <FcBusinessman />
              </div>
              <p>Дотримуємося принципу - кожен клієнт важливий</p>
            </li>
          </BenefitsList>
        </ItemsContainer>
      </Container>
    </Section>
  );
};
