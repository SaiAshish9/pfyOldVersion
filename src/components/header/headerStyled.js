import styled from "styled-components";

const MyHeader = styled.header`
display:flex;
/* position:sticky; */
/* position:fixed; */
.logo{
    margin-left: 90px;
    cursor:pointer;
}
  .headerNav{
      width:100%;
      margin-right: 108px;
      display:flex;
      justify-content:flex-end;
      align-items:center;
      color:black;
  }
    .myLink {
      text-decoration: none;
      padding:0px 20px;
  }
`;

export { MyHeader };
