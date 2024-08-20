import { Img } from "./AboutUs.styled";
import { Container, Section } from "../../../../CommonStyles.styled";
import Image1 from "../../../../public/img_people/resized.jpg";
import Image2 from "../../../../public/img_people/resized_Nadia.jpg";
import Image3 from "../../../../public/img_people/resized_Valentyn.jpg";

export const AboutUs = () => {
  return (
    <Section>
      <Container>
        <h2>Про Нас</h2>
        <p>
          Сталевий лісоруб - це проєкт, що має за мету зробити Ваше життя
          яскравішим, прикрасивши його стильними і красивими виробами з дерева і
          металу на різноманітну тематику. Та перш за все, Сталевий Лісоруб - це
          люди. Тож, давайте знайомитися!
        </p>
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <Img
              alt="image of a project creator"
              src={Image1}
              width="300"
              height="450"
            />
            <p>Засновник проєкту: Косинський Микола</p>
          </div>
          <p>
            Коли він почав працювати з деревом, на думку навіть не спадало, що з
            часом це захоплення переросте в дещо більше: в пристрасть. Бажання
            створюватися прості, але водночас стильні вироби, і ділитися ними з
            людьми - це те, що змушує Миколу рухатися вперед і не складати рук
            навіть у складні часи.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <p>
            Усі металеві конструкції, які ви зможете знайти на сайті - робота
            цієї людини. Майстер на усі руки - це про нього. Без цієї людини
            проєкт сміливо можна було б назвати просто "Лісоруб".
          </p>
          <div>
            <Img
              alt="image of Valentyn"
              src={Image3}
              width="300"
              height="450"
            />
            <p>Металеве серце проєкту: Косинський Валентин</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <Img alt="image of Nadia" src={Image2} width="300" height="450" />
            <p>Колір проєкту: Іванюк Надія</p>
          </div>
          <p>
            Надія додає кольорів не лише у вироби, а й в життя усієї команди.
            Окрім того, вона ще й активно допомагає в розробці моделей. Одним
            словом: незамінний член команди.
          </p>
        </div>
      </Container>
    </Section>
  );
};
