import React from 'react';
type ArrowProps = {
    direction?: string;
    width?: string;
    height?: string;
    rotate?: string;
}

const Arrow = ({direction = 'flex-col',height = 'h-[30px]',rotate = 'rotate(45deg)',width = 'w-0.5'}:ArrowProps) => {
    return (
        <div className={`arrow-container ${direction} relative w-[40px] h-[50px] flex items-center justify-center`}>
            <div className={`${height} ${width} bg-white`}></div>
            <div className="border" style={{ border: 'solid white', borderWidth: '0 3px 3px 0', display: 'inline-block', padding: '3px', transform: rotate }} />
        </div>
    );
};

export default Arrow;
