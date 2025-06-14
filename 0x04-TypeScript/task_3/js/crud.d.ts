// js/crud.d.ts
import { RowID, RowElement } from './interface';

export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): number;