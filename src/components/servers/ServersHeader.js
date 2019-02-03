import React from 'react';

const ServersHeader = ({ onSortClick }) => {
    const renderSortButton = (key, order) => (
        <div
            onClick={() => onSortClick(key, order)}
            className={`arrow arrow--${order}`}
        />
    );

    return (
        <header className="servers__header">
            <div className="servers__header--left">
                <div className="servers__sort">
                    {renderSortButton('name', 'desc')}
                    {renderSortButton('name', 'asc')}
                </div>
                <h2 className="servers__label">Server</h2>
            </div>
            <div className="servers__header--right">
                <div className="servers__sort">
                    {renderSortButton('distance', 'desc')}
                    {renderSortButton('distance', 'asc')}
                </div>
                <h2 className="servers__label">Distance</h2>
            </div>
        </header>
    );
};

export default ServersHeader;
