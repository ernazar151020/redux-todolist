import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";
import { deleteTodo, check, clearAll } from "../action";
const List = (props) => {
  return (
    <ListContent>
      {props.todos.map((item, index) => {
        const { completed } = item;
        return (
          <>
            <SingleList
              key={index}
              style={{
                textDecoration: completed ? "line-through" : "none",
                background: completed ? "green" : "#ffc222",
              }}
            >
              <Text>{item.message}</Text>
              <IconContainer>
                <Icon onClick={() => props.dispatch(deleteTodo(item.id))}>
                  <Trash />
                </Icon>

                <Icon onClick={() => props.dispatch(check(item.id))}>
                  <Check />
                </Icon>
              </IconContainer>
            </SingleList>
          </>
        );
      })}
      <Button onClick={() => props.dispatch(clearAll())}>
        {props.todos.length === 0 ? "" : "Clear All"}
      </Button>
    </ListContent>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.list };
  // todos: state.todos.list,
};
export default connect(mapStateToProps)(List);
const ListContent = styled.div`
  margin-top: 2rem;
`;
const SingleList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffc222;
  padding: 10px;
  margin: 1rem 0;
`;
const Text = styled.div`
  font-size: 1.3rem;
  white-space: nowrap;
`;
const Icon = styled.div`
  padding: 0 10px;
  font-size: 1.3rem;
  cursor: pointer;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Trash = styled(FaTrashAlt)``;
const Edit = styled(FaEdit)``;
const Check = styled(FiCheckSquare)``;
const Button = styled.button`
  background: #0a0a0a;
  color: #ffffff;
  padding: 10px 30px;
  display: block;
  text-align: center;
  width: 100%;
  outline: none;
  margin: 1rem 0;
  cursor: pointer;
`;
