import FashionFooter from '@/component/fashion/ FashionFooter'
import FashionCollectionStore from '@/component/fashion/FashionCollectionStore'
import { FashionHeroPage } from '@/component/fashion/FashionHero'
import FashionPOSFeaturesSection from '@/component/fashion/FashionPOSFeaturesSection'
import FashionPOSWorkflowSection from '@/component/fashion/FashionPOSWorkflowSection'
import FashionStockVariantSection from '@/component/fashion/FashionStockVariantSection '
import Footer from '@/components/footer'
import React from 'react'

const page = () => {
  return (
    <div>
        <FashionHeroPage/>
        <FashionCollectionStore/>
        <FashionPOSFeaturesSection/>
        <FashionPOSWorkflowSection/>
        <FashionStockVariantSection/>
        <FashionFooter/>
        
    </div>
  )
}

export default page