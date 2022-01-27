import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import _ from 'lodash';
import { layoutGenerate } from './gerateLayout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const initialState = {
  currentBreakpoint: 'lg',
  compactType: 'vertical',
  mounted: false,
  layouts: { lg: layoutGenerate },
};

const GalleryGrid = () => {
  const [state, setState] = useState(initialState);

  const layouts = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];

  const generateDOM = () => {
    return _.map(state.layouts.lg, function (l, i) {
      return (
        <div key={i} className={l.static ? 'static' : ''}>
          {l.static ? (
            <span className="text" title="This item is static and cannot be removed or resized.">
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  };

  useEffect(() => {
    setState({ mounted: true });
  }, []);

  //   function onBreakpointChange(breakpoint) {
  //     this.setState({
  //       currentBreakpoint: breakpoint,
  //     });
  //   }

  //   function onCompactTypeChange() {
  //     const { compactType: oldCompactType } = this.state;
  //     const compactType =
  //       oldCompactType === 'horizontal' ? 'vertical' : oldCompactType === 'vertical' ? null : 'horizontal';
  //     this.setState({ compactType });
  //   }

  //   function onLayoutChange(layout, layouts) {
  //     onLayoutChange(layout, layouts);
  //   }

  //   function onNewLayout() {
  //     this.setState({
  //       layouts: { lg: layoutGenerate },
  //     });
  //   }

  return (
    <>
      <ResponsiveReactGridLayout className="layout" layouts={layouts}>
        layouts={state.layouts}
        {/* onBreakpointChange={onBreakpointChange} */}
        {/* onLayoutChange={onLayoutChange} */}
        {/* measureBeforeMount={false} */}
        {generateDOM()}
        {/* useCSSTransforms={state.mounted}
        compactType={state.compactType}
        preventCollision={!state.compactType} */}
      </ResponsiveReactGridLayout>
      {/* <button onClick={onNewLayout}>Generate New Layout</button>
      <button onClick={onCompactTypeChange}>Change Compaction Type</button> */}
    </>
  );
};

export default GalleryGrid;
