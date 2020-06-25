import css from 'styled-jsx/css'

export default css.global`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    background: #efefef;
    color: #333;
    font-family: Muli;
    height: 100vh;
  }
  h1 {
    font-size: 25px;
    font-weight: 700;
    margin: 0;
  }
  p {
    margin-bottom: 10px;
  }
  .card {
    background: white;
    width: 300px;
    height: 250px;
    padding: 30px 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
  }
  .product-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card img {
      width: 150px;
  }
  .category {
    display: block;
    font-size: 10px;
    margin: 10px 0 0;
  }
  .container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
  .title {
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  .product-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
  .half-section {
    width: 50%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .white {
    background: white;
  }
  small {
    cursor: pointer;
  }
  small:hover {
    font-weight: bold;
  }
  .middle {
    width: 50%;
  }
  .additonals span:not(:first-child) {
    margin-left: 10px; 
  }
  .qty-price {
    display: grid;
    grid-template-columns: 4fr 1fr;
    margin: 20px 0;
  }
  .qty{
    display: flex;
  }
  .price {
    font-weight: 700;
    text-align: end;
  }
  .minus {
    width: 30px;
    background: #f1f1f1;
    text-align: center;
    border-radius: 50%;
    margin-right: 10px;
  }

  .add {
    width: 30px;
    background: #fff;
    text-align: center;
    border: 1px solid #000;
    border-radius: 50%;
    margin-left: 10px;
  }
  .btn-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    width: 70%;
  }
  .add-to-cart {
    height: 40px;
    background: #0b7fda;
    border: none;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-size: 10px;
    cursor: pointer;
  }
  .add-to-cart:hover {
    background: #044d86;
  }
  .subscribe {
    background: none;
    border: none;
    text-transform: uppercase;
    color: #7d7d7d;
    font-weight: 500;
    cursor: pointer;
  }
  .subscribe:hover {
    border: 1px solid #7d7d7d;
  }
`