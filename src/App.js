import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="Company">
          <strong>Emerging Markets</strong><br/>
          123 south park st.<br/>
          Los Angeles, CA 90062<br/>
          (323)-999-2345
        </div>
        <div className="invoiceInfo">
          <div className="listed">
            <a>Customer #</a>
            <a>1234</a>
          </div>
          <div className="listed">
            <a>Invoice Number</a>
            <a>#123</a>
          </div>
          <div className="listed">
            <a>Date</a>
            <a>01-23-22</a>
          </div>
        </div>
      </div>
      <div className="invoiceNames">
        <h1>Invoice</h1>
        <table className="items">
          <tr className="headerRow">
            <th className="colHead">#</th>
            <th className="colHead">Item</th>
            <th className="colHead">Description</th>
            <th className="colHead">Qty</th>
            <th className="colHead">Price</th>
            <th className="colHead">Total</th>
            <th className="colHead"></th>
          </tr>
          <tr className="dataRow">
            <td className="tableData">1</td>
            <td className="tableData">Food</td>
            <td className="tableData">Pizza Hut</td>
            <td className="tableData">5</td>
            <td className="tableData"> $10</td>
            <td className="tableData">$50</td>
            <td className="tableData">X</td>
          </tr>
          <tr className="dataRow">
            <td className="tableData">1</td>
            <td className="tableData">Food</td>
            <td className="tableData">Pizza Hut</td>
            <td className="tableData">5</td>
            <td className="tableData"> $10</td>
            <td className="tableData">$50</td>
            <td className="tableData">X</td>
          </tr>
        </table>
        <button className="addItem">+ Add Item</button>
      </div>
      <div className="totalRow">
        <table className="taxTable">
          <td>Tax Rate%</td>
          <td>15</td>
        </table>
        <table className="totalTable">
          <tr>
            <td>Subtotal</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>tax</td>
            <td>$6</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$56</td>
          </tr>
        </table>
      </div>
      <button onClick={handlePayButtonClick} >Pay Now</button>
      <div className="modal">
        <h1>hello</h1>
      </div>
    </div>

  );
  function handlePayButtonClick(){
    alert();
  }
}

export default App;
