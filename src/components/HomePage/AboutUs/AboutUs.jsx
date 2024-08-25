import { Img } from "./AboutUs.styled";
import { Container, Section } from "../../../../CommonStyles.styled";
import {
  InfoContainer,
  CardDescr,
  Names,
  PersonDescr,
  DescrContainer,
  DescrContainerOne,
  DescrContainerVal,
  ImgVal,
  ContWidth,
} from "./AboutUs.styled";
import Image1 from "../../../../public/img_people/resized.jpg";
import Image2 from "../../../../public/img_people/resized_Nadia.jpg";
import Image3 from "../../../../public/img_people/resized_Valentyn.jpg";
import { useEffect, useRef } from "react";

export const AboutUs = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  const descrRef1 = useRef(null);
  const descrRef2 = useRef(null);
  const descrRef3 = useRef(null);
  const descrRef4 = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    [
      imgRef1.current,
      imgRef2.current,
      imgRef3.current,
      descrRef1.current,
      descrRef2.current,
      descrRef3.current,
      descrRef4.current,
    ].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Section>
      <Container>
        <InfoContainer>
          <div>
            <h2>Про Нас</h2>
          </div>
          <ContWidth>
            <CardDescr>
              <Img
                alt="image of a project creator"
                src={Image1}
                ref={imgRef1}
              />
              <DescrContainer ref={descrRef1}>
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
              <DescrContainerOne ref={descrRef2}>
                <Names> Металеве серце проєкту: Косинський Валентин</Names>
                <PersonDescr>
                  Усі металеві конструкції, які ви зможете знайти на сайті -
                  робота цієї людини. Майстер на усі руки - це про нього. Без
                  Валентина проєкт сміливо можна було б назвати просто
                  "Лісоруб".
                </PersonDescr>
              </DescrContainerOne>
              <div>
                <ImgVal alt="image of Valentyn" src={Image3} ref={imgRef2} />
              </div>
              <DescrContainerVal ref={descrRef3}>
                <Names> Металеве серце проєкту: Косинський Валентин</Names>
                <PersonDescr>
                  Усі металеві конструкції, які ви зможете знайти на сайті -
                  робота цієї людини. Майстер на усі руки - це про нього. Без
                  Валентина проєкт сміливо можна було б назвати просто
                  "Лісоруб".
                </PersonDescr>
              </DescrContainerVal>
            </CardDescr>
            <CardDescr>
              <div>
                <Img alt="image of Nadia" src={Image2} ref={imgRef3} />
              </div>
              <DescrContainer ref={descrRef4}>
                <Names>Колір проєкту: Іванюк Надія</Names>

                <PersonDescr>
                  Надія додає кольорів не лише у вироби, а й в життя усієї
                  команди. Окрім того, вона ще й активно допомагає в розробці
                  моделей. Одним словом: незамінний член команди.
                </PersonDescr>
              </DescrContainer>
            </CardDescr>
          </ContWidth>
        </InfoContainer>
      </Container>
    </Section>
  );
};
