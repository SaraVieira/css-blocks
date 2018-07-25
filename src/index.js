import React from 'react'
import ReactDOM from 'react-dom'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import Home from './Pages/Home'
import Question from './Pages/Question'
import Done from './Pages/Done'
import BrowserRouter from 'react-router-dom/BrowserRouter'
// import objstr from 'obj-str';
// import styles from './button.block.css';

// export default function Button({ size='medium', inverse, icon, children }) {
//   const style = objstr({
//     [styles]: true,
//     [styles.inverse()]: inverse,
//     [styles.size(size)]: true
//   });
//   return (
//     <button class={style}>
//       {icon && <span class={styles.icon}>{icon}</span>}
//       {children}
//     </button>
//   );
// }

// <div>
//   <Button size='small'>Hello CSS Blocks World!</Button><br />
//   <Button size='medium' inverse={true}>Hello CSS Blocks World!</Button><br />
//   <Button size='large'>Hello CSS Blocks World!</Button>
// </div>

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/app" component={Question} />
      <Route path="/done" component={Done} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
)
