import React from 'react';
import classes from './index.module.scss';

export const PageLoading = () => {
    return (
        <div className={classes.loadingContainer}>
            <div className="line-scale">
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};

export const MarketLoading = (props: { h?: number }) => {
    return (
        <div className={classes.marketLoadingContainer} style={{ height: props.h ? props.h + 'px' : '200px' }}>
            <div className="line-scale">
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};
