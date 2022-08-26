import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} inline style={{ display: "flex" }}>
      <Form.Control
        type="search"
        placeholder="search products....."
        className="me-3"
        aria-label="Search"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBox;
