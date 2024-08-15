import { Img, Section } from "./AboutUs.styled";
import { Container } from "../../../../CommonStyles.styled";

export const AboutUs = () => {
  return (
    <Section>
      <Container>
        <h1>Who we are</h1>
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
          <Img
            alt="image of a project creator"
            src="public\img_people\resized.jpg"
            width="250"
            height="360"
          />
          <p>
            <span>Засновник проєкту: Косинський Микола</span>
            <br />
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
            <span>Металеве серце проєкту: Косинський Валентин</span>
            <br />
            Усі металеві конструкції, які ви зможете знайти на сайті - робота
            цієї людини. Майстер на усі руки - це про нього. Без цієї людини
            проєкт сміливо можна було б назвати просто "Лісоруб".
          </p>
          <Img
            alt="image of Valentyn"
            src="public\img_people\resized_Valentyn.jpg"
            width="250"
            height="360"
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Img
            alt="image of Nadia"
            src="public\img_people\resized_Nadia.jpg"
            width="250"
            height="360"
          />
          <p>
            <span>Колір проєкту: Іванюк Надія</span>
            <br />
            Надія додає кольорів не лише у вироби, а й в життя усієї команди.
            Окрім того, вона ще й активно допомагає в розробці моделей. Одним
            словом: незамінний член команди.
          </p>
        </div>
      </Container>
    </Section>
  );
};
