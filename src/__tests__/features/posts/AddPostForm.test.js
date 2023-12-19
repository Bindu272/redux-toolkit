import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AddPostForm from "../../../features/posts/AddPostForm";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
// import { postAdded } from "../../../features/posts/postsSlice";

const mockStore = configureStore([]);
describe("AddPostForm component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      posts: [],
      users: [
        { id: 1, name: "user1" },
        { id: 2, name: "user2" },
      ],
    });
  });
  it("renders the AddPostForm component", () => {
    render(
      <Provider store={store}>
        <AddPostForm />
      </Provider>
    );
    expect(screen.getByLabelText(/Post Title:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Author:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Content:/i)).toBeInTheDocument();
    expect(screen.getByText(/Save Post/i)).toBeInTheDocument();
  });
  it("Handles input changes", () => {
    render(
      <Provider store={store}>
        <AddPostForm />
      </Provider>
    );
    userEvent.type(screen.getByLabelText(/Post Title:/i), "Test Title");
    userEvent.type(screen.getByLabelText(/Author:/i), "1");
    userEvent.type(screen.getByLabelText(/Content/i), "Test Content");
    expect(screen.getByLabelText(/Post Title:/i)).toHaveValue("Test Title");
    // expect(screen.getByLabelText(/Author:/i)).toHaveValue(1);
    expect(screen.getByLabelText(/Content:/i)).toHaveValue("Test Content");
  });
  it("handles save button click", () => {
    render(
      <Provider store={store}>
        <AddPostForm />
      </Provider>
    )
    userEvent.type(screen.getByLabelText(/Post Title:/i), "Test Title");
    userEvent.type(screen.getByLabelText(/Author:/i), 1); 
    userEvent.type(screen.getByLabelText(/Content:/i), "Test Content");

    // fireEvent.click(screen.getByText(/Save Post/i));
    // expect(store.getActions()).toEqual([
    //     postAdded({ title: "Test Title", content: "Test Content", userId: "1" }),
    //   ]);
    //   expect(screen.getByLabelText(/Post Title:/i)).toHaveValue("");
    //   expect(screen.getByLabelText(/Content:/i)).toHaveValue("");
})

});
