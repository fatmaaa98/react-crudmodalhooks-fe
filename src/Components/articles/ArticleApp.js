import React, { useEffect, useState } from 'react'

import ArticleList from './ArticleList';
import { fetchArticles,deleteArticle } from '../../Services/ArticleService';



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

  const deleteProduct = (productId) => {
    deleteArticle(productId)
    .then(res=>
    setProducts(products.filter((product) => product._id !== productId)))
    //.then(console.log("suppression effectuée avec success"))
    .catch(error=>console.log(error))
    //}
    };

  return (
    <div>
      <ArticleList products={products} deleteProduct={deleteProduct}/>
    </div>
  )
}

export default ArticleApp