import { useState } from 'react';
import { Container, Tab, TabContainer, TabContainerParent, TabContent } from './AdminTabBar.styles';
import AdminPlaceTable from '../AdminPlaceTable/AdminPlaceTable';
import usePlaces from '@/utils/hooks/useAdminPlace/useAdminPlace';

function AdminTabBar() {
  const [activeTab, setActiveTab] = useState<'reported' | 'registered' | 'user' | 'review'>('reported');

  const { reportedPlaces, registeredPlaces, isLoading, isError } = usePlaces();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  return (
    <Container>
      <TabContainerParent>
        <TabContainer>
          <Tab active={activeTab === 'reported'} onClick={() => setActiveTab('reported')}>
            제보 장소
          </Tab>
          <Tab active={activeTab === 'registered'} onClick={() => setActiveTab('registered')}>
            등록 장소
          </Tab>
          <Tab active={activeTab === 'user'} onClick={() => setActiveTab('user')}>
            회원
          </Tab>
          <Tab active={activeTab === 'review'} onClick={() => setActiveTab('review')}>
            리뷰
          </Tab>
        </TabContainer>
      </TabContainerParent>
      <TabContent style={{ display: activeTab ? 'block' : 'none' }}>
        {activeTab === 'reported' && <AdminPlaceTable placeData={reportedPlaces} />}
        {activeTab === 'registered' && <AdminPlaceTable placeData={registeredPlaces} />}
        {activeTab === 'user' && <div>user table</div>}
        {activeTab === 'review' && <div>review table</div>}
      </TabContent>
    </Container>
  );
}

export default AdminTabBar;
