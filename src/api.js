export async function getData() {
    const res = await fetch('https://e-commerce-json-server-pied.vercel.app/products')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }

  export async function getProduct(params) {
    const res = await fetch(`https://e-commerce-json-server-pied.vercel.app/products/${params.id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }

  export async function getReviews(productId) {
    const res = await fetch(`https://e-commerce-json-server-pied.vercel.app/reviews/?productId=${productId}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }

export async function postComment(){
  const response = await fetch(`http://localhost:3000/${id}reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  });

  if (!response.ok) {
    throw new Error('Review submission failed');
  }
}
      
  
 
