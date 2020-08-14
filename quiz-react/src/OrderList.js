import React, { Component } from 'react';

class OrderList extends Component {
  state = {
      data:'',
  }

  /*
  async componentDidMount() {
    const result = await fetch('/list', {
      method: 'GET',
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      return Promise.reject();
    });
    console.log(result);
  }
  */

  render() {
    return (
      <div>
          <table>
              <tr>
                  <td>名字</td>
                  <td>price</td>
                  <td>quantity</td>
              </tr>
          </table>
      </div>
    );
  }
}

export default OrderList;