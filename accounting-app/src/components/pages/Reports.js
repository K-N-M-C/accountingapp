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
        debit: "",
        credit: "$8,875.00",
       
      },
      {
        accountName: "Accounts Receivable",
        accountNumber: "102",
        debit: "$3,450.00",
        credit: "",        
      },
      {
        accountName: "Supplies",
        accountNumber: "103",
        debit: "$1,020.00",
        credit: "",
        
      },
      {
        accountName: "Contributed Capital",
        accountNumber: "201",
        
        debit: "",
        credit: "$20,250.00",       
        
      },
      {
        accountName: "Office Equipment",
        accountNumber: "104",
        debit: "$9,300.00",
        credit: "",       
       
      },
      {
        accountName: "Prepaid Rent",
        accountNumber: "301",
        debit: "$3,000.00",
        credit: "",              
      },
      {
        accountName: "Prepaid  Insurance",
        accountNumber: "302",        
        debit: "$1,650.00",
        credit: "",              
      },
      {
        accountName: "Unearned Revenue",
        accountNumber: "401",        
        debit: "",
        credit: "$1,000.00",
        
      },
      {
        accountName: "Accounts Payable",
        accountNumber: "501",        
        debit: "",
        credit: "$1,000.00",        
      },
      {
        accountName: "Advertising",
        accountNumber: "303",        
        debit: "$120.00",
        credit: "",        
      },
      {
        accountName: "Utilities",
        accountNumber: "304",        
        debit: "$200.00",
        credit: "",
               
      },
      {
        accountName: "Depreciation Expense",
        accountNumber: "305",        
        debit: "$500.00	",
        credit: "",
               
      },
      {
        accountName: "Accumulated Depreciation",
        accountNumber: "502",        
        debit: "",
        credit: "$500.00",        
      },
      {
        accountName: "Salaries Payable",
        accountNumber: "503",        
        debit: "",
        credit: "$20.00",
        
      },
      {
        accountName: "Rent Expense",
        accountNumber: "306",       
        debit: "$1,500.00	",
        credit: "",        
      },
      {
        accountName: "Service Revenue",
        accountNumber: "402",        
        debit: "",
        credit: "$13,425.00",               
      },
      {
        accountName: "Supplies Expense",
        accountNumber: "307",       
        debit: "$980.00",
        credit: "",
              
      },
      {
        accountName: "Phone Expense",
        accountNumber: "308",        
        debit: "$130.00",
        credit: "",        
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
        deb: "$27,320.00",
        cre: "$45,070.00",        
        
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
