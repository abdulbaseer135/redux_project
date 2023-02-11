import React from "react";

function Header(props) {
  //console.log("Header", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img
          alt="No image found"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFY1udSqXLWQInhtQbRV31NuaADqJU0PHULWuAS5u3fIJ25kfZvD3KRCWpr3pQAEzJEwA&usqp=CAU"
        />
      </div>
    </div>
  );
}
export default Header;
