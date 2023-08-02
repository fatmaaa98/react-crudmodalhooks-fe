import React, { useEffect, useState } from 'react'

import ArticleList from './ArticleList';
import { fetchArticles } from '../../Services/ArticleService';


const ArticleApp = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    listproduits()
  }, [products])

  const listproduits = () => {
    fetchArticles()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <ArticleList products={products} />
    </div>
  )
}

export default ArticleApp