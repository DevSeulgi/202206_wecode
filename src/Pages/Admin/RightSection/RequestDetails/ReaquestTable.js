import React, { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { useTable } from 'react-table';
import {
  selectIdState,
  setRequestListData,
  saveModalDealerState,
  setSelectListProgress,
} from '../../adminAtoms';

const ReaquestTable = ({ onClick }) => {
  const requestList = useRecoilValue(setRequestListData);
  const setNewDealer = useRecoilValue(saveModalDealerState);
  const setNewProgress = useRecoilValue(setSelectListProgress);
  const currentId = useRecoilValue(selectIdState);

  const newDealer = setNewDealer === '전체' && setNewDealer ? '' : setNewDealer;
  const formatList = requestList.map(
    ({
      estimate_request_date,
      quote_requested,
      dealer,
      process_state,
      estimate_id,
      ...rest
    }) => {
      return {
        ...rest,
        estimate_id,
        estimate_request_date: estimate_request_date.substr(0, 10),
        quote_requested: quote_requested.substr(0, 10),
        dealer: estimate_id === currentId ? newDealer || dealer : dealer,
        process_state:
          estimate_id === currentId
            ? setNewProgress || process_state
            : process_state,
      };
    }
  );
  const data = useMemo(
    () => formatList,
    [newDealer, setNewProgress, requestList]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'estimate_id',
      },
      {
        Header: '이름',
        accessor: 'owner',
      },
      {
        Header: '휴대폰',
        accessor: 'phone_number',
      },
      {
        Header: '차량번호',
        accessor: 'car_number',
      },
      {
        Header: '브랜드',
        accessor: 'manufacturer',
      },
      {
        Header: '모델명',
        accessor: 'trim',
      },
      {
        Header: '연식',
        accessor: 'model_year',
      },
      {
        Header: '견적요청일',
        accessor: 'estimate_request_date',
      },
      {
        Header: '지점',
        accessor: 'branch',
      },
      {
        Header: '담당자',
        accessor: 'dealer',
      },
      {
        Header: '진행상태',
        accessor: 'process_state',
      },
      {
        Header: ' ',
        accessor: 'quote_requested',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ marginTop: '15px' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: '#dbdbdb',
                  color: 'black',
                  fontWeight: '500',
                  textAlign: 'center',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  paddingLeft: '25px',
                  paddingRight: '25px',
                  width: 'auto',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        style={{
          borderLeft: 'solid 1px #e0e0e0',
          borderRight: 'solid 1px #e0e0e0',
        }}
      >
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr
              onClick={() => onClick(row.values.estimate_id)}
              {...row.getRowProps()}
            >
              {row.cells.map(cell => {
                return (
                  <td
                    key={cell.value}
                    {...cell.getCellProps()}
                    style={{
                      padding: '8px',
                      borderBottom: 'solid 1px #e0e0e0',
                      background: 'white',
                      textAlign: 'center',
                      paddingTop: '15px',
                      paddingBottom: '15px',
                      fontWeight: '500',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReaquestTable;
