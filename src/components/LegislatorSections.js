import React, { useMemo, useCallback } from 'react';

function LegislatorSections({
  legislators = [],
  selectedLegislatorIds = [],
  doneLegislatorsMap = {},
  onSelectionChange = () => {},
}) {
  const legislatorsByArea = useMemo(
    () =>
      legislators.reduce((areas, legislator) => {
        areas[legislator.area] = areas[legislator.area] || [];
        areas[legislator.area].push(legislator);
        return areas;
      }),
    [legislators]
  );

  return (
    <>
      <PositionSelector
        legislators={legislators}
        selectedLegislatorIds={selectedLegislatorIds}
        onChange={onSelectionChange}
      />
      {Object.keys(legislatorsByArea).map(area => (
        <LegislatorSection
          key={area}
          legislators={legislatorsByArea[area]}
          onChange={onSelectionChange}
        />
      ))}
    </>
  );
}

function PositionSelector({
  legislators,
  selectedLegislatorIds,
  onChange = () => {},
}) {
  const positions = useMemo(
    () =>
      Object.keys(
        legislators.reduce((agg, { position }) => {
          agg[position] = true;
          return agg;
        })
      ),
    [legislators]
  );

  const handleToggle = useCallback(
    e => {
      const toggledPosition = e.target.value;
    },
    [legislators, selectedLegislatorIds, onChange]
  );

  return (
    <ul>
      {positions.map(p => (
        <li>
          <label>
            <input type="checkbox" value={p} onClick={handleToggle} /> {p}
          </label>
        </li>
      ))}
    </ul>
  );
}

function LegislatorSection({
  area = '',
  legislators = [],
  selectedLegislatorIds,
  onChange = () => {},
}) {
  const handleSectionToggle = useCallback(
    e => {
      const toggledPosition = e.target.value;
    },
    [legislators, selectedLegislatorIds, onChange]
  );

  const handleSingleToggle = useCallback(
    e => {
      const toggledPosition = e.target.value;
    },
    [legislators, selectedLegislatorIds, onChange]
  );

  return (
    <section>
      <header>
        <label>
          <input type="checkbox" onClick={handleSectionToggle} /> {area}
        </label>
      </header>
      <ul>
        {legislators.map(p => (
          <li>
            <label>
              <input type="checkbox" value={p} onClick={handleSingleToggle} />{' '}
              {p}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LegislatorSections;
