// import React from 'react';
// import {  ListGroup } from 'react-bootstrap';
// import shortid from 'shortid';
// import GoodsStore from '../store/NotesStore';
// import { observer, useLocalObservable } from "mobx-react-lite";

// const Goods = observer(() =>{
//     const itemStore = useLocalObservable(() => (GoodsStore))

//     console.log(itemStore.allGoods)
//     return(
//         <ListGroup>
//                 {
//                 itemStore.allGoods.map(item => 
//                     <ListGroup.Item key={shortid.generate()}>
//                         {item.title} {item.quantity}
//                     </ListGroup.Item>
//                 )
//                 }
//         </ListGroup>
//     )
// })

// export default Goods
