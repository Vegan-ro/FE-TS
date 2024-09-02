import { useState } from 'react';
import { Container, Tab, TabContainer, TabContainerParent, TabContent } from './AdminTabBar.styles';
import AdminUserTable from '../AdminUserTable/AdminUserTable';
import { UserData } from '../AdminUserTable/AdminUserTable.types';
import { ReviewData } from '../AdminReviewTable/AdminReviewTable.types';
import AdminReviewTable from '../AdminReviewTable/AdminReviewTable';

function AdminTabBar() {
  const [activeTab, setActiveTab] = useState<'reported' | 'place' | 'user' | 'review'>('reported');
  const [userData] = useState<UserData[]>([]);
  const [reviewData] = useState<ReviewData[]>([]);
  const [loading] = useState<boolean>(true);

  return (
    <Container>
      <TabContainerParent>
        <TabContainer>
          <Tab active={activeTab === 'reported'} onClick={() => setActiveTab('reported')}>
            제보 장소
          </Tab>
          <Tab active={activeTab === 'place'} onClick={() => setActiveTab('place')}>
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
        {activeTab === 'reported' && <div>reported</div>}
        {activeTab === 'place' && <div>review</div>}
        {activeTab === 'user' && (loading ? <div>Loading...</div> : <AdminUserTable userData={userData} />)}
        {activeTab === 'review' && (loading ? <div>Loading...</div> : <AdminReviewTable reviews={reviewData} />)}
      </TabContent>
    </Container>
  );
}

export default AdminTabBar;
