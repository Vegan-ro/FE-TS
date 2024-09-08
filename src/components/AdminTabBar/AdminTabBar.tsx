import { useState } from 'react';
import { Container, Tab, TabContainer, TabContainerParent, TabContent } from './AdminTabBar.styles';
import AdminPlaceTable from '../AdminPlaceTable/AdminPlaceTable';
import AdminUserTable from '../AdminUserTable/AdminUserTable';
import AdminReviewTable from '../AdminReviewTable/AdminReviewTable';
import usePlaces from '@/utils/hooks/useAdminPlace/useAdminPlace';
import useAdminUsers from '@/utils/hooks/useAdminUser/useAdminUser';
import useAdminReviews from '@/utils/hooks/useAdminReview/useAdminReview';

function AdminTabBar() {
  const [activeTab, setActiveTab] = useState<'reported' | 'registered' | 'user' | 'review'>('reported');

  const { reportedPlaces, registeredPlaces, isLoading: placesLoading, isError: placesError } = usePlaces();

  const { userData, isLoading: usersLoading, isError: usersError, handleDeleteUser } = useAdminUsers();

  const { reviewData, isLoading: reviewsLoading, isError: reviewsError } = useAdminReviews();

  if (placesLoading || usersLoading || reviewsLoading) {
    return <div>Loading...</div>;
  }

  if (placesError || usersError || reviewsError) {
    return <div>{placesError || usersError || reviewsError}</div>;
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
        {activeTab === 'user' && <AdminUserTable userData={userData} handleDeleteUser={handleDeleteUser} />}
        {activeTab === 'review' && <AdminReviewTable reviews={reviewData} />}
      </TabContent>
    </Container>
  );
}

export default AdminTabBar;
