import React, { FC, MouseEvent } from 'react';
import { TableRow } from '@mui/material';
import { Row } from 'react-table';
import { MRT_TableBodyCell } from './MRT_TableBodyCell';
import { useMaterialReactTable } from '../useMaterialReactTable';
import { MRT_TableDetailPanel } from './MRT_TableDetailPanel';
import { MRT_TableExpandButton } from '../inputs/MRT_TableExpandButton';
import { MRT_SelectCheckbox } from '../inputs/MRT_SelectCheckbox';

interface Props {
  row: Row<object>;
}

export const MRT_TableBodyRow: FC<Props> = ({ row }) => {
  const { renderDetailPanel, onRowClick, enableSelection } = useMaterialReactTable();

  return (
    <>
      <TableRow
        onClick={(event: MouseEvent<HTMLTableRowElement>) =>
          onRowClick?.(event, row)
        }
        {...row.getRowProps()}
      >
        {enableSelection && <MRT_SelectCheckbox row={row} />}
        {renderDetailPanel && <MRT_TableExpandButton row={row} />}
        {row.cells.map((cell, index) => (
          <MRT_TableBodyCell key={`${index}-${cell.value}`} cell={cell} />
        ))}
      </TableRow>
      {renderDetailPanel && <MRT_TableDetailPanel row={row} />}
    </>
  );
};
