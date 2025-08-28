import RightModal from '@/components/Modal/RightModal'
import React, { useState } from 'react'
import MyTabs from '@/components/MyTabs'
import InformationForm from './InformationForm'

const tabData = [
  { label: 'Thông tin', value: 'information' },
  { label: 'Mối quan hệ', value: 'relationship' },
  { label: 'Danh sách', value: 'list' }
]

const AddCustomerModal = ({ open, onChange }) => {
  const [tab, setTab] = useState(tabData[0].value)

  return (
    <RightModal
      open={open}
      onChange={onChange}
      title={'Thêm khách hàng'}
      rightButtonTitle={'Thêm khách hàng'}
      onClickRight={() => console.log('click right')}
    >
      <div className='overflow-auto hide-scrollbar mb-4'>
        <MyTabs data={tabData} onChangeTab={setTab} />
        {tab === 'information' && <InformationForm />}
      </div>
    </RightModal>
  )
}

export default AddCustomerModal
