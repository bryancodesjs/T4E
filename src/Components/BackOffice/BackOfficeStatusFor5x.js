import React from 'react'
import x5matrix from '../../assets/img/m1.png'
import SubPart5X from './SubPart5X'
import { FaUsers } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import tron32xfff from '../../assets/img/tron32x_fff.png'

function BackOfficeStatusFor5x(props) {
    return (
        <>
            <div className="xwrap bg-clear border">
                {/* <!--Direct License Levels--> */}
                <div className="boxes_wraper">
                    <SubPart5X level={1} ammount={"200"} lang={props.lang && props.lang} />
                    <SubPart5X level={2} ammount={"400"} lang={props.lang && props.lang} />
                    <SubPart5X level={3} ammount={"800"} lang={props.lang && props.lang} />
                    <SubPart5X level={4} ammount={"1600"} lang={props.lang && props.lang} />
                    <SubPart5X level={5} ammount={"3200"} lang={props.lang && props.lang} />
                    <SubPart5X level={6} ammount={"6400"} lang={props.lang && props.lang} />
                    <SubPart5X level={7} ammount={"12800"} lang={props.lang && props.lang} />
                    <SubPart5X level={8} ammount={"25600"} lang={props.lang && props.lang} />
                    <SubPart5X level={9} ammount={"51200"} lang={props.lang && props.lang} />
                    <SubPart5X level={10} ammount={"102400"} lang={props.lang && props.lang} />
                    <SubPart5X level={11} ammount={"204800"} lang={props.lang && props.lang} />
                    <SubPart5X level={12} ammount={"409600"} lang={props.lang && props.lang} />
                </div>
                <div className="Tips p-4">
                    <div className="d-flex align-items-center tip"><div className="mr10 position mini-position position_active"><img src={tron32xfff} alt="trx tron logo"/></div> You have earned a commission from this slot</div>
                    <div className="d-flex align-items-center tip"><div className="mr10 position mini-position" /> Available slot.</div>
                    {/*<div className="d-flex align-items-center tip"><div className="mr10 position mini-position position_reset" /> Once this position is filled, all slots will clear out.</div>*/}
                    <div className="d-flex align-items-center tip"><FaUsers className="mr10" color="#272727" size={25} /> Users you have earned from.</div>
                    <div className="d-flex align-items-center tip"><FiRefreshCcw className="mr10" color="#272727" size={25} /> How many times you have completed and cleared this slot.</div>
                </div>
            </div>
        </>
    )
}

export default React.memo(BackOfficeStatusFor5x)
