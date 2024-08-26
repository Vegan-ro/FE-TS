import AdminTabBar from '@/components/AdminTabBar/AdminTabBar';
import { Container, DataWrapper } from './Admin.styles';
import Navbar from '@/components/Navbar/Navbar';

function Admin() {
  return (
    <Container>
      <Navbar icon="null" title="관리자페이지" />
      <DataWrapper>
        <AdminTabBar />
      </DataWrapper>
    </Container>
  );
}

export default Admin;
