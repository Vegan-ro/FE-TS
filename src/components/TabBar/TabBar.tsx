import { useState } from 'react';
import { Container, Tab, TabContainer, TabContainerParent, TabContent } from './TabBar.styles';

function TabBar() {
  const [activeTab, setActiveTab] = useState<'reported' | 'review' | 'bookmark'>('reported');

  return (
    <Container>
      <TabContainerParent>
        <TabContainer>
          <Tab active={activeTab === 'reported'} onClick={() => setActiveTab('reported')}>
            제보한 가게
          </Tab>
          <Tab active={activeTab === 'review'} onClick={() => setActiveTab('review')}>
            작성 후기
          </Tab>
          <Tab active={activeTab === 'bookmark'} onClick={() => setActiveTab('bookmark')}>
            북마크
          </Tab>
        </TabContainer>
      </TabContainerParent>
      <TabContent style={{ display: activeTab ? 'block' : 'none' }}>
        {activeTab === 'reported' && <div>reported</div>}
        {activeTab === 'review' && <div>review</div>}
        {activeTab === 'bookmark' && <div>bookmark</div>}
      </TabContent>
    </Container>
  );
}

export default TabBar;
