import { AuthUser } from "../Auth/AuthUser/AuthUser";
import { UserInfo } from "../Auth/UserInfo/UserInfo";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/selectors";
import { useEffect, useState } from "react";
import { Container, Section } from "../../../CommonStyles.styled";
import {
  Nav,
  PagesList,
  PagesLink,
  ListItem,
  Logo,
  MobileAuthInfo,
} from "./Header.styled";

export const Header = () => {
  const authUser = useSelector(selectUser);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(authUser);
  }, [authUser]);

  return (
    <Section style={{ padding: "0", backgroundColor: "rgb(244, 244, 253)" }}>
      <header>
        <Container>
          <Nav>
            <Logo>LOGO</Logo>
            <MobileAuthInfo>
              <PagesList>
                <ListItem>
                  <PagesLink to="/">Home</PagesLink>
                </ListItem>
                <ListItem>
                  <PagesLink to="/categories">Categories</PagesLink>
                </ListItem>
                {user && (
                  <ListItem>
                    <PagesLink to="/favorites">Favorites</PagesLink>
                  </ListItem>
                )}
              </PagesList>
              {user ? <UserInfo /> : <AuthUser />}
            </MobileAuthInfo>
          </Nav>
        </Container>
      </header>
    </Section>
  );
};
