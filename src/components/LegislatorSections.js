import React, { useMemo, useCallback } from 'react';
import styled from '@emotion/styled';
import Checkbox from './Checkbox';

const Container = styled.div`
  li {
    display: inline-block;
  }

  label {
    min-width: 105px;
    padding-right: 2em;
  }

  input {
    margin-right: 0.5em;
  }
`;

const CheckboxList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PositionCheckboxList = styled(CheckboxList)`
  background: rgba(0, 0, 0, 0.2);
  padding: 16px 24px;
  border-radius: 8px;
`;

const Section = styled.section`
  margin: 40px 0;
  header {
    font-size: 20px;
    border-bottom: 2px dotted rgba(255, 255, 255, 0.12);
    label {
      padding: 8px 0;
    }
  }
`;

/**
 * Section of all legislators and controls
 *
 * @param {Object[]} props.legislator
 * @param {String[]} props.selectedLegislatorIds
 * @param {Object} props.doneLegislatorsMap - id to true map
 * @param {function} props.onSelectionChange
 */
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
      }, {}),
    [legislators]
  );

  const selectedIdMap = useMemo(
    () =>
      selectedLegislatorIds.reduce((agg, id) => {
        agg[id] = true;
        return agg;
      }, {}),
    [selectedLegislatorIds]
  );

  return (
    <Container>
      <PositionSelector
        legislators={legislators}
        selectedIdMap={selectedIdMap}
        onChange={onSelectionChange}
      />
      {Object.keys(legislatorsByArea).map(area => (
        <LegislatorSection
          key={area}
          area={area}
          selectedIdMap={selectedIdMap}
          legislators={legislatorsByArea[area]}
          onChange={onSelectionChange}
        />
      ))}
    </Container>
  );
}

function PositionSelector({ legislators, selectedIdMap, onChange = () => {} }) {
  // position to total map
  const positionTotalMap = useMemo(
    () =>
      legislators.reduce((agg, { id, position }) => {
        agg[position] = agg[position] || 0;
        agg[position] += 1;

        return agg;
      }, {}),
    [legislators]
  );

  // position to count map
  const positionCountMap = useMemo(
    () =>
      legislators.reduce((agg, { id, position }) => {
        agg[position] = agg[position] || 0;
        if (selectedIdMap[id]) {
          agg[position] += 1;
        }
        return agg;
      }, {}),
    [legislators, selectedIdMap]
  );

  const selectedCount = Object.keys(selectedIdMap).length;

  const handleToggle = useCallback(
    e => {
      const toggledPosition = e.target.value;

      if (positionCountMap[toggledPosition] === 0) {
        // select all in platform
        onChange(
          legislators
            .filter(
              ({ position, id }) =>
                position === toggledPosition || selectedIdMap[id]
            )
            .map(({ id }) => id)
        );
      } else {
        // deselect all
        onChange(
          legislators
            .filter(
              ({ position, id }) =>
                position !== toggledPosition && selectedIdMap[id]
            )
            .map(({ id }) => id)
        );
      }
    },
    [positionCountMap, legislators, onChange, selectedIdMap]
  );

  const handleAllToggle = useCallback(() => {
    if (selectedCount === 0) {
      onChange(legislators.map(({ id }) => id));
    } else {
      onChange([]);
    }
  }, [selectedCount, legislators]);

  return (
    <PositionCheckboxList>
      <li>
        <label style={{ fontWeight: 'bold', color: '#FF5368' }}>
          <Checkbox
            onChange={handleAllToggle}
            checked={selectedCount === legislators.length}
            isIndeterminate={
              0 < selectedCount && selectedCount < legislators.length
            }
          />
          全選
        </label>
      </li>
      {Object.keys(positionTotalMap).map(p => (
        <li key={p}>
          <label>
            <Checkbox
              value={p}
              onChange={handleToggle}
              checked={positionCountMap[p] === positionTotalMap[p]}
              isIndeterminate={
                0 < positionCountMap[p] &&
                positionCountMap[p] < positionTotalMap[p]
              }
            />{' '}
            {p}
          </label>
        </li>
      ))}
    </PositionCheckboxList>
  );
}

/**
 * Legislator control of one section area
 *
 * @param {string} props.area - Legislator section area
 * @param {object[]} props.legislators - legislators of this section
 * @param {object} props.selectedIdMap
 * @param {function} props.onChange
 */
function LegislatorSection({
  area = '',
  legislators = [],
  selectedIdMap = {},
  onChange = () => {},
}) {
  const selectedCount = legislators.filter(({ id }) => selectedIdMap[id])
    .length;

  const handleSectionToggle = useCallback(
    e => {
      if (selectedCount === 0) {
        // Select all in section
        const newMap = { ...selectedIdMap };
        legislators.forEach(({ id }) => {
          newMap[id] = true;
        });

        onChange(Object.keys(newMap));
      } else {
        const legislatorMap = legislators.reduce((agg, { id }) => {
          agg[id] = true;
          return agg;
        }, {});
        // deselect all in legislators
        onChange(Object.keys(selectedIdMap).filter(id => !legislatorMap[id]));
      }
    },
    [legislators, onChange, selectedCount, selectedIdMap]
  );

  const handleSingleToggle = useCallback(
    e => {
      const selectedId = e.target.value;

      if (selectedIdMap[selectedId]) {
        // Deselect this
        onChange(Object.keys(selectedIdMap).filter(id => id !== selectedId));
      } else {
        // Select this
        onChange(Object.keys(selectedIdMap).concat(selectedId));
      }
    },
    [legislators, selectedIdMap, onChange]
  );

  return (
    <Section>
      <header>
        <label>
          <Checkbox
            onChange={handleSectionToggle}
            isIndeterminate={
              0 < selectedCount && selectedCount < legislators.length
            }
            checked={selectedCount === legislators.length}
          />{' '}
          {area}
        </label>
      </header>
      <CheckboxList>
        {legislators.map(({ id, name }) => (
          <li key={id}>
            <label>
              <Checkbox
                key={id}
                value={id}
                onChange={handleSingleToggle}
                checked={!!selectedIdMap[id]}
              />{' '}
              {name}
            </label>
          </li>
        ))}
      </CheckboxList>
    </Section>
  );
}

export default LegislatorSections;
