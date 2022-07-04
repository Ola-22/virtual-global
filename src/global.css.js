import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @font-face {
font-family: "Montserrat";
src: local("Montserrat"),
    url("./fonts/Montserrat-Medium.otf") format("truetype");
    font-display: fallback;
   }

   @font-face {
  font-family: "Cairo";
  src: local("Cairo"),
    url("./fonts/Cairo-VariableFont_wght.otf") format("truetype");
    font-display: fallback;
   }
   

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  .App{
font-family: Verdana;
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
overflow: hidden;
width: 100%;
}

a{
text-decoration: none;
}

input, select{
outline: none;
}


.active{
display: block;
}

.inActive{
display: none;
}

.back-drop {
background: rgba(63, 61, 61, 0.692);
height: 100%;
position: fixed;
transition: all 1.3s;
width: 100%;
left: 0;
top: 0;
}

li{
list-style: none;
}

button{
cursor: pointer;
}

.disabled{
opacity: 0.5;
}

.error{
display: flex;
font-size: 10px;
font-weight: normal;
color: red;
width: 90%;
}

.menu-items button {
color: inherit;
font-size: inherit;
border: none;
background-color: transparent;
cursor: pointer;
width: 100%;
min-height: 71px;
text-transform: uppercase;

}
@media (max-width: 980px) {
  .menu-items button{
     min-height: 20px;
        max-height: 30px;
  }  
  }

.menu-items a,
.menu-items button {
padding: 0.7rem 1rem;
display: flex;
align-items: center;
justify-content: center;
}

.arrow::after {
content: "";
display: inline-block;
margin-inline-start: 0.28em;
vertical-align: 0.09em;
border-top: 0.42em solid;
border-inline-end: 0.32em solid transparent;
border-inline-start: 0.32em solid transparent;
}
`;
