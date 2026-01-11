import type { FC } from 'react';
import type { Provider } from '../../app/types';

interface Props {
    items: Provider[],
    onRowClick?: (id: number) => () => void,
}

export const ItemList: FC<Props> = ({items = [], onRowClick}) => (
    <table>
        <thead>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">NPI</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => (
                <tr key={`row-${item.providerid.toString()}`} onClick={onRowClick?.(item.providerid)}>
                    <td key={`cell-${item.providerid.toString()}`} className='px-1'>{item.npi}</td>
                    <td key={`cell-${item.firstname.toString()}`} className='px-1'>{item.firstname}</td>
                    <td key={`cell-${item.lastname.toString()}`} className='px-1'>{item.lastname}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
