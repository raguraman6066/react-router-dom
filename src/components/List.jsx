import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Atom } from "react-loading-indicators";
import useFetch from "./custom-hook/UseFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const List = () => {
  let navigate = useNavigate();
  let { products, error, isLoading, setProducts } = useFetch(
    "http://localhost:4000/products"
  );

  let handleDelete = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
      let newProductList = products.filter((product) => product.id !== id);
      setProducts(newProductList);
    });
  };
  /*let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json(); //convert response to json data
        } else {
          throw new Error("Search Proper Data");
        }
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);*/

  if (isLoading) {
    return (
      <div>
        <Atom color="#2699e8" size="medium" text="Loading..." textColor="" />
      </div>
    );
  }

  return (
    <div>
      <article>
        <span>To create new product</span>
        <button onClick={()=>{
          navigate('/newproduct')
        }}>Click Me!</button>
      </article>
      <h1>Product List</h1>
      <section className="products">
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }} className="product">
            <center>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "9rem", height: "12rem" }}
              />
            </center>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              {/* <Card.Text style={{ overflow: "scroll", height: "150px" }}>
                {product.description}
              </Card.Text> */}
              <Card.Title>$ {product.price}</Card.Title>
            </Card.Body>
            <Card.Footer
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Button variant="primary">
                <MdAddShoppingCart />
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  navigate(`/update/${product.id}`);
                }}
              >
                <FaEdit />
              </Button>
              <Button variant="danger" onClick={() => handleDelete(product.id)}>
                <MdDelete />
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </section>
      {error && <p>{error}</p>}
    </div>
  );
};

export default List;
