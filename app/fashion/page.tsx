
"use client";

import React, { useEffect, useRef, useState } from "react";
import FashionFooter from '@/component/fashion/ FashionFooter'
import FashionCollectionStore from '@/component/fashion/FashionCollectionStore'
import { FashionHeroPage } from '@/component/fashion/FashionHero'
import FashionPOSFeaturesSection from '@/component/fashion/FashionPOSFeaturesSection'
import FashionPOSWorkflowSection from '@/component/fashion/FashionPOSWorkflowSection'
import FashionStockVariantSection from '@/component/fashion/FashionStockVariantSection '
import Footer from '@/components/footer'


const page = () => {

    const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div>
        <FashionHeroPage/>
        <FashionCollectionStore/>
        <FashionPOSFeaturesSection/>
        <FashionPOSWorkflowSection/>
        <FashionStockVariantSection/>
        <FashionFooter darkMode={darkMode}/>
        
    </div>
  )
}

export default page