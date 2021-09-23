import React from 'react'
import "./FeaturedInfo.css"
import {ArrowDownward,ArrowUpward} from  '@mui/icons-material';
function FeaturedInfo() {
    return (
        <div className="featuredInfo">
            <div className="featuredItem">
                <span className="featuredItemTitle">Revenue</span>
                <div className="featuredItemData">
                    <span className="featuredItemValue">$2,415</span>
                    <span className="featuredItemRate">-11.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <div className="featuredItemDescription">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredItemTitle">Sales</span>
                <div className="featuredItemData">
                    <span className="featuredItemValue">$4,415</span>
                    <span className="featuredItemRate">-1.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <div className="featuredItemDescription">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredItemTitle">Cost</span>
                <div className="featuredItemData">
                    <span className="featuredItemValue">$2,355</span>
                    <span className="featuredItemRate">+9.4 <ArrowUpward  className="featuredIcon" /></span>
                </div>
                <div className="featuredItemDescription">Compared to last month</div>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
