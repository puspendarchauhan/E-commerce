// export default function Header() {
//   return (
//     <header
//       style={{
//         background: "black",
//         color: "white",
//         padding: "15px",
//         textAlign: "center",
//       }}
//     >
//       <h1>My E-Commerce Store</h1>
//       <p>Welcome to our website</p>
//     </header>
//   );
// }

export default function Header({cartCount})
{
    return(<div className="header">
        <img src="https://img.freepik.com/premium-vector/ecommerce-logo-design_624194-152.jpg" alt="" />
        <p>Cart Item Count:{cartCount}</p>
    </div>);
}