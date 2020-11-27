import React from 'react';

import { Container, SidebarLink } from './styles';

function Sidebar() {
  return (
    <Container>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/sobre-nos">Sobre nos</SidebarLink>
      <SidebarLink to="/cursos">Noticias</SidebarLink>
      <SidebarLink to="/contact">Contato</SidebarLink>
    </Container>
  );
}

export default Sidebar;
