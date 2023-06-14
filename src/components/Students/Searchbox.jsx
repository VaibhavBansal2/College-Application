import { useState, React } from 'react';
import Box from '@mui/material/Box';
import SearchBar from './Searchbar';
import Student from './Student';
import { FixedSizeList } from 'react-window';

export default function VirtualizedList({ id, onclick, StudentData }) {
    function renderRow(props) {
        const { index, style } = props;
        const student = filterData[index];
        const current = (student.id === id)
        return (
            <div style={style} key={index} onClick={() => onclick(student.id)}>
                <Student student={student} curr={current} />
            </div>
        );
    }

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value.toLowerCase());
    };

    var filterData = (searchText) ? StudentData.filter(item =>
        item.Name.toLowerCase().startsWith(searchText) || item.id.toString().startsWith(searchText) || item.Department.toLowerCase().startsWith(searchText)
    ) : StudentData

    return (
        <Box sx={{ width: '100%', height: 400, maxWidth: 200, bgcolor: 'background.paper', cursor: 'pointer' }}>
            <SearchBar onChange={handleSearchChange} />
            {filterData.length ?
                <FixedSizeList
                    height={285}
                    itemSize={65}
                    itemCount={filterData.length}
                    overscanCount={15}
                >
                    {renderRow}
                </FixedSizeList>
                : <Box margin={1} textAlign={'center'}>No Student Found</Box>
            }
        </Box>
    );
}