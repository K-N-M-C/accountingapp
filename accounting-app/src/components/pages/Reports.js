import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Icon, Button, Header, Modal } from "semantic-ui-react";
import IncomeButton from "../IncomeButton";
import IncomeButton2 from "../IncomeButton2";

export default function WithFilter() {

  const value = "Total Balances:".padStart(20);

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Account Name",
        field: "accountName",
        textAlign: "center", 
        sort: 'disabled',       
        width: 200,

        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Account Number",
        field: "accountNumber",
        sort: 'disabled',
        width: 200,
        textAlign: "center",
      },      
      {
        label: "Debits",
        field: "debit",
        sort: 'disabled',
        width: 150,
      },

      {
        label: "Credits",
        field: "credit",
        sort: 'disabled',
        width: 150,
      },
      
    ],
    rows: [
      {
        accountName: "Cash",
        accountNumber: "101",
        debit: "$15,000",
        credit: "10,000",
       
      },
      {
        accountName: "Accounts Receivable",
        accountNumber: "102",
        debit: "$15,000",
        credit: "10,000",        
      },
      {
        accountName: "Supplies",
        accountNumber: "103",
        debit: "$15,000",
        credit: "10,000",
        
      },
      {
        accountName: "Contributed Capital",
        accountNumber: "201",
        
        debit: "$15,000",
        credit: "10,000",       
        
      },
      {
        accountName: "Office Equipment",
        accountNumber: "104",
        debit: "$15,000",
        credit: "10,000",       
       
      },
      {
        accountName: "Prepaid Rent",
        accountNumber: "301",
        debit: "$15,000",
        credit: "10,000",              
      },
      {
        accountName: "Prepaid  Insurance",
        accountNumber: "302",        
        debit: "$15,000",
        credit: "10,000",              
      },
      {
        accountName: "Unearned Revenue",
        accountNumber: "401",        
        debit: "$15,000",
        credit: "10,000",
        
      },
      {
        accountName: "Accounts Payable",
        accountNumber: "501",        
        debit: "$15,000",
        credit: "10,000",        
      },
      {
        accountName: "Advertising",
        accountNumber: "303",        
        debit: "$15,000",
        credit: "10,000",        
      },
      {
        accountName: "Utilities",
        accountNumber: "304",        
        debit: "$15,000",
        credit: "10,000",
               
      },
      {
        accountName: "Depreciation Expense",
        accountNumber: "305",        
        debit: "$15,000",
        credit: "10,000",
               
      },
      {
        accountName: "Accumulated Depreciation",
        accountNumber: "502",        
        debit: "$15,000",
        credit: "10,000",        
      },
      {
        accountName: "Salaries Payable",
        accountNumber: "503",        
        debit: "$15,000",
        credit: "10,000",
        
      },
      {
        accountName: "Rent Expense",
        accountNumber: "306",       
        debit: "$15,000",
        credit: "10,000",        
      },
      {
        accountName: "Service Revenue",
        accountNumber: "402",        
        debit: "$15,000",
        credit: "10,000",               
      },
      {
        accountName: "Supplies Expense",
        accountNumber: "307",       
        debit: "$15,000",
        credit: "10,000",
              
      },
      {
        accountName: "Phone Expense",
        accountNumber: "308",        
        debit: "$15,000",
        credit: "10,000",        
      },      
    ],
  });

  const [datatable2, setDatatable2] = React.useState({
    columns: [
      {
        label: "----------",
        field: "tb",
        textAlign: "left", 
        sort: 'disabled',       
        width: 200,

        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
          "padding-left": "10px", 
        },
      },
      {
        label: "----------",
        field: "a1",
        sort: 'disabled',
        
      },      
      {
        label: "Debit Totals",
        field: "deb", 

        sort: 'disabled',
        width: 250,
      },

      {
        label: "Credit Totals",
        field: "cre",        
        sort: 'disabled',
        width: 250,
      },
      
    ], 
    rows: [
      {
        tb: value,
        a1: "",
        deb: "$55,243.00",
        cre: "$82,782.25",        
        
      }, ]
     
  }
  );

  return (
    <div>
    
    <div
      style={{
        marginTop: "5%",
        marginLeft: "1px",
        marginRight: "5px",
        textAlign: "center",
      }}
    >
    
      <div align="left" ><IncomeButton /> < br /> <IncomeButton2 /> < br /> </div>
      
      <Icon name="clipboard outline" size="huge" />
      <h1>Trial Balance</h1>

      <MDBDataTableV5
        hover
        data={datatable}
        paging= {false}
        filter="office"
        proSelect
        order={['accountNumber', 'asc' ]}
        searchTop
        searchBottom={false}
      />
      
      <MDBDataTableV5
        
        paging= {false}
        hover
        data={datatable2}        
        filter="office"
        proSelect 
        paging={false}            
        searchTop = {false}
        searchBottom={false}
      />  
      
    </div></div>
  );
}
