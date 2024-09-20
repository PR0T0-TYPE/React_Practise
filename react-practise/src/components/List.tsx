import { Checkbox, Table, TableCell, TableHead, TableRow } from "@mui/material";
interface AcademicYearItem {
    Id: string;
    Name: string;
    Value: string;
    isActive: boolean;
}

interface ListProps {
    itemList: AcademicYearItem[];
    clickRow: any;
}
const List = ({ itemList, clickRow }: ListProps) => {
    function clickRows(Value: any) {
        let returnValue = itemList.map((item: any) => {
            return (
                { ...item, isActive: item.Value === Value ? !item.isActive : item.isActive }
            )
        })
        clickRow(returnValue)
    }

function isAllChecked(){
    let flag = true;
    itemList?.map((item, i) => {
        if(!item.isActive) {
            flag = false
        }
    })
    return flag
}

function checkAll() {
    let newlist  = itemList.map((item)=>{
        return(
            {...item, isActive: !isAllChecked()}
        )
    })
    clickRow(newlist)
}

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#d4d4d4' }}>
                        <TableCell>
                            <Checkbox checked={isAllChecked()} onClick={checkAll} />
                        </TableCell>
                        <TableCell>
                            Name (Academic Year)
                        </TableCell>
                    </TableRow>
                </TableHead>
                {itemList?.length > 0 && itemList?.map((item, i) => {
                    return (
                        <TableRow onClick={() => { clickRows(item.Value) }}
                            key={i} sx={{ backgroundColor: (item?.isActive ? '#e9d5ff' : '#f5f5f5') }}>
                            <TableCell>
                                <Checkbox checked={item.isActive} />
                            </TableCell>
                            <TableCell>
                                {item.Name}
                            </TableCell>
                        </TableRow>
                    )
                })}

            </Table>
        </>
    )
}

export default List;