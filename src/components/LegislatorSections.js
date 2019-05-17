import React, { useMemo, useCallback } from 'react';
import styled from '@emotion/styled';
import Checkbox from './Checkbox';

const Container = styled.div`
  li {
    display: inline-block;
    padding-right: 2em;
  }

  label {
    min-width: 105px;
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
 * @param {Object[]} props.legislators
 * @param {String[]} props.selectedLegislatorIds
 * @param {Object} props.doneLegislatorMap - id to true map
 * @param {function} props.onSelectionChange
 */
function LegislatorSections({
  legislators = [],
  selectedLegislatorIds = [],
  doneLegislatorMap = {},
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

/**
 * Logic of selecting legislators with a specific spreadsheet column being true
 *
 * @param {string} targetKey - the column name to look up
 * @param {object[]} legislators
 * @param {object} selectedIdMap
 * @param {function} onChange - callback to call when checkbox is checked
 * @returns {object} checkboxProps - When checked, all legislators with the column being true will be selected/deselected
 */
function useColumnTrueCheckbox(
  targetKey,
  legislators,
  selectedIdMap,
  onChange
) {
  const targetedSelectedCount = useMemo(
    () =>
      legislators.filter(
        legislator => legislator[targetKey] && selectedIdMap[legislator.id]
      ).length,
    [legislators, selectedIdMap, targetKey]
  );
  const targetedSelectedTotal = useMemo(
    () => legislators.filter(legislator => legislator[targetKey]).length,
    [legislators, targetKey]
  );

  const handleTargetedToggle = useCallback(
    e => {
      if (targetedSelectedCount === 0) {
        // select all in platform
        onChange(
          legislators
            .filter(
              legislator =>
                legislator[targetKey] || selectedIdMap[legislator.id]
            )
            .map(({ id }) => id)
        );
      } else {
        // deselect all
        onChange(
          legislators
            .filter(
              legislator =>
                !legislator[targetKey] && selectedIdMap[legislator.id]
            )
            .map(({ id }) => id)
        );
      }
    },
    [legislators, onChange, selectedIdMap, targetKey, targetedSelectedCount]
  );

  return useMemo(
    () => ({
      onChange: handleTargetedToggle,
      checked: targetedSelectedCount === targetedSelectedTotal,
      isIndeterminate:
        0 < targetedSelectedCount &&
        targetedSelectedCount < targetedSelectedTotal,
    }),
    [targetedSelectedCount, targetedSelectedTotal, handleTargetedToggle]
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

  const handlePositionToggle = useCallback(
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
  }, [selectedCount, onChange, legislators]);

  const mutualLivingCheckboxProps = useColumnTrueCheckbox(
    'signedmutualliving',
    legislators,
    selectedIdMap,
    onChange
  );
  const act760CheckboxProps = useColumnTrueCheckbox(
    'signed760',
    legislators,
    selectedIdMap,
    onChange
  );
  const civilCheckboxProps = useColumnTrueCheckbox(
    'signed10',
    legislators,
    selectedIdMap,
    onChange
  );
  const vote4CheckboxProps = useColumnTrueCheckbox(
    'vote4',
    legislators,
    selectedIdMap,
    onChange
  );

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
              onChange={handlePositionToggle}
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
      <li>
        <label style={{ fontWeight: 'bold', color: '#FF5368' }}>
          <Checkbox {...mutualLivingCheckboxProps} />
          連署
        </label>
        <a
          href="https://www.facebook.com/TaiwanHotline/photos/a.323404934262/10156467464324263/"
          target="_blank"
          rel="noopener noreferrer"
        >
          12 案施行法(賴士葆)
        </a>
      </li>
      <li>
        <label style={{ fontWeight: 'bold', color: '#FF5368' }}>
          <Checkbox {...act760CheckboxProps} />
          連署
        </label>
        <a
          href="https://www.storm.mg/article/1242192"
          target="_blank"
          rel="noopener noreferrer"
        >
          748+12 施行法(林岱樺)
        </a>
      </li>
      <li>
        <label style={{ fontWeight: 'bold', color: '#FF5368' }}>
          <Checkbox {...civilCheckboxProps} />
          連署
        </label>
        <a
          href="https://www.upmedia.mg/news_info.php?SerialNo=61646"
          target="_blank"
          rel="noopener noreferrer"
        >
          民法婚姻一男一女(黃昭順)
        </a>
      </li>
      <li>
        <label style={{ fontWeight: 'bold', color: '#FF5368' }}>
          <Checkbox {...vote4CheckboxProps} />
          表決贊成
        </label>
        <a
          href="https://www.setn.com/News.aspx?NewsID=542496"
          target="_blank"
          rel="noopener noreferrer"
        >
          748施行法
        </a>
      </li>
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
    [selectedIdMap, onChange]
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

export default React.memo(LegislatorSections);
