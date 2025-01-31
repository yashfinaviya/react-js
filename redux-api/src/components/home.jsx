// import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getAllProductAsync,
  getAllProducts,
  deleteproductAsync,
} from "../services/action/Product.action";
import { useNavigate } from "react-router";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const Home = () => {
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelDelete = (id) => {
    dispatch(deleteproductAsync(id));
  };

  const handelEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    dispatch(getAllProductAsync());
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : products.length == 0 ? (
        <h4 className="d-flex justify-content-center">No Data Found</h4>
      ) : (
        <Container>
          <Row>
            {products.map((product) => (
              <Col xl={4}>
                <Card className="card"
                  style={{
                    width: "100%",
                    margin: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="img"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body className="body">
                    <Card.Title>
                      <div>
                        <h3 className="title text-success fw-bolder">Title:<span className="text-secondary fs-3 fw-normal">{product.title}</span></h3>
                      </div>
                    </Card.Title>
                    <Card.Text>
                      <h4 className="desc text-success fw-bolder">Description: <span className="text-secondary fs-3 fw-normal">{product.description}</span></h4>
                      <h4 className="price text-success fw-bolder">Price: <span className="text-secondary fs-3 fw-normal">{product.price}</span></h4>
                    </Card.Text>
                    <Button className="edit me-3"
                      onClick={() => handelEdit(product.id)}
                      variant="warning"
                    >
                      <FaEdit className="editbtn" />
                    </Button>{" "}
                    <Button
                      className="delete"
                      onClick={() => handelDelete(product.id)}
                      variant="danger"
                    >
                      <FaTrash className="deletebtn" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};
export default Home;