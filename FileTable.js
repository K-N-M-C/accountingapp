import React from "react";
import { Table } from "semantic-ui-react";

const FileTable = () => (
  <Table style={{ marginTop: "50px", marginRight: "10%" }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell> Account Name</Table.HeaderCell>
        <Table.HeaderCell>Account Number</Table.HeaderCell>
        <Table.HeaderCell>Account Description</Table.HeaderCell>
        <Table.HeaderCell>Initial Balance</Table.HeaderCell>
        <Table.HeaderCell>Debit</Table.HeaderCell>
        <Table.HeaderCell>Credit</Table.HeaderCell>
        <Table.HeaderCell>Balance</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Marie878</Table.Cell>
        <Table.Cell>87654312</Table.Cell>
        <Table.Cell>Test</Table.Cell>
        <Table.Cell>5000</Table.Cell>
        <Table.Cell>2400</Table.Cell>
        <Table.Cell>600</Table.Cell>
        <Table.Cell>2000</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Marie878</Table.Cell>
        <Table.Cell>87654312</Table.Cell>
        <Table.Cell>Test</Table.Cell>
        <Table.Cell>5000</Table.Cell>
        <Table.Cell>2400</Table.Cell>
        <Table.Cell>600</Table.Cell>
        <Table.Cell>2000</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Marie878</Table.Cell>
        <Table.Cell>87654312</Table.Cell>
        <Table.Cell>Test</Table.Cell>
        <Table.Cell>5000</Table.Cell>
        <Table.Cell>2400</Table.Cell>
        <Table.Cell>600</Table.Cell>
        <Table.Cell>2000</Table.Cell>
      </Table.Row>
      l
    </Table.Body>
  </Table>
);

export default FileTable;
