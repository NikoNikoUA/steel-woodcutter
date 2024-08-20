import { Img } from "./AboutUs.styled";
import { Container, Section } from "../../../../CommonStyles.styled";
import {
  InfoContainer,
  CardDescr,
  Names,
  PersonDescr,
  DescrContainer,
} from "./AboutUs.styled";
import Image1 from "../../../../public/img_people/resized.jpg";
import Image2 from "../../../../public/img_people/resized_Nadia.jpg";
import Image3 from "../../../../public/img_people/resized_Valentyn.jpg";

export const AboutUs = () => {
  return (
    <Section>
      <Container>
        <InfoContainer>
          <div>
            <h2>Про Нас</h2>
          </div>
          <div style={{ width: "1000px" }}>
            <CardDescr>
              <Img
                alt="image of a project creator"
                src={Image1}
                width="300"
                height="450"
              />
              <DescrContainer>
                <Names>Засновник проєкту: Косинський Микола</Names>
                <PersonDescr>
                  Коли він почав працювати з деревом, на думку навіть не
                  спадало, що з часом це захоплення переросте в дещо більше: в
                  пристрасть. Бажання створюватися прості, але водночас стильні
                  вироби, і ділитися ними з людьми - це те, що змушує Миколу
                  рухатися вперед і не складати рук навіть у складні часи.
                </PersonDescr>
              </DescrContainer>
            </CardDescr>

            <CardDescr>
              <DescrContainer>
                <Names> Металеве серце проєкту: Косинський Валентин</Names>
                <PersonDescr>
                  Усі металеві конструкції, які ви зможете знайти на сайті -
                  робота цієї людини. Майстер на усі руки - це про нього. Без
                  Валентина проєкт сміливо можна було б назвати просто
                  "Лісоруб".
                </PersonDescr>
              </DescrContainer>
              <div>
                <Img
                  alt="image of Valentyn"
                  src={Image3}
                  width="300"
                  height="450"
                />
              </div>
            </CardDescr>
            <CardDescr>
              <div>
                <Img
                  alt="image of Nadia"
                  src={Image2}
                  width="300"
                  height="450"
                />
              </div>
              <DescrContainer>
                <Names>Колір проєкту: Іванюк Надія</Names>

                <PersonDescr>
                  Надія додає кольорів не лише у вироби, а й в життя усієї
                  команди. Окрім того, вона ще й активно допомагає в розробці
                  моделей. Одним словом: незамінний член команди.
                </PersonDescr>
              </DescrContainer>
            </CardDescr>
          </div>
        </InfoContainer>
      </Container>
    </Section>
  );
};
