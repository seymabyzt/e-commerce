export async function getData() {
  try {
    const res = await fetch('https://e-commerce-json-server-pied.vercel.app/products')
    if (!res.ok) {
       throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }
  catch(err) {
    console.log(err.message);
    return [];
  }
   
  }

  export async function getProduct(params) {
    try{
    const res = await fetch(`https://e-commerce-json-server-pied.vercel.app/products/${params.id}`)
    if (!res.ok) {
       throw new Error('Failed to fetch data')
    }
  
    return res.json()  }
    catch(err) {
      console.log(err.message);
      return [];
    }
  }

  export async function getReviews(productId) {
    try{
    const res = await fetch(`https://e-commerce-json-server-pied.vercel.app/reviews/?productId=${productId}`)
    if (!res.ok) {
       throw new Error('Failed to fetch data')
    }
  
    return res.json()  }
    catch(err) {
      console.log(err.message);
      return [];
    }
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
      
  
 
