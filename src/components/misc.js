
// import { Header1 } from "./components/Header";
// const ele = document.createElement("h1")
// ele.innerHTML = "hello from js"
// const root = document.getElementById("root")
// root.appendChild(ele)


// const heading = React.createElement("h1", {}, "hello from react")
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

// const firstName = React.createElement("h1", {
//     id: "title",
//     key: "2"
// }, "Abdul Rehman Mujtaba")

// console.log(firstName);

// const lastName = React.createElement("h1", {
//     id: "title",
// }, "Khan")

// const fullName = React.createElement("div", {}, [firstName, lastName])

/**Component : everything is a component in react , a component is function that returns a react element or anything
 * 
 * 1 Functional Component: returns a function
 * 2 Class Based Component: 
 */

// const jsx = (
//    <li key="1">this is jsx</li>
// )

// const ReactComponent = () => {
//     return (
//         <>
//           {/* {lastName}   //use JSX in react Component with Curly Braces */}
//            <ul>
//               <li>Name</li>
//               <li>Area</li>
//               <li>Work</li>
//            </ul>
//             {/* <ReactComponent1 /> */}

//             {jsx}

//             {ReactComponent1()}
//         </>
//     )
// }

// const ReactComponent1 = () => (
//     <>
//         <h1>React Component 1</h1>
//         <h2>This is a React Component</h2>
//     </>
// )

// const HeaderComponent = () => {
//     return(
//         <div style={{display:"flex", justifyContent:"space-evenly"}}>
//            <div>Logo</div>
//            <input placeholder="Search" type="text"></input>
//            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Fimage%2F153794&psig=AOvVaw0pBX6OjZKlJqKBExT2UuMo&ust=1699516908350000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMihkf33s4IDFQAAAAAdAAAAABAE"></img>

//         </div>
//     )
// }


                {/* <ShoeCard {...ShoesList[0]}/>
            <ShoeCard {...ShoesList[1]} />
            <ShoeCard {...ShoesList[2]} />
            <ShoeCard {...ShoesList[3]} />
            <ShoeCard {...ShoesList[4]} />
            <ShoeCard {...ShoesList[5]} />
            <ShoeCard {...ShoesList[6]} />
            <ShoeCard {...ShoesList[7]} />
            <ShoeCard {...ShoesList[8]} />
            <ShoeCard {...ShoesList[9]} />
            <ShoeCard {...ShoesList[10]} />
            <ShoeCard {...ShoesList[11]} />
            <ShoeCard {...ShoesList[12]} />
        <ShoeCard {...ShoesList[13]} /> */}

        
// using forEach
// const Body = () => {
//         const ShoeCards = [];


//         ShoesList.forEach((shoe) => {
//             ShoeCards.push(<ShoeCard key={shoe.id} {...shoe} /> )
//         })

//         return(
//             <div className="shoecard">{ShoeCards}</div>
//         )

// }