import { useNavigate } from "react-router-dom";
import "./Table.css";
const Table = ({
    caption,
    headerData,
    tableData,
    disableRowClick,
    showthead,
    showBorder,
}) => {
    const navigate = useNavigate();
    return (
        <div className="table-container">
            <table className="table-module">
                {/* <caption className="caption-table-module">{caption}</caption> */}
                {(showthead === undefined || showthead === true) && (
                    <thead>
                        <tr className="tr-table-module">
                            {Array.isArray(headerData)
                                ? headerData?.map((item, index) => {
                                    return (
                                        <th
                                            className="th-table-module add-table-border-bottom"
                                            key={"th" + index}
                                            style={{
                                                minWidth: item?.minWidth,
                                                maxWidth: item?.maxWidth,
                                                width: item?.width,
                                                textAlign: item?.textAlign,
                                                fontSize: item?.fontSize || "16px",
                                                color: item?.color || "black",
                                            }}
                                        >
                                            {item?.name}
                                        </th>
                                    );
                                })
                                : null}
                        </tr>
                    </thead>
                )}

                <tbody className="dynamic-table-tbody">
                    {tableData.length !== 0
                        ? Array.isArray(tableData)
                            ? tableData.map((item, index) => {
                                return (
                                    <tr
                                        className="dynamic-table-tr tr-table-module"
                                        key={"tr" + index}
                                        style={{
                                            cursor: !disableRowClick ? "pointer" : "default",
                                        }}
                                        onClick={
                                            !disableRowClick
                                                ? () => navigate(`${item["onClickTr"]}`)
                                                : undefined
                                        }
                                    >
                                        {item["tableViewInfo"].map((tableDataItem, tdIndex) => {
                                            return (
                                                <td
                                                    className={
                                                        showBorder === undefined || showBorder === true
                                                            ? "td-table-module add-table-border-bottom"
                                                            : "td-table-module"
                                                    }
                                                    key={"td" + tdIndex}
                                                    data-cell={headerData[tdIndex]?.name}
                                                    hide-on-mobile={
                                                        Array.isArray(item["hideOnMobile"])
                                                            ? item["hideOnMobile"][tdIndex]
                                                                ? "none"
                                                                : "initial"
                                                            : "initial"
                                                    }
                                                    style={{
                                                        textAlign: headerData[tdIndex]?.textAlign,
                                                        fontWeight:
                                                            headerData[tdIndex]?.tdStyle?.fontWeight || 400,
                                                        fontSize:
                                                            headerData[tdIndex]?.tdStyle?.fontSize ||
                                                            "16px",
                                                        color:
                                                            headerData[tdIndex]?.tdStyle?.color || "black",
                                                    }}
                                                >
                                                    {tableDataItem}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })
                            : null
                        : null}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
