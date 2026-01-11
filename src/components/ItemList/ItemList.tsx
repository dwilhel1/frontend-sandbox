import type { FC } from 'react';
import type { Provider } from '../../app/types';

interface Props {
    items: Provider[]
}

export const ItemList: FC<Props> = ({items = []}) => (
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
                <tr key={`row-${item.providerid.toString()}`}>
                    <td key={`cell-${item.providerid.toString()}`}>{item.npi}</td>
                    <td key={`cell-${item.firstname.toString()}`}>{item.firstname}</td>
                    <td key={`cell-${item.lastname.toString()}`}>{item.lastname}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
