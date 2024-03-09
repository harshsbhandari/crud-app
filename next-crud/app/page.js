import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>CRUD Operations on Products - </h1>
      <div>
        <Link href="/addProduct">      
          <button>Add Product</button>
        </Link>
        
        <Link href="/deleteProduct">      
          <button>Delete Product</button>
        </Link>

        <Link href="/getProduct">      
          <button>Get All Product</button>
        </Link>

        <Link href="/updateProduct">      
          <button>Update Product</button>
        </Link>
      </div>
    </div>
  )
}
