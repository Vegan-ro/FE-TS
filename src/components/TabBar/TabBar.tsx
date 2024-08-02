import { useState } from 'react';
import { Container, Tab, TabContainer, TabContainerParent } from './TabBar.style';

function TabBar() {
  const [activeTab, setActiveTab] = useState<'reported' | 'review' | 'bookmark'>('reported');

  return (
    <div css={Container}>
      <div css={TabContainerParent}>
        <div css={TabContainer}>
          <div css={Tab(activeTab === 'reported')} onClick={() => setActiveTab('reported')}>
            제보한 가게
          </div>
          <div css={Tab(activeTab === 'review')} onClick={() => setActiveTab('review')}>
            작성 후기
          </div>
          <div css={Tab(activeTab === 'bookmark')} onClick={() => setActiveTab('bookmark')}>
            북마크
          </div>
        </div>
      </div>
      <div>
        {activeTab === 'reported' && <div>reported</div>}
        {activeTab === 'review' && <div>review</div>}
        {activeTab === 'bookmark' && <div>bookmark</div>}
      </div>
    </div>
  );
}

export default TabBar;
