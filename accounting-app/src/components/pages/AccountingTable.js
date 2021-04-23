import React from "react";
import { Table } from "semantic-ui-react";

export default function Cash() {
  return (
    <div>
      <Table style={{ marginTop: "50px", marginRight: "10em" }}>
        <Table.Header style={{ textAlign: "center" }}>
          <Table.Row>
            <Table.HeaderCell> Entry ID</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Entry Type</Table.HeaderCell>
            <Table.HeaderCell>Debit</Table.HeaderCell>
            <Table.HeaderCell>Credit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row style={{ textAlign: "center" }}>
            <Table.Cell>
              <a href="#" onClick={6534}>
                6543
              </a>
            </Table.Cell>
            <Table.Cell>06/5/2019</Table.Cell>
            <Table.Cell>Regular</Table.Cell>
            <Table.Cell>$1300</Table.Cell>
            <Table.Cell>$534</Table.Cell>
          </Table.Row>
          <Table.Row style={{ textAlign: "center" }}>
            <Table.Cell>
              <a href="#" onClick={6822}>
                6822
              </a>
            </Table.Cell>
            <Table.Cell>09/20/2018</Table.Cell>
            <Table.Cell>Regular</Table.Cell>
            <Table.Cell>$2421</Table.Cell>
            <Table.Cell>$1248</Table.Cell>
          </Table.Row>
          <Table.Row style={{ textAlign: "center" }}>
            <Table.Cell>
              <a href="#" onClick={6418}>
                6418
              </a>
            </Table.Cell>
            <Table.Cell>10/04/2019</Table.Cell>
            <Table.Cell>Regular</Table.Cell>
            <Table.Cell>$1289</Table.Cell>
            <Table.Cell>$1356</Table.Cell>
          </Table.Row>
          <Table.Row style={{ textAlign: "center" }}>
            <Table.Cell>
              <a href="#" onClick={6418}>
                6418
              </a>
            </Table.Cell>
            <Table.Cell>10/04/2019</Table.Cell>
            <Table.Cell>Regular</Table.Cell>
            <Table.Cell>$1289</Table.Cell>
            <Table.Cell>$1356</Table.Cell>
          </Table.Row>
          <Table.Row style={{ textAlign: "center" }}>
            <Table.Cell>
              <a href="#" onClick={6418}>
                6418
              </a>
            </Table.Cell>
            <Table.Cell>10/04/2019</Table.Cell>
            <Table.Cell>Regular</Table.Cell>
            <Table.Cell>$1289</Table.Cell>
            <Table.Cell>$1356</Table.Cell>
          </Table.Row>
          <Table.Row style={{ textAlign: "center" }}>
            <Table.Cell> </Table.Cell>
            <Table.Cell> </Table.Cell>
            <Table.Cell>Total Balance</Table.Cell>
            <Table.Cell> $3459</Table.Cell>
            <Table.Cell> </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
