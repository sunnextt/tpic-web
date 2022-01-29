import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { layoutGenerate } from './gerateLayout';
import _ from 'lodash';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const initialState = {
  currentBreakpoint: 'lg',
  compactType: 'vertical',
  mounted: false,
  layouts: { lg: layoutGenerate },
};

const GalleryGrid = () => {
  const [state, setState] = useState(initialState);

  const generateDOM = () => {
    return _.map(state.layouts.lg, function (l, i) {
      return (
        <div key={i} className={l.static ? 'static' : ''}>
          {l.static ? (
            <>
              <div style={{ background: 'red', width: '100%', height: '100%' }}>
                <span className="text" title="This item is static and cannot be removed or resized.">
                  Static - {i}
                </span>
                <h1>now</h1>
              </div>
            </>
          ) : (
            <div style={{ background: 'red', width: '100%', height: '100%' }}>
              <span className="text">{i}</span>
              <h1>here for you</h1>
            </div>
          )}
        </div>
      );
    });
  };

  function onLayoutChange(layout, layouts) {
    onLayoutChange(layout, layouts);
  }

  const defaultProps = {
    className: 'layout',
    rowHeight: 30,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  };

  function onCompactTypeChange() {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === 'horizontal' ? 'vertical' : oldCompactType === 'vertical' ? null : 'horizontal';
    setState({ compactType });
  }

  const yes = false;

  return (
    <>
      <div>
        <button type="button" onClick={onCompactTypeChange}>
          button
        </button>
      </div>
      <ResponsiveReactGridLayout
        compactType="horizontal"
        preventCollision={yes}
        layouts={state.layouts}
        {...defaultProps}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </>
  );
};

export default GalleryGrid;
