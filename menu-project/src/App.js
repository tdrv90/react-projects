import { useState } from 'react'
import Categories from './components/Categories'
import Menu from './components/Menu'

import './index.css';
import data from './mockdata'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return
    }

    const newItems = data.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} allCategories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
