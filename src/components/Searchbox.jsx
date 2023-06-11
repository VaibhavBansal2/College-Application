import { useState, React } from 'react';
import Box from '@mui/material/Box';
import SearchBar from './Searchbar';
import StudentData from '../Student_data.json';
import Student from './Student';
import { FixedSizeList } from 'react-window';

export default function VirtualizedList() {
    function renderRow(props) {
        const { index, style } = props;
        const student = filterData[index];
        return (
            <div style={style} key={index}>
                <Student student={student} />
            </div>
        );
    }

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        console.log(event.target.value)
        setSearchText(event.target.value.toLowerCase());
    };

    var filterData = (searchText) ? StudentData.filter(item =>
        item.Name.toLowerCase().startsWith(searchText) || item.ID.toString().startsWith(searchText) || item.Department.toLowerCase().startsWith(searchText)
    ) : StudentData

    return (
        <Box sx={{ width: '100%', height: 400, maxWidth: 200, bgcolor: 'background.paper' }}>
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