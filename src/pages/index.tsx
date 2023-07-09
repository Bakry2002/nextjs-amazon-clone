import Banner from "@/components/Banner";
import Products from "@/components/Products";

//? ts types 
import { ProductProps } from "../../type";

interface Props {
  products: ProductProps;
}

export default function Home({products} : Props) { 
  return (
    <main>
      <div className='max-w-screen-2xl mx-auto'>
        <Banner/>
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={products}/>
        </div>
      </div>
    </main>
  )
}


// ================= SSR for data fetching ================= 
//? getServerSideProps:-
  // is a function that runs at the server side and fetches data before the page is rendered and sent to the client.
  // If you export a function called getServerSideProps (Server-Side Rendering) from a page, 
  // Next.js will pre-render this page on each request using the data returned by getServerSideProps.

export const getServerSideProps = async () => {
  const response = await fetch('https://fakestoreapiserver.reactbd.com/tech'); 
  const data = await response.json();
  return {props : {products : data} }; // props are passed to the page component as props, meaning they will be accessible as props.products
}
