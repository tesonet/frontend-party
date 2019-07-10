import styled from "styled-components";

const Table = styled.table`
  border-spacing: 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
  width: 100%;
  box-sizing: border-box;
  font-weight: 300;

  td {
    padding: 15px;
    color: #666666;
    font-size: 16px;
  }

  tr {
    justify-content: space-between;
    display: flex;
  }

  thead {
    background: #f5f5f5;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    display: block;
    flex: 0 0 auto;

    th {
      color: #cfcfcf;
      text-transform: uppercase;
      font-weight: 300;
      padding: 18px 15px 14px 15px;
      cursor: pointer;
      font-size: 14px;
      letter-spacing: 1.4px;
      text-transform: uppercase;

      &:hover {
        background: #bdbdbd;
      }
    }
  }

  tbody {
    overflow-y: auto;
    flex: 1;
    display: block;

    .table-row__item {
      border-bottom: 1px solid #e6e6e6;
      display: block;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Table;
