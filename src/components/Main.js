import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTodo } from "../action";
import List from "./List";

const Main = (prop) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.userInput.value;
    console.log(input);
    prop.dispatch(addTodo(input));
    e.target.userInput.value = "";
  };
  const [status, setStatus] = useState("");
  const [filter, setFilter] = useState([]);
  // const statusHandler = (e) => {
  //   console.log(e.target.value);
  //   setStatus(e.target.value);
  // };
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilter(prop.list.filter((item) => item.completed === true));
        break;
      case "Uncompleted":
        setFilter(prop.list.filter((item) => item.completed === false));
        break;

      default:
        setFilter(prop.list);
        break;
    }
  };
  useEffect(() => {
    filterHandler();
  }, []);

  return (
    <TodoSections>
      <Container>
        <H1>REDUX TO DO LIST</H1>
        <FormContainer>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Input name="userInput" placeholder="Type something..." />
            {/* <Select onChange={statusHandler}>
              <Option>All</Option>
              <Option>Completed</Option>
              <Option>Uncompleted</Option>
            </Select> */}
            <Button>Submit</Button>
          </Form>
        </FormContainer>
      </Container>
      <ListWrap>
        <List filter={filter} />
      </ListWrap>
    </TodoSections>
  );
};
const mapStateToProps = (state) => {
  return { list: state.list };
};
export default connect(mapStateToProps)(Main);
const TodoSections = styled.section``;
const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 15px;
`;
const H1 = styled.h1`
  text-align: center;
  margin: 2rem 0;
`;
const FormContainer = styled.div`
  background: #ccc;
  padding: 1rem;
  /* max-width: 80vw;
  margin: 0 auto; */
`;
const Form = styled.form`
  display: flex;

  justify-content: space-around;
  align-items: center;
`;
const Input = styled.input`
  width: 80%;
  padding: 8px 10px;
  font-size: 16px;
`;
const Select = styled.select`
  padding: 10px 10px;
`;
const Option = styled.option`
  padding: 10px 10px;
`;
const Button = styled.button`
  padding: 10px 10px;
  width: 20%;
  margin-left: 10px;
`;
const ListWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
`;
